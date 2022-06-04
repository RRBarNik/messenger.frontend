import { AppStateType } from "..";

export const getIsAuth = (state: AppStateType) =>
    state.auth.isAuth;

export const getUserId = (state: AppStateType) =>
    state.auth.id;