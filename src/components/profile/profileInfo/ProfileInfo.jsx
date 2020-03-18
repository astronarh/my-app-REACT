import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div>*/}
            {/*    <img width={1000} height={100} src={'https://of-crimea.ru/plug/Peschanye-plyazhi-Kryma.jpg'} alt={''}/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={"huilo my friendes"}/>
            </div>
        </div>
    )
};

export default ProfileInfo;