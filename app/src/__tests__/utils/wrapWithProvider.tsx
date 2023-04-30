import { initializeStore } from '@/redux/store';
import { ReactElement } from 'react';
import { Provider } from 'react-redux';

const store = initializeStore();

export function wrapWithProvider(component: ReactElement) {
  return <Provider store={store}>{component}</Provider>;
}
