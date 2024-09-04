import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const tempReducer = (state = {}, action) => {
  return state;
};

const rootReducer = combineReducers({
  temp: tempReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['register', 'rehydrate'],
        // Ignore these paths in the state
        ignoredPaths: ['some.nested.path'],
      },
    }),
});

const persistor = persistStore(store);

export { persistor, store };
