import { authReducer } from "./authReducer/index";
import { userReducer } from "./userReducer/index";
import { combineReducers } from "redux";
import { profileReducer } from "./profileReducer/index";
import { chatReducer } from "./chatReducer/index";
import { messageReducer } from "./messageReducer/index";

export const rootReducer = combineReducers({
    message: messageReducer,
    chat: chatReducer,
    profile: profileReducer,
    auth: authReducer,
    user: userReducer,
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>