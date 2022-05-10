import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { getUsers } from "../../store/reducers/userReducer/index";
import { compose } from "redux";
import { UserType } from "../../types/types";
import { AppStateType } from "../../store/reducers";

type MapStatePropsType = {
    users: Array<UserType>
}

type MapDispatchPropsType = {
    getUsers: (CurrentPage: number, pageSize: number) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsers(1, 10);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, 20);
    }

    render() {
        return <>
            <Users
                users={this.props.users}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.user.users,
    }
}

export default compose(
    connect(
        mapStateToProps,
        {
            getUsers
        }),
)(UsersContainer);