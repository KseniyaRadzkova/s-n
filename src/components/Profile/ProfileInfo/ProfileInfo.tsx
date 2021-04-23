import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import {ProfileType} from "../../../redux/profile-reducer";

type ProfileInfoType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string | null) => void
}


const ProfileInfo = (props: ProfileInfoType) => {

    if (!props.profile) {
        return <Preloader />
    }
    return <div>
        <div>
            <img alt="bigImage" src='https://bipbap.ru/wp-content/uploads/2017/08/16.jpg'/>
        </div>
        <div className={s.descriptionBlock}>
            <img alt={'profile'} src={props.profile.photos.large} />
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    </div>
}

export default ProfileInfo;