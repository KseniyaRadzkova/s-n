import {ActionsTypes} from "./redux-store";

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Victor"},
        {id: 6, name: "Valera"}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
        {id: 6, message: "Yo"}
    ] as Array<MessageType>,
    newMessageBody: ""
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
        return {
            ...state,
                newMessageBody: action.body
        }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    } as const
}
export const updateNewMessageBodyActionCreator = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: body
    } as const
}

export default dialogsReducer;