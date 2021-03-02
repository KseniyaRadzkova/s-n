import React from 'react';
import {
    addPostActionCreator, InitialStateType, PostType,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    posts: Array<PostType>
    newPostText: string
}
type MapDispatchPropsType = {
    onPostChange: (text: string) => void
    onAddPost: (message: string) => void
}

export type PostsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        onPostChange: (text: string) => {
            // let text = newPostElement.current.value;
            let action = updateNewPostTextActionCreator(text)
            dispatch(action);
        },
        onAddPost: (message: string) => {
            dispatch(addPostActionCreator(message));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;