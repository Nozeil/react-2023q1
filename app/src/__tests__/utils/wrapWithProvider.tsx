import { store } from '@/redux/store';
import { ReactElement } from 'react';
import { Provider } from 'react-redux';

export function wrapWithProvider(component: ReactElement) {
  return <Provider store={store}>{component}</Provider>;
}
