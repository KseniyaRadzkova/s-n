import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return <div>
        <div>
            <img
                src='https://i0.wp.com/curioustravelbug.com/wp-content/uploads/2019/04/La-Rijana-Beach-Spain-Andalucia-Costa-Tropical-Panoramic.jpg?fit=800%2C534&ssl=1'/>
        </div>
        <div className={s.descriptionBlock}>
            ava + discribtion
        </div>
    </div>
}

export default ProfileInfo;