import React from "react";
import { useSelector } from "react-redux";
import Chat from "./Chat";
import { getIsLoadingChats } from "../../store/reducers/chatReducer/selectors";

const ChatPage: React.FC<{}> = (props) => {
    const isLoading = useSelector(getIsLoadingChats)

    return <>
        <Chat />
    </>
}

export default ChatPage;