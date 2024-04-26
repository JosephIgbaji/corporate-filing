import { configureStore, combineReducers } from "@reduxjs/toolkit";
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
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/lib/storage";
import register from "./slices/register.slice";
import apiSlice from "../service/api/apiSlice";
import user from "./slices/user.slice";
import hardSet from "redux-persist/es/stateReconciler/hardSet";

const rootReducer = combineReducers({
  user,
  register,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const k =
  "%$gdhddjhf^^&ggdhhfhfhjdjdggdh7476ygh&^T%%&ggdhd764747hrYR$%^((hgdhdgg))gfgfhd";

const persistConfig = {
  key: "root",
  storage,
  version: 1,
  transforms: [
    encryptTransform({
      secretKey: import.meta.env.VITE_REACT_APP_ENCRYPT_KEY,
      // secretKey: k,
      onError: function (error) {
        console.log(error);
      },
    }),
  ],
  stateReconciler: hardSet,
  blacklist: apiSlice.reducerPath,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
});

const persistor = persistStore(store);

export default store;
export { persistor };
