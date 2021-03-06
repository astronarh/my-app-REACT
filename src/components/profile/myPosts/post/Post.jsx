import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src={'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/19/EP0149-CUSA09988_00-AV00000000000004/image?w=960&h=960&bg_color=000000&opacity=100&_version=00_09_000'}/>
            {props.message}
            <div>
                <span>like: {props.likeCount}</span>
            </div>

        </div>
    )
};

export default Post;