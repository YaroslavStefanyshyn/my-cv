import React from 'react';
import s from './profile.module.css';
import SmthAboutMe from './smthAboutMe/smthAboutMe';
import MyPosts from './myPosts/myPosts';

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <SmthAboutMe />
            <MyPosts
                postData={props.state.postData}
                newPostText={props.state.newPostText}
                dispatch={props.dispatch} />
        </div>
    )
}

export default Profile;