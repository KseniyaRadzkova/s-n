import React from 'react';

import {
    ActionsTypes,
    DialogsPageType,
    RootStateType
} from "../../redux/store";
import {
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

type PropsType = {
    dispatch: (action: ActionsTypes) => void
    state: RootStateType
}

const DialogsContainer = (props: PropsType) => {

    let onSendMessageClick = () => {
        props.dispatch(sendMessageActionCreator())
    }
    let onNewMessageChange = (body: string) => {
        props.dispatch(updateNewMessageBodyActionCreator(body))

    }

    return (
        <Dialogs onNewMessageChange={onNewMessageChange}
                 onSendMessageClick={onSendMessageClick}
                 dialogsPage={props.state.dialogsPage}/>
    )
}
export default DialogsContainer;