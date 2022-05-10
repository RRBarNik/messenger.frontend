import React from "react";
import { connect } from "react-redux";
import ChatsList from "./ChatsList";
import { getChats } from "../../store/reducers/chatReducer/index";
import { compose } from "redux";
import { ChatType } from "../../types/types";
import { AppStateType } from "../../store/reducers";

type MapStatePropsType = {
    chats: Array<ChatType>
}

type MapDispatchPropsType = {
    getChats: () => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

class ChatsListContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getChats();
    }

    onPageChanged = () => {
        this.props.getChats();
    }

    render() {
        return <>
            <ChatsList
                chats={this.props.chats}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        chats: state.chat.chats
    }
}

export default compose(
    connect(
        mapStateToProps,
        {
            getChats
        })
)(ChatsListContainer);