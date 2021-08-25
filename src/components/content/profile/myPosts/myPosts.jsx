import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../state';
import Posts from './Posts/Posts';
import s from './myPosts.module.css';


const MyPosts = (props) => {
    let postElements =
        props.postData.map((p) => <Posts message={p.message} likes={p.likes} />);

    let newPostEl = React.createRef();

    let addPosts = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostEl.current.value;
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action);
    };

    return (
        <div className={s.myPosts}>
            <textarea onChange={onPostChange} name="" ref={newPostEl} cols="24" rows="2"></textarea>
            <div><button onClick={addPosts}>Send</button></div>
            <div><h4>My Posts</h4></div>
            {postElements}
        </div>
    )
}

export default MyPosts;