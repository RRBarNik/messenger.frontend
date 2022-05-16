import React, { useEffect } from "react";
import styles from './Users.module.css';
import User from "./User/User";
import { useDispatch, useSelector } from "react-redux";
import { getUsersList } from "../../store/reducers/userReducer/selectors";
import { getUsers } from "../../store/reducers/userReducer";


let Users: React.FC<{}> = (props) => {
    const users = useSelector(getUsersList)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers(1, 10))
    }, [])

    return (
        <div className={styles.container}>
            {
                users.map(u =>
                    <User
                        key={u.id}
                        user={u}
                    />)
            }
        </div >)
}

export default Users;