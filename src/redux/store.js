import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import cartReducer from './cart/cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
