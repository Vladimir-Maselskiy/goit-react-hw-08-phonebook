import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import { contactsReducer } from './reducer';
import { userSliceReducer } from './userSlice';
import { contactsSliceReducer } from './contactSlice';
import { filterReducer, localeReducer, themeModeReducer } from './reducer';

const rootReducer = combineReducers({
  auth: userSliceReducer,
  contacts: contactsSliceReducer,
  filter: filterReducer,
  themeMode: themeModeReducer,
  locale: localeReducer,
});

const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['auth', 'themeMode', 'locale'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
