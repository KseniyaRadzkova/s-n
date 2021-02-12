import React from 'react';
import s from './Post.module.css';

type PostType = {
    message: string
    likesCount: number
}

const Post: React.FC<PostType> = (props) => {
    return (
        <div className={s.item}>
            <img alt='avatar' src='https://i.pinimg.com/originals/34/f2/50/34f250635ed02218356595ea6d730518.jpg'/>
            { props.message }
            <div>
                <span>like</span> { props.likesCount }
            </div>
        </div>
    )
}


export default Post;