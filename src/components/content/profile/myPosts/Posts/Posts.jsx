import React from 'react';
import s from './Posts.module.css';
import img from '../../img/me.JPG';


const Posts = (props) => {
    return (
        <div className={s.Posts}>
            <img src={img} alt="" />
            {props.message}
            <div>
                {props.likes}
            </div>
        </div>
    )
}

export default Posts;