import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import employersReducer from './ducks';
import { watchFetchEmployers } from './ducks/employers';
import { watchFetchSubordinates } from './ducks/subordinates';

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;

const rootReducer = employersReducer;

const sagaMiddleware = createSagaMiddleware();

const createAppStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware:[sagaMiddleware],
  });
  sagaMiddleware.run(watchFetchEmployers);
  sagaMiddleware.run(watchFetchSubordinates);

  return store;
};

export const appStore = createAppStore();
