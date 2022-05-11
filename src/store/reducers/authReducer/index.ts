import { ThunkAction } from "redux-thunk";
import { AppStateType } from "..";
import { ProfileDataType } from "../../../types/types";

interface AuthState extends ProfileDataType {
    isAuth: boolean;
    isLoading: boolean,
    error: string | null
}

enum AuthActionTypes {
    FETCH_AUTH_USER_DATA = "messenger/auth/FETCH_AUTH_USER_DATA",
    FETCH_AUTH_USER_DATA_SUCCESS = "messenger/auth/FETCH_AUTH_USER_DATA_SUCCESS",
    FETCH_AUTH_USER_DATA_ERROR = "messenger/auth/FETCH_AUTH_USER_DATA_ERROR",
    GET_CAPTCHA_URL_SUCCESS = "messenger/auth/GET_CAPTCHA_URL_SUCCESS"
}

interface FetchAuthUserDataAction {
    type: typeof AuthActionTypes.FETCH_AUTH_USER_DATA,
}

interface FetchAuthUserDataASuccessction {
    type: typeof AuthActionTypes.FETCH_AUTH_USER_DATA_SUCCESS,
    payload: ProfileDataType
}

interface FetchAuthUserDataAErrorAction {
    type: typeof AuthActionTypes.FETCH_AUTH_USER_DATA_ERROR,
    payload: string
}

interface GetCaptchaUrlSuccessActionType {
    type: typeof AuthActionTypes.GET_CAPTCHA_URL_SUCCESS,
    payload: {
        captchaUrl: string
    }
}

type AuthAction = FetchAuthUserDataAction
    | FetchAuthUserDataASuccessction
    | FetchAuthUserDataAErrorAction
    | GetCaptchaUrlSuccessActionType

const initialState: AuthState = {
    id: '',
    nickname: '',
    firstname: '',
    lastname: '',
    role: null,
    activeStatus: false,
    isAuth: false,
    isLoading: false,
    error: null
}

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionTypes.FETCH_AUTH_USER_DATA:
            return {
                ...state,
                isAuth: true,
                isLoading: true,
            };
        case AuthActionTypes.FETCH_AUTH_USER_DATA_SUCCESS: {
            return {
                ...state,
                ...action.payload
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

export const FetchAuthUserProfile = (): FetchAuthUserDataAction => ({
    type: AuthActionTypes.FETCH_AUTH_USER_DATA
})

export const FetchAuthUserProfileSuccess = (profileData: ProfileDataType): FetchAuthUserDataASuccessction => ({
    type: AuthActionTypes.FETCH_AUTH_USER_DATA_SUCCESS,
    payload: profileData
})

export const FetchAuthUserProfileError = (error: string): FetchAuthUserDataAErrorAction => ({
    type: AuthActionTypes.FETCH_AUTH_USER_DATA_ERROR,
    payload: error
})

export const login = (login: string, password: string)
    : ThunkAction<Promise<void>, AppStateType, unknown, AuthAction> => {
    return async (dispatch) => {
        dispatch(FetchAuthUserProfile());
        /*let response = await AuthAPI.addUser(profile);
        dispatch(FetchAuthUserProfileSuccess(response));*/
    }
}