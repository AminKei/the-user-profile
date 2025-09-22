import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import themeReducer from './themeslice';
import languageReducer from './languageslice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = {
  theme: themeReducer,
  language: languageReducer,
};

const persistedReducer = persistReducer(persistConfig, (state: any, action: any) => {
  return Object.keys(rootReducer).reduce((nextState: any, key) => {
    nextState[key] = (rootReducer as any)[key](state[key], action);
    return nextState;
  }, {});
});

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;