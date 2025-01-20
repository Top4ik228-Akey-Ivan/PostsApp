import React from 'react'
import MyButton from '../../UI/button/MyButton.tsx';

import styles from './Post.module.css'

export interface PostProps {
    userId: number,
    id: number,
    title: string,
    body: string,
    index?: number 
    removePost?: (id: number) => void 
}

const Post: React.FC<PostProps> = ({userId,index, id, title, body, removePost}) => {

    const handleRemove = () => {
        if (removePost) removePost(id)
        else console.log('delete error')
        
    }

    return (
        <div className={styles.post}>
            <div>
                <strong>{(index ?? 0) + 1} {title}</strong>
                <p>{body}</p>
            </div>
            <MyButton onClick={handleRemove}>Удалить</MyButton>
        </div>
    );
}
 
export default Post;