import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const tempReducer = (state = {}, action) => {
  return state;
};

const rootReducer = {
  temp: tempReducer,
};

const persistConfig = {
  key: 'root',
  storage,
};

const store = configureStore({
  reducer: rootReducer,
});

const persistor = persistStore(store);

export { store, persistor };
