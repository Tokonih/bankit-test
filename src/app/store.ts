import { configureStore } from '@reduxjs/toolkit';
import accountSlice from '../features/account/accountSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    account: accountSlice
  }
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
