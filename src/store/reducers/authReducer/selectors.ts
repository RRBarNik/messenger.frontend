import { AppStateType } from "..";

export const getIsAuth = (state: AppStateType) =>
    state.auth.isAuth;

export const getAuthUserId = (state: AppStateType) =>
    state.auth.id;