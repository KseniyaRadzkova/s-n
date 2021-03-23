import {ActionsTypes} from "./redux-store";

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


export default authReducer;