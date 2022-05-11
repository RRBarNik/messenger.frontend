import { authReducer } from "./authReducer/index";
import { userReducer } from "./userReducer/index";
import { combineReducers } from "redux";
import { profileReducer } from "./profileReducer/index";
import { chatReducer } from "./chatReducer/index";
import { messageReducer } from "./messageReducer/index";

export const rootReducers = combineReducers({
    message: messageReducer,
    chat: chatReducer,
    profile: profileReducer,
    auth: authReducer,
    user: userReducer,
})

export const configureReducer = (reducers = {}) =>
    combineReducers({
        message: messageReducer,
        chat: chatReducer,
        profile: profileReducer,
        auth: authReducer,
        user: userReducer,
        ...reducers
    })

type RootReducerType = typeof rootReducers
export type AppStateType = ReturnType<RootReducerType>