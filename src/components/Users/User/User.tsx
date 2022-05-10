import React from "react";
import styles from './User.module.css';
import { NavLink } from 'react-router-dom';
import { UserType } from "../../../types/types";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

type PropsType = {
    user: UserType,
}

let User: React.FC<PropsType> = ({ user }) => {
    return (
        <div className={styles.userWrapper}>
            <span className={styles.userImage}>
                <Avatar shape="square" size={64} icon={<UserOutlined />} />
            </span>
            <span className={styles.userInfo}>
                <NavLink to={'/profile/' + user.id}>
                    <div>
                        {user.nickname}
                    </div>
                </NavLink>
                <div>
                    {user.id}
                </div>
            </span>
        </div >)
}

export default User;