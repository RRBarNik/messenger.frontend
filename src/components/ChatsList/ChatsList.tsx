import React from "react";
import ChatItem from "./ChatItem/ChatItem";
import { ChatType } from "../../types/types";
import styles from "./ChatList.module.css";

type PropsType = {
    chats: Array<ChatType>
}

let ChatsList: React.FC<PropsType> = (
    {
        chats,
        ...props }) => {
    return (<div className={styles.container}>
        {
            chats.map(ch =>
                <ChatItem
                    key={ch.id}
                    chat={ch}
                />)
        }
    </div >)
}

export default ChatsList;