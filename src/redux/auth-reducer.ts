import {ActionsTypes, AppStateType} from "./redux-store";
import {authAPI} from "../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import { stopSubmit } from "redux-form";
import {FormAction} from "redux-form/lib/actions";


const SET_USER_DATA = 'SET_USER_DATA';

type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA, payload: {id, email, login, isAuth}
    } as const
}


type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>
type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionsTypes | FormAction>

export const getAuthUserData = (): ThunkType => (dispatch: ThunkDispatchType) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, login, email, true));
            }
        });
}

export const loginThunk = (email: string, password: string, rememberMe: boolean = false) => (dispatch: ThunkDispatchType) => {
    authAPI.login(email, password, rememberMe = false)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                dispatch(stopSubmit('login',{_error: message}));
            }
        });
}

export const logout = () => (dispatch: ThunkDispatchType) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
}

export default authReducer;