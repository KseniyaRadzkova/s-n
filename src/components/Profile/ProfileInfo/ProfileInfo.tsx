import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import {ProfileType} from "../Profile";

type ProfileInfoType = {
    profile: ProfileType | null
}

const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader />
    }
    return <div>
        <div>
            <img
                src='https://i0.wp.com/curioustravelbug.com/wp-content/uploads/2019/04/La-Rijana-Beach-Spain-Andalucia-Costa-Tropical-Panoramic.jpg?fit=800%2C534&ssl=1'
            alt="bigImage"/>
        </div>
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large} />
            ava + discribtion
        </div>
    </div>
}

export default ProfileInfo;