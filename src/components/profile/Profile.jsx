import React from "react";
import s from './Profile.module.css'
import MyPosts from "./myPosts/MyPosts";

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src={'https://of-crimea.ru/plug/Peschanye-plyazhi-Kryma.jpg'}  alt={''}/>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts/>
    </div>
};

export default Profile;