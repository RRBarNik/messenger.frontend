import React from "react";
import { useSelector } from "react-redux";
import Profile from "./Profile";
import { getIsLoadingUserProfile } from "../../store/reducers/profileReducer/selectors";

const ProfilePage: React.FC<{}> = (props) => {
    const isLoading = useSelector(getIsLoadingUserProfile)

    return <>
        <Profile />
    </>
}

export default ProfilePage;