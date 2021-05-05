import {ActionsTypes, AppStateType} from "./redux-store";
import {profileAPI, usersAPI} from "../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

export type PostType = {
    id: number
    message: string
    likesCount: number
}

type ContactsPropsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type PhotosPropsType = {
    small: string
    large: string
}
export type ProfileType = {
    userId: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsPropsType
    photos: PhotosPropsType
}

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

export type InitialStateType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileType | null
    status: string | null
}

// let initialState = {
//     posts: [
//         {id: 1, message: 'Hi, how are you?', likesCount: 15},
//         {id: 2, message: 'It is my first post', likesCount: 20}
//     ] as Array<PostType>,
//     newPostText: '',
//     profile: null as ProfileType | null
// }
let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It is my first post', likesCount: 20}
    ],
    profile: null,
    newPostText: "",
    status: ''
}

// export type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {
                id: new Date().getTime(),
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText: string) => {
    return {
        type: ADD_POST, newPostText
    } as const
}
export const setUserProfile = (profile: ProfileType | null) => {
    return {
        type: SET_USER_PROFILE, profile: profile
    } as const
}
export const setStatus = (status: string | null) => {
    return {
        type: SET_STATUS, status
    } as const
}

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>
type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionsTypes>

export const getUserProfile = (userId: string): ThunkType => (dispatch: ThunkDispatchType) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}

export const getStatus = (userId: string): ThunkType => (dispatch: ThunkDispatchType) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
}

export const updateStatus = (status: string | null): ThunkType => (dispatch: ThunkDispatchType) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
}

export default profileReducer;