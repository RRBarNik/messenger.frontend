import React from "react";
import { connect } from 'react-redux';
import { login } from '../../../store/reducers/authReducer/index';
import { Redirect, NavLink } from "react-router-dom";
import { AppStateType } from "../../../store/reducers";
import { ProfileDataType } from "../../../types/types";
import LoginForm from "./LoginForm/LoginForm";
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

const Login: React.FC<PropsType> = (props) => {
    const onSubmit = (values: LoginFormValuesType) => {
        props.login(values.login, values.password);
    }

    if (props.isAuth) {
        return <Redirect to={'/user/' + props.id} />
    }

    return (
        <div className={styles.authBlock}>
            <div className={styles.authList}>
                <h1 className={styles.authTitle}>
                    Sign in to Messenger
                </h1>
                <LoginForm submit={onSubmit} />
                <div className={styles.subText + " " + styles.smallText}>
                    New to Messenger?{" "}
                    <NavLink className={styles.navlink} to={'/signup'}>
                        Create an account.
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    id: state.auth.id
})

export default connect(mapStateToProps, { login })(Login);