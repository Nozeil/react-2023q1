import React from 'react';
import ReactDOMServer, { RenderToPipeableStreamOptions } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { App } from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

export function render(url: string, opts: RenderToPipeableStreamOptions | undefined) {
  return ReactDOMServer.renderToPipeableStream(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}>
          <App isStatic={true} />
        </StaticRouter>
      </Provider>
    </React.StrictMode>,
    opts
  );
}
