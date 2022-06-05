import { ThunkAction } from "redux-thunk";
import { AppStateType } from "..";
import { IChat } from "../../../models/IChat";
import ChatService from "../../../services/ChatService";

export interface ChatState {
    chats: Array<IChat>,
    isLoading: boolean,
    error: string | null
}

export enum ChatActionTypes {
    FETCH_CHATS = "messenger/chat/FETCH_CHATS",
    FETCH_CHATS_SUCCESS = "messenger/chat/FETCH_CHATS_SUCCESS",
    FETCH_CHATS_ERROR = "messenger/chat/FETCH_CHATS_ERROR",
}

interface FetchChatsAction {
    type: typeof ChatActionTypes.FETCH_CHATS
}

interface FetchChatsSuccessAction {
    type: typeof ChatActionTypes.FETCH_CHATS_SUCCESS;
    payload: IChat[];
}

interface FetchChatsErrorAction {
    type: typeof ChatActionTypes.FETCH_CHATS_ERROR;
    payload: string;
}

export type ChatAction =
    FetchChatsAction
    | FetchChatsSuccessAction
    | FetchChatsErrorAction

const initialState: ChatState = {
    chats: [],
    isLoading: false,
    error: null,
}

export const chatReducer = (state = initialState, action: ChatAction): ChatState => {
    switch (action.type) {
        case ChatActionTypes.FETCH_CHATS:
            return {
                isLoading: true,
                error: null,
                chats: []
            }
        case ChatActionTypes.FETCH_CHATS_SUCCESS:
            return {
                isLoading: false,
                error: null,
                chats: action.payload
            }
        case ChatActionTypes.FETCH_CHATS_ERROR:
            return {
                isLoading: false,
                error: action.payload,
                chats: []
            }
        default:
            return state
    }
}

export const FetchUsers = (): ChatAction => ({
    type: ChatActionTypes.FETCH_CHATS
})

export const FetchUsersSuccess = (users: IChat[]): ChatAction => ({
    type: ChatActionTypes.FETCH_CHATS_SUCCESS,
    payload: users
})

export const FetchUsersError = (error: string): ChatAction => ({
    type: ChatActionTypes.FETCH_CHATS_ERROR,
    payload: error
})

export const getChats = ()
    : ThunkAction<Promise<void>, AppStateType, unknown, ChatAction> => {
    return async (dispatch) => {
        dispatch(FetchUsers());
        let response = await ChatService.fetchChats();
        dispatch(FetchUsersSuccess(response.data));
    }
}