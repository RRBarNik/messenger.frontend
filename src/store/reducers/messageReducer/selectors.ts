import { AppStateType } from "..";

export const getMessagesList = (state: AppStateType) =>
    state.message.messages

export const getIsLoadingMessages = (state: AppStateType) =>
    state.message.isLoading

export const getMessagesError = (state: AppStateType) =>
    state.message.error