import React from "react";
import Header from "./Header";
import { connect } from 'react-redux';
import { AppStateType } from "../../store/reducers";

type mapStateToProps = {
    nickname: string
    isAuth: boolean
}

class HeaderContainer extends React.Component<mapStateToProps> {
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: AppStateType): mapStateToProps => {
    return {
        nickname: state.auth.nickname,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {})(HeaderContainer);