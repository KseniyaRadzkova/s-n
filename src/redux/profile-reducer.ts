import {ActionsTypes} from "./redux-store";
import {ProfileType} from "../components/Profile/Profile";

export type PostType = {
    id: number
    message: string
    likesCount: number
}


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

export type InitialStateType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileType | null
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
    newPostText: '',
    profile:  null
}

// export type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
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

export const addPostActionCreator = (postText: string) => {
    return {
        type: ADD_POST, postText: postText
    } as const
}
export const updateNewPostTextActionCreator = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: newText
    } as const
}
export const setUserProfile = (profile: ProfileType | null) => {
    return {
        type: SET_USER_PROFILE, profile: profile
    } as const
}
export default profileReducer;