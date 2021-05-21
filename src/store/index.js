import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';
import rootReducer from './slices/reducers';
import rootEpic from './epics';

const epicMiddleware = createEpicMiddleware();

export default (preloadedState) => {
  const isEnvDevelopment = process.env.NODE_ENV === 'development';
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [
      isEnvDevelopment && createLogger({
        collapsed: true,
      }),
      epicMiddleware,
      ...getDefaultMiddleware({
        thunk: false,
        serializableCheck: false,
      }),
    ].filter(Boolean),
    preloadedState,
  });
  epicMiddleware.run(rootEpic);
  return store;
};
