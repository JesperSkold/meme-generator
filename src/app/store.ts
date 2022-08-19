import { configureStore } from '@reduxjs/toolkit';
import memeReducer from "../features/memeSlice"
import modalReducer from "../features/modalSlice"

export const store = configureStore({
  reducer: {
    memeData: memeReducer,
    modal: modalReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;