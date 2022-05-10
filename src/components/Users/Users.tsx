import React from "react";
import styles from './Users.module.css';
import User from "./User/User";
import { UserType } from "../../types/types";

type PropsType = {
    users: Array<UserType>
}

let Users: React.FC<PropsType> = (
    {
        users,
        ...props }) => {
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