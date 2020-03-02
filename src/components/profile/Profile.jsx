import React from "react";
import s from './Profile.module.css'
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPosts addPost={props.addPost} posts={props.profilePage.posts} newPostText={props.profilePage.newPostText}
                 updateNewPostText={props.updateNewPostText}/>
    </div>
};

export default Profile;