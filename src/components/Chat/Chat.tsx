import React from "react";
import Message from "./Message/Message";
import { MessageType } from "../../types/types";
import styles from "./Chat.module.css";

type PropsType = {
    messages: Array<MessageType>
}

let Chat: React.FC<PropsType> = (
    {
        messages,
        ...props }) => {
    return (
        <div className={styles.container}>
            <div className={styles.messages}>
                {
                    messages.map(m =>
                        <Message
                            key={m.dateOfCreation}
                            message={m}
                        />)
                }
            </div>
        </div >)
}

export default Chat;