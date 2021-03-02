import {combineReducers, createStore} from "redux";
import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from "./profile-reducer";
import dialogsReducer, {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

export type ActionsTypes =
    | ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof sendMessageActionCreator>
    | ReturnType<typeof updateNewMessageBodyActionCreator>


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer);


export default store;