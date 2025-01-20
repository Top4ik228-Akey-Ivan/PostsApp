import React from 'react'

import styles from './PostsBlock.module.css'
import Post, { PostProps } from '../post/Post.tsx';

interface postBlockProps{
    posts: PostProps[]
    removePost?: (id: number) => void;
}

const PostsBlock: React.FC<postBlockProps> = ({posts, removePost}) => {

    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
        )
    }

    return (
        <div className={styles.postBlock}>
            {posts.map((post, index) => 
                <Post 
                    key={post.id}
                    userId={post.userId}
                    id={post.id}
                    title={post.title}
                    body={post.body}
                    removePost={removePost}
                    index={index}
                />
            )}
        </div>
    );
}
 
export default PostsBlock;