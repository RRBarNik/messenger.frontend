import React from "react";
import { connect } from 'react-redux';
import { login } from '../../../store/reducers/authReducer/index';
import { Redirect, NavLink } from "react-router-dom";
import { AppStateType } from "../../../store/reducers";
import { ProfileDataType } from "../../../types/types";
import SignupForm from "./SignupForm/SignupForm";
import styles from "../Auth.module.css";

type MapStatePropsType = {
    isAuth: boolean,
    id: string
}

type MapDispatchPropsType = {
    login: (login: string, password: string) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType;

type LoginFormValuesType = {
    login: string,
    password: string
}

const Signup: React.FC<PropsType> = (props) => {
    const onSubmit = (values: LoginFormValuesType) => {
        console.log(` ${values.login}`);
    }

    if (props.isAuth) {
        return <Redirect to={'/user/' + props.id} />
    }

    return (
        <div className={styles.authBlock}>
            <div className={styles.authList}>
                <h1 className={styles.authTitle}>
                    Sign up to Messenger
                </h1>
                <SignupForm submit={onSubmit} />
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    id: state.auth.id
})

export default connect(mapStateToProps, { login })(Signup);