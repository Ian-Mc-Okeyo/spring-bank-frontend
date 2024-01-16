import { configureStore, combineReducers } from "@reduxjs/toolkit";
import  authReducer from "./Slices/auth";
import dataReducer from "./Slices/data";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const reducer = combineReducers({
  auth: authReducer,
  data: dataReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

export default store