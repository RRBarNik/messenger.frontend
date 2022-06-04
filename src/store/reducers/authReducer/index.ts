import { ThunkAction } from "redux-thunk";
import { AppStateType } from "..";
import { IUser } from "../../../models/IUser";
import AuthService from "../../../services/AuthService";

interface AuthState extends IUser {
    isAuth: boolean;
    isLoading: boolean,
    error: string | null
}

enum AuthActionTypes {
    FETCH_AUTH_USER_DATA = "messenger/auth/FETCH_AUTH_USER_DATA",
    FETCH_AUTH_USER_DATA_SUCCESS = "messenger/auth/FETCH_AUTH_USER_DATA_SUCCESS",
    FETCH_AUTH_USER_DATA_ERROR = "messenger/auth/FETCH_AUTH_USER_DATA_ERROR"
}

interface FetchAuthUserDataAction {
    type: typeof AuthActionTypes.FETCH_AUTH_USER_DATA,
}

interface FetchAuthUserDataSuccessAction {
    type: typeof AuthActionTypes.FETCH_AUTH_USER_DATA_SUCCESS,
    payload: IUser
}

interface FetchAuthUserDataErrorAction {
    type: typeof AuthActionTypes.FETCH_AUTH_USER_DATA_ERROR,
    payload: string
}

type AuthAction = FetchAuthUserDataAction
    | FetchAuthUserDataSuccessAction
    | FetchAuthUserDataErrorAction

const initialState: AuthState = {
    id: '',
    email: '',
    firstname: '',
    lastname: '',
    isAuth: false,
    isLoading: false,
    error: null
}

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionTypes.FETCH_AUTH_USER_DATA:
            return {
                ...state,
                isLoading: true,
            };
        case AuthActionTypes.FETCH_AUTH_USER_DATA_SUCCESS: {
            return {
                ...state,
                ...action.payload,
                isAuth: true,
            };
        }
        case AuthActionTypes.FETCH_AUTH_USER_DATA_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        default:
            return state
    }
}

export const FetchAuthUserProfile = (): AuthAction => ({
    type: AuthActionTypes.FETCH_AUTH_USER_DATA
})

export const FetchAuthUserProfileSuccess = (profileData: IUser): AuthAction => ({
    type: AuthActionTypes.FETCH_AUTH_USER_DATA_SUCCESS,
    payload: profileData
})

export const FetchAuthUserProfileError = (error: string): AuthAction => ({
    type: AuthActionTypes.FETCH_AUTH_USER_DATA_ERROR,
    payload: error
})

export const login = (email: string, password: string)
    : ThunkAction<Promise<void>, AppStateType, unknown, AuthAction> => {
    return async (dispatch) => {
        dispatch(FetchAuthUserProfile());
        let response = await AuthService.login(email, password);
        localStorage.setItem('token', response.data.accessToken);
        //dispatch(FetchAuthUserProfileSuccess(response.data.user));
    }
}

export const register = (email: string, 
        password: string, 
        firstname: string, 
        lastname: string)
        : ThunkAction<Promise<void>, AppStateType, unknown, AuthAction> => {
    return async (dispatch) => {
        dispatch(FetchAuthUserProfile());
        let response = await AuthService.registration(email, password, firstname, lastname);
        localStorage.setItem('token', response.data.accessToken);
        //dispatch(FetchAuthUserProfileSuccess(response.data.user));
    }
}