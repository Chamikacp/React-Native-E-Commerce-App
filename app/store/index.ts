import storage from "@react-native-async-storage/async-storage";
import { configureStore, Middleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import createSagaMiddleware from "redux-saga";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSagas";

export type RootState = ReturnType<typeof reducers>;

// Creating Middleware
const sagaMiddleware = createSagaMiddleware();
const middleware: Middleware[] = [sagaMiddleware];

// Combining Reducers
const combinedReducer = combineReducers({
  general: rootReducer,
});

const config = {
  debug: false,
  key: "root",
  storage,
  timeout: 50000,
  blacklist: ["general"],
  rootReducer: combinedReducer,
};

const reducers = persistReducer<ReturnType<typeof combinedReducer>>(
  config,
  combinedReducer
);

// Creating Store
const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).prepend(middleware),
});

export type AppDispatch = typeof store.dispatch;
export const useReduxDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;

const persistor = persistStore(store);
const initializeStore = () => ({ persistor, store });
if (!process.env.JEST_WORKER_ID) {
  sagaMiddleware.run(rootSaga);
}

export default initializeStore;
