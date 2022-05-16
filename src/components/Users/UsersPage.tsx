import React from "react";
import { useSelector } from "react-redux";
import Users from "./Users";
import { getIsLoadingUsers } from "../../store/reducers/userReducer/selectors";

const UsersPage: React.FC<{}> = (props) => {
    const isLoading = useSelector(getIsLoadingUsers)

    return <>
        <Users />
    </>
}

export default UsersPage;