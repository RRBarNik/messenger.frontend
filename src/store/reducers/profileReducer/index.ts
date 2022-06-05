import { ThunkAction } from "redux-thunk";
import { AppStateType } from "..";
import { UsersAPI } from "../../../api/api";
import { IUser } from "../../../models/IUser";
import UserService from "../../../services/UserService";

interface ProfileState {
    profileData: IUser,
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
    payload: IUser;
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
        email: '',
        firstname: '',
        lastname: '',
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
                    email: action.payload.email,
                    firstname: action.payload.firstname,
                    lastname: action.payload.lastname,
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
        default:
            return state
    }
}

export const FetchUserProfile = (): ProfileAction => ({
    type: ProfileActionTypes.FETCH_USER_PROFILE
})

export const FetchUserProfileSuccess = (profileData: IUser): ProfileAction => ({
    type: ProfileActionTypes.FETCH_USER_PROFILE_SUCCESS,
    payload: profileData
})

export const FetchUserProfileError = (error: string): ProfileAction => ({
    type: ProfileActionTypes.FETCH_USER_PROFILE_ERROR,
    payload: error
})

export const getUserProfile = (userId: string)
    : ThunkAction<Promise<void>, AppStateType, unknown, ProfileAction> => {
    return async (dispatch) => {
        dispatch(FetchUserProfile());
        let response = await UserService.fetchUserProfile(userId);
        dispatch(FetchUserProfileSuccess(response.data));
    }
}