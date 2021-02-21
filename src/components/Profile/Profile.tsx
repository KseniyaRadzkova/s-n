import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, RootStateType} from "../../redux/store";


type PropsType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: PropsType) => {
    return <div>
        <ProfileInfo/>
        <MyPosts message={props.state.profilePage.newPostText}
                 posts={props.state.profilePage.posts}
                 dispatch={props.dispatch}/>
    </div>
}

export default Profile;