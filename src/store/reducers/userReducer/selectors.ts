import { AppStateType } from "..";

export const getUsersList = (state: AppStateType) =>
    state.user.users;

export const getIsLoadingUsers = (state: AppStateType) =>
    state.user.isLoading;

export const getUsersError = (state: AppStateType) =>
    state.user.error;
