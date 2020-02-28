import React from "react";
import s from './Profile.module.css'
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = () => {
    return <div>
        <ProfileInfo/>
        <MyPosts/>
    </div>
};

export default Profile;