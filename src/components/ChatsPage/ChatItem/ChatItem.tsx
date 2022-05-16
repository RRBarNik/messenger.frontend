import React from "react";
import styles from './ChatItem.module.css';
import { NavLink } from 'react-router-dom';
import { ChatType } from "../../../types/types";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

type PropsType = {
    chat: ChatType,
}

let ChatItem: React.FC<PropsType> = ({ chat }) => {
    return (
        <div className={styles.chatWrapper}>
            <span className={styles.chatImage}>
                <Avatar shape="square" size={64} icon={<UserOutlined />} />
            </span>
            <span className={styles.chatInfo}>
                <NavLink to={'/chat/' + chat.id}>
                    <div>
                        {chat.name}
                    </div>
                </NavLink>
                <div>
                    {chat.id}
                </div>
            </span>
        </div >)
}

export default ChatItem;