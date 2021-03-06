import React from "react";
import { useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";
import SignupForm from "./SignupForm/SignupForm";
import styles from "../Auth.module.css";
import { getIsAuth, getAuthUserId } from "../../../store/reducers/authReducer/selectors";

const Signup: React.FC<{}> = (props) => {
    const isAuth = useSelector(getIsAuth);
    const id = useSelector(getAuthUserId);

    if (isAuth) {
        return <Redirect to={'/profile/' + id} />
    }

    return (
        <div className={styles.authBlock}>
            <div className={styles.authList}>
                <h1 className={styles.authTitle}>
                    Sign up to Messenger
                </h1>
                <SignupForm />
            </div>
        </div>
    )
}

export default Signup;