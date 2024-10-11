import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cart/cartSlice";

const tempReducer = (state = {}, action) => {
  return state;
};

const rootReducer = {
  temp: tempReducer,
};

const persistConfig = {
  key: "root",
  storage,
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
