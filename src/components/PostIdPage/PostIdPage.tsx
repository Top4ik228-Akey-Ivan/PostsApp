/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useParams } from "react-router-dom";
import useFetching from "../../hooks/useFetching.ts";

import * as PostService from '../../API/PostService.ts'
import Loader from "../../UI/Loader/Loader.tsx";
import { PostProps } from "../post/Post.tsx";
import Comment from "../comments/Comment.tsx";

import styles from './PostIdPage.module.css'

interface commentsType {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

const PostIdPage = () => {

    const [post, setPost] = React.useState<PostProps>({userId: 0, id: 0, title: '', body: '' })
    const [comments, setComments] = React.useState<commentsType[]>([])

    const params = useParams()

    const [fetchPostsById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getPostById(Number(params.id))
        setPost(response.data)
    })

    const [fetchCommentsPostById, isCommentsLoading, commentsError] = useFetching(async () => {
        const response = await PostService.getCommentsPostById(Number(params.id))
        setComments(response.data)
    })

    React.useEffect(() => {
        fetchPostsById()
        fetchCommentsPostById()
    }, [])

    return (
        <div className="App">
            {isLoading
                ? <Loader />
                : <div className={styles.post}><h1>{post.title}</h1><br />{post.body}</div>
            }
            <h1>Комментарии</h1>
            {isCommentsLoading
                ? <Loader />
                : <div>
                    {comments.map((comm) => 
                        <Comment key={comm.id} email={comm.email} body={comm.body}/>
                    )}
                </div>
            }
        </div>
    );
}

export default PostIdPage;