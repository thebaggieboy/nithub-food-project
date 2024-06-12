import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import itemSlice from "./food_item/itemSlice"
import itemTypeSlice from "./item_types/itemTypeSlice"

import {
    persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["item", "item_type"]
}

const rootReducer = combineReducers({
    item : itemSlice,
    itemType : itemTypeSlice,

})

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleWare) => (
        getDefaultMiddleWare({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(logger)
    ),
    devTools: process.env.NODE_ENV !== "production"
})

export const peristor = persistStore(store)


export default store