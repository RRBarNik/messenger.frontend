import React from "react";
import { useSelector } from "react-redux";
import ChatsList from "./ChatsList";
import { getIsLoadingChats } from "../../store/reducers/chatReducer/selectors";

const ChatsPage: React.FC<{}> = (props) => {
    const isLoading = useSelector(getIsLoadingChats)

    return <>
        <ChatsList />
    </>
}

export default ChatsPage;