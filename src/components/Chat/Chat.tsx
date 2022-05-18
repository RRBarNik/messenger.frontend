import React, { useEffect } from "react";
import Message from "./Message/Message";
import styles from "./Chat.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getMessagesList } from "../../store/reducers/messageReducer/selectors";
import { getMessages } from "../../store/reducers/messageReducer";
import { useParams } from "react-router";

let Chat: React.FC<{}> = (props) => {
    const messages = useSelector(getMessagesList)
    const { chatId } = useParams<{ chatId: string }>()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMessages(chatId))
    }, [])

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