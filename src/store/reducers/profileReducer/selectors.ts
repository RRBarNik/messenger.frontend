import { AppStateType } from "..";

export const getUserProfileSelector = (state: AppStateType) =>
    state.profile.profileData

export const getIsLoadingUserProfile = (state: AppStateType) =>
    state.profile.isLoading

export const getUserProfileError = (state: AppStateType) =>
    state.profile.error