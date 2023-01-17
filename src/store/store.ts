import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {apiSlice} from './api';

const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({serializableCheck: false}).concat(apiSlice.middleware)
    })
}
