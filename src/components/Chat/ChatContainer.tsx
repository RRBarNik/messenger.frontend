import React from "react";
import { connect } from "react-redux";
import Chat from "./Chat";
import { getMessages } from "../../store/reducers/messageReducer/index";
import { compose } from "redux";
import { MessageType } from "../../types/types";
import { AppStateType } from "../../store/reducers";
import { withRouter, RouteComponentProps } from "react-router-dom";

type MapStatePropsType = {
    messages: Array<MessageType>,
}

type MapDispatchPropsType = {
    getMessages: (chatId: string) => void
}

type PathPropsType = {
    chatId: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<PathPropsType>

class ChatContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getMessages(this.props.match.params.chatId);
    }

    onPageChanged = () => {
        this.props.getMessages(this.props.match.params.chatId);
    }

    render() {
        return <>
            <Chat
                messages={this.props.messages}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        messages: state.message.messages,
    }
}

export default compose<React.ComponentType>(
    connect(
        mapStateToProps,
        {
            getMessages
        }),
    withRouter
)(ChatContainer);