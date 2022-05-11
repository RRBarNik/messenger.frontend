import { ThunkAction } from "redux-thunk";
import { AppStateType } from "..";
import { MessageType } from "../../../types/types";
import { ChatsAPI } from "../../../api/api";

interface MessageState {
    messages: Array<MessageType>,
    chatId: string | undefined,
    isLoading: boolean,
    error: string | null
}

enum MessageActionTypes {
    FETCH_MESSAGES = "messenger/message/FETCH_MESSAGES",
    FETCH_MESSAGES_SUCCESS = "messenger/message/FETCH_MESSAGES_SUCCESS",
    FETCH_MESSAGES_ERROR = "messenger/message/FETCH_MESSAGES_ERROR",
}

interface FetchMessagesAction {
    type: typeof MessageActionTypes.FETCH_MESSAGES
}

interface FetchMessagesSuccessAction {
    type: typeof MessageActionTypes.FETCH_MESSAGES_SUCCESS;
    payload: {
        messages: MessageType[],
        chatId: string | undefined
    };
}

interface FetchMessagesErrorAction {
    type: typeof MessageActionTypes.FETCH_MESSAGES_ERROR;
    payload: string;
}

type MessageAction =
    FetchMessagesAction
    | FetchMessagesSuccessAction
    | FetchMessagesErrorAction

const initialState: MessageState = {
    messages: [],
    chatId: undefined,
    isLoading: false,
    error: null
}

export const messageReducer = (state = initialState, action: MessageAction): MessageState => {
    switch (action.type) {
        case MessageActionTypes.FETCH_MESSAGES:
            return {
                ...state,
                isLoading: true,
                error: null,
                messages: []
            }
        case MessageActionTypes.FETCH_MESSAGES_SUCCESS:
            return {
                chatId: action.payload.chatId,
                isLoading: false,
                error: null,
                messages: action.payload.messages
            }
        case MessageActionTypes.FETCH_MESSAGES_ERROR:
            return {
                chatId: undefined,
                isLoading: false,
                error: action.payload,
                messages: []
            }
        default:
            return state
    }
}

export const FetchMessages = (): FetchMessagesAction => ({
    type: MessageActionTypes.FETCH_MESSAGES
})

export const FetchMessagesSuccess = (messages: MessageType[], chatId: string | undefined): FetchMessagesSuccessAction => ({
    type: MessageActionTypes.FETCH_MESSAGES_SUCCESS,
    payload: {
        messages,
        chatId
    }
})

export const FetchMessagesError = (error: string): FetchMessagesErrorAction => ({
    type: MessageActionTypes.FETCH_MESSAGES_ERROR,
    payload: error
})

export const getMessages = (chatId: string)
    : ThunkAction<Promise<void>, AppStateType, unknown, MessageAction> => {
    return async (dispatch) => {
        dispatch(FetchMessages());
        let response = await ChatsAPI.getMessages(chatId);
        dispatch(FetchMessagesSuccess(response.messages, chatId));
    }
}