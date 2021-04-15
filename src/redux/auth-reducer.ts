import {ActionsTypes, AppStateType} from "./redux-store";
import {authAPI} from "../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

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
                ...action.data,
                // id: action.id,
                // email: action.email,
                // login: action.login,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserData = (id: number, email: string, login: string) => {
    return {
        type: SET_USER_DATA, data: {id, email, login}
    } as const
}


type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>
type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionsTypes>

export const getAuthUserDana = (): ThunkType => (dispatch: ThunkDispatchType) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, login, email));
            }
        });
}

export default authReducer;