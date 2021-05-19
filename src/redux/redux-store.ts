import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {
    addPostActionCreator,
    setStatus,
    setUserProfile
} from "./profile-reducer";
import dialogsReducer, {sendMessageActionCreator} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer, {
    followSuccess,
    unFollowSuccess,
    setCurrentPage,
    setUsers,
    setUsersTotalCount, toggleFollowingProgress,
    toggleIsFetching,
} from "./users-reducer";
import authReducer, {setAuthUserData} from "./auth-reducer";
import thunkMiddleWare from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer, {initializedSuccess} from "./app-reducer";

export type ActionsTypes =
    | ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof sendMessageActionCreator>
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unFollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setUsersTotalCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof initializedSuccess>




let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

export type AppStateType = ReturnType<typeof rootReducer>


let store = createStore(rootReducer, applyMiddleware(thunkMiddleWare));


export default store;