import {ActionsTypes, AppStateType} from "./redux-store";
import {authAPI} from "../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {stopSubmit} from "redux-form";
import {FormAction} from "redux-form/lib/actions";
import {getAuthUserData} from "./auth-reducer";


const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
}

const appReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS} as const);


type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>
type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionsTypes | FormAction>

export const initializeApp = (): ThunkType => (dispatch: ThunkDispatchType) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        })

}


export default appReducer;