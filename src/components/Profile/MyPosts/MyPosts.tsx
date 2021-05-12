import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props: PostsPropsType) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const onSubmit = (formData: FormDataType) => props.onAddPost(formData.newPostText)
    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <AddNewPostFormRedux onSubmit={onSubmit}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

type FormDataType = {
    newPostText: string
}

const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"} component={Textarea} placeholder={"Post message"}
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm<FormDataType>({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;