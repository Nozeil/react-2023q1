import { RootState } from '@/redux/types';
import { PreloadedState } from '@reduxjs/toolkit';

export {};

declare global {
  interface Window {
    __PRELOADED_STATE__?: PreloadedState<RootState>;
  }
}
