import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostsPropsType} from "./MyPostsContainer";

const MyPosts = (props: PostsPropsType) => {

    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)


    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={(e) => props.onPostChange(e.currentTarget.value)}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={()=>props.onAddPost(props.newPostText)}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;