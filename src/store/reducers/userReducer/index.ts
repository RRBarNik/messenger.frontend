import { ThunkAction } from "redux-thunk";
import { AppStateType } from "..";
import { UsersAPI } from "../../../api/api";
import { IUser } from "../../../models/IUser";

export interface UserState {
    users: Array<IUser>;
    isLoading: boolean;
    error: null | string;
}

export enum UserActionTypes {
    FETCH_USERS = "messenger/user/FETCH_USERS",
    FETCH_USERS_SUCCESS = "messenger/user/FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "messenger/user/FETCH_USERS_ERROR",
}

interface FetchUsersAction {
    type: typeof UserActionTypes.FETCH_USERS
}

interface FetchUsersSuccessAction {
    type: typeof UserActionTypes.FETCH_USERS_SUCCESS;
    payload: Array<IUser>;
}

interface FetchUsersErrorAction {
    type: typeof UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

export type UserAction =
    FetchUsersAction
    | FetchUsersSuccessAction
    | FetchUsersErrorAction

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: null
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {
                isLoading: true,
                error: null,
                users: []
            }
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {
                isLoading: false,
                error: null,
                users: action.payload
            }
        case UserActionTypes.FETCH_USERS_ERROR:
            return {
                isLoading: false,
                error: action.payload,
                users: []
            }
        default:
            return state
    }
}

export const FetchUsers = (): UserAction => ({
    type: UserActionTypes.FETCH_USERS
})

export const FetchUsersSuccess = (users: IUser[]): UserAction => ({
    type: UserActionTypes.FETCH_USERS_SUCCESS,
    payload: users
})

export const FetchUsersError = (error: string): UserAction => ({
    type: UserActionTypes.FETCH_USERS_ERROR,
    payload: error
})

export const getUsers = (page: number, pageSize: number)
    : ThunkAction<Promise<void>, AppStateType, unknown, UserAction> => {
    return async (dispatch) => {
        dispatch(FetchUsers());
        let response = await UsersAPI.getUsers();
        dispatch(FetchUsersSuccess(response.users));
    }
}