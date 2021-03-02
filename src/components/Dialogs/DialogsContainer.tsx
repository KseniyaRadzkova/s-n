import React from 'react';
import {Dispatch} from 'redux';
import {
    InitialStateType,
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    dialogsPage: InitialStateType
}
type MapDispatchPropsType = {
    onNewMessageChange: (body: string) => void
    onSendMessageClick: () => void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        onNewMessageChange: (body: string) => {
            dispatch(updateNewMessageBodyActionCreator(body))
        },
        onSendMessageClick: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;