import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import {ProfileType} from "../Profile";
import ProfileStatus from "./ProfileStatus";
import photoImage from './../../../assets/images/sea.jpeg';

type ProfileInfoType = {
    profile: ProfileType | null
}

const ProfileInfo = (props: ProfileInfoType) => {
    const backgroundImg = {
        backgroundImage: `url(${photoImage})`,
    };

    if (!props.profile) {
        return <Preloader />
    }
    return <div>
        <div>
            <img style={backgroundImg} alt="bigImage"/>
        </div>
        <div className={s.descriptionBlock}>
            <img alt={'profile'} src={props.profile.photos.large} />
            <ProfileStatus status={"Hello my friends"}/>
        </div>
    </div>
}

export default ProfileInfo;