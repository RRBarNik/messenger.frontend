import React from "react";
import classes from './Users.module.css';
import { NavLink } from 'react-router-dom';
import { MessageType } from "../../../types/types";

type PropsType = {
    message: MessageType,
}

let Message: React.FC<PropsType> = ({ message }) => {
    return (
        <div>
            <span>
                <span>
                    <div>
                        {message.dateOfCreation}
                    </div>
                    <div>
                        {message.body}
                    </div>
                </span>
            </span>
        </div >)
}

export default Message;