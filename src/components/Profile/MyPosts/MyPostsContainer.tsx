import React from 'react';
import {
    ActionsTypes,
    PostType, RootStateType
} from "../../../redux/store";
import {
    addPostActionCreator,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


type PropsType = {
    dispatch: (action: ActionsTypes) => void
    state: RootStateType
}

const MyPostsContainer = (props: PropsType) => {
    let onAddPost = (message: string) => {
        props.dispatch(addPostActionCreator(message));
    };

    let onPostChange = (value: string) => {
        // let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(value))
    }
    return (
        <MyPosts onAddPost={onAddPost}
                 onPostChange={onPostChange}
                 newPostText={props.state.profilePage.newPostText}
                 posts={props.state.profilePage.posts}
        />
    )
}

export default MyPostsContainer;