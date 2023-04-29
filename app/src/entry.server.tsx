import React from 'react';
import ReactDOMServer, { RenderToPipeableStreamOptions } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { App } from './App';
import { Provider } from 'react-redux';
import { booksApi } from './services/books';
import { initializeStore } from './redux/store';

export async function render(url: string, opts: RenderToPipeableStreamOptions | undefined) {
  const store = initializeStore();
  const dispatch = store.dispatch;
  dispatch(booksApi.endpoints.searchBooks.initiate('harry potter'));
  await Promise.all(dispatch(booksApi.util.getRunningQueriesThunk()));

  return ReactDOMServer.renderToPipeableStream(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}>
          <App isStatic={true} />
        </StaticRouter>
      </Provider>
    </React.StrictMode>,
    {
      ...opts,
      bootstrapModules: ['/src/entry.client.tsx'],
      bootstrapScriptContent: `
    window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState()).replace(/</g, '\\u003c')}`,
    }
  );
}
