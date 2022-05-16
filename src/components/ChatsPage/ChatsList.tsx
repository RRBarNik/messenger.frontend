import React, { useEffect } from "react";
import ChatItem from "./ChatItem/ChatItem";
import styles from "./ChatList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getChatsList } from "../../store/reducers/chatReducer/selectors";
import { getChats } from "../../store/reducers/chatReducer";

let ChatsList: React.FC<{}> = (props) => {
    const chats = useSelector(getChatsList)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getChats())
    }, [])

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