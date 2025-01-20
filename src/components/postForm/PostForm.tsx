import React from "react";
import { PostProps } from "../post/Post.tsx";

import MyInput from "../../UI/Input/MyInput.tsx";
import MyButton from "../../UI/button/MyButton.tsx";


interface postFormProps {
    post: PostProps;
    setPost: React.Dispatch<React.SetStateAction<PostProps>>
    addPost: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const PostForm: React.FC<postFormProps> = ({post, addPost, setPost}) => {
    return (
        <form action="">
            <MyInput
                value={post.title}
                onChange={(e) => setPost({...post, title: e.target.value})}
                placeholder='Название'
            />
            <MyInput
                value={post.body}
                onChange={(e) => setPost({...post, body: e.target.value})}
                placeholder='Описание'
            />
            <MyButton onClick={addPost}>Добавить</MyButton>
        </form>
    );
}

export default PostForm;