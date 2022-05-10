import React from "react";
import { connect } from "react-redux";
import { getUserProfile } from "../../store/reducers/profileReducer/index";
import { compose } from "redux";
import { ProfileDataType } from "../../types/types";
import { AppStateType } from "../../store/reducers";
import { withRouter, RouteComponentProps } from "react-router-dom";
import Profile from "./Profile";

type MapStatePropsType = {
    userProfile: ProfileDataType
}

type MapDispatchPropsType = {
    getUserProfile: (userId: string | undefined) => void
}

type PathPropsType = {
    userId: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<PathPropsType>

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId);
    }

    onPageChanged = () => {
        this.props.getUserProfile(this.props.match.params.userId);
    }

    render() {
        return <>
            <Profile
                userProfile={this.props.userProfile}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        userProfile: state.profile.profileData,
    }
}

export default compose<React.ComponentType>(
    connect(
        mapStateToProps,
        {
            getUserProfile
        }),
    withRouter
)(ProfileContainer);