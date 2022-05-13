import { ThunkAction } from "redux-thunk";
import { AppStateType } from "..";
import { UsersAPI } from "../../../api/api";
import { ProfileDataType } from "../../../types/types";

interface ProfileState {
    profileData: ProfileDataType,
    isLoading: boolean,
    error: string | null
}

enum ProfileActionTypes {
    FETCH_USER_PROFILE = "messenger/profile/FETCH_USER_PROFILE",
    FETCH_USER_PROFILE_SUCCESS = "messenger/profile/FETCH_USER_PROFILE_SUCCESS",
    FETCH_USER_PROFILE_ERROR = "messenger/profile/FETCH_USER_PROFILE_ERROR",
    SET_STATUS = "messenger/profile/SET_STATUS"
}

interface FetchUserProfileAction {
    type: typeof ProfileActionTypes.FETCH_USER_PROFILE;
}

interface FetchUserProfileSuccessAction {
    type: typeof ProfileActionTypes.FETCH_USER_PROFILE_SUCCESS;
    payload: ProfileDataType;
}

interface FetchUserProfileErrorAction {
    type: typeof ProfileActionTypes.FETCH_USER_PROFILE_ERROR;
    payload: string;
}

interface SetStatusAction {
    type: typeof ProfileActionTypes.SET_STATUS;
    payload: boolean
}

type ProfileAction =
    FetchUserProfileAction
    | FetchUserProfileSuccessAction
    | FetchUserProfileErrorAction
    | SetStatusAction

const initialState: ProfileState = {
    profileData: {
        id: '',
        nickname: '',
        firstname: null,
        lastname: null,
        role: null,
        activeStatus: false,
    },
    isLoading: false,
    error: null
}

export const profileReducer = (state = initialState, action: ProfileAction): ProfileState => {
    switch (action.type) {
        case ProfileActionTypes.FETCH_USER_PROFILE:
            return {
                ...state,
                isLoading: true,
            }
        case ProfileActionTypes.FETCH_USER_PROFILE_SUCCESS:
            return {
                profileData: {
                    ...state.profileData,
                    id: action.payload.id,
                    nickname: action.payload.nickname,
                    firstname: action.payload.firstname,
                    lastname: action.payload.lastname,
                    role: action.payload.role
                },
                isLoading: false,
                error: null
            }
        case ProfileActionTypes.FETCH_USER_PROFILE_ERROR:
            return {
                profileData: initialState.profileData,
                isLoading: false,
                error: action.payload
            }
        case ProfileActionTypes.SET_STATUS:
            return {
                ...state,
                profileData: {
                    ...state.profileData,
                    activeStatus: action.payload
                }
            }
        default:
            return state
    }
}

export const FetchUserProfile = (): ProfileAction => ({
    type: ProfileActionTypes.FETCH_USER_PROFILE
})

export const FetchUserProfileSuccess = (profileData: ProfileDataType): ProfileAction => ({
    type: ProfileActionTypes.FETCH_USER_PROFILE_SUCCESS,
    payload: profileData
})

export const FetchUserProfileError = (error: string): ProfileAction => ({
    type: ProfileActionTypes.FETCH_USER_PROFILE_ERROR,
    payload: error
})

export const getUserProfile = (userId: string | undefined)
    : ThunkAction<Promise<void>, AppStateType, unknown, ProfileAction> => {
    return async (dispatch) => {
        dispatch(FetchUserProfile());
        let response = await UsersAPI.getProfile(userId);
        dispatch(FetchUserProfileSuccess(response));
    }
}