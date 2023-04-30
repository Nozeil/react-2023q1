import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express, { NextFunction, Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT || 5174;

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use<Request, Response, NextFunction>('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');

      template = await vite.transformIndexHtml(url, template);

      const parts = template.toString().split(`<!--ssr-outlet-->`);

      const render = (await vite.ssrLoadModule('/src/entry.server.tsx')).render;
      res.write(parts[0]);
      const { pipe } = await render(url, {
        onShellReady() {
          res.status(200);
          pipe(res);
        },
        onAllReady() {
          res.write(parts[1]);
          res.end();
        },
        onError(err: Error) {
          console.error(err);
        },
      });
    } catch (e: unknown) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });

  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });
}

createServer();
