import { AppStateType } from "..";

export const getChatsList = (state: AppStateType) =>
    state.chat.chats;

export const getIsLoadingChats = (state: AppStateType) =>
    state.chat.isLoading;

export const getChatsError = (state: AppStateType) =>
    state.chat.error;