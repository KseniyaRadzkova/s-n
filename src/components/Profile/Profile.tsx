import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, RootStateType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


type PropsType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: PropsType) => {
    return <div>
        <ProfileInfo/>
        <MyPostsContainer state={props.state}
                          dispatch={props.dispatch}
        />
    </div>
}

export default Profile;