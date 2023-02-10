import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {postsReducer, userReducer} from "./slice";

const rootReducer = combineReducers({
    users: userReducer,
    posts: postsReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};