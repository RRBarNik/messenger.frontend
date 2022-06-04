import React from "react";
import { Redirect, NavLink } from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm";
import styles from "../Auth.module.css";
import { useSelector } from "react-redux";
import { getIsAuth, getUserId } from "../../../store/reducers/authReducer/selectors";

const Login: React.FC<{}> = (props) => {
    const isAuth = useSelector(getIsAuth);
    const id = useSelector(getUserId);

    if (isAuth) {
        return <Redirect to={'/user/' + id} />
    }

    return (
        <div className={styles.authBlock}>
            <div className={styles.authList}>
                <h1 className={styles.authTitle}>
                    Sign in to Messenger
                </h1>
                <LoginForm />
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

export default Login;