/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import './App.css';

import PostsBlock from './components/postsBlock/PostsBlock.tsx'
import PostFilter, { filterProps } from './components/PostFilter/PostFilter.tsx';
import PostForm from './components/postForm/PostForm.tsx';
import Modal from './components/modal/Modal.tsx';
import MyButton from './UI/button/MyButton.tsx';
import Loader from './UI/Loader/Loader.tsx';


import { PostProps } from './components/post/Post.tsx'

import * as PostService from './API/PostService.ts';
import { usePosts } from './hooks/usePosts.ts';
import useFetching from './hooks/useFetching.ts';



function App() {

    const [posts, setPosts] = React.useState<PostProps[]>([])
    // const [isPostsLoading, setIsPostsLoading] = React.useState<boolean>(false)
    const [post, setPost] = React.useState<PostProps>({userId:1, id: 0, title: '', body: ''})
    const [filter, setFilter] = React.useState<filterProps>({ sort: '', query: '' })
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const posts = await PostService.getAllPosts()
        setPosts(posts)
    })

    const addPost = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault()
        const newPost = {...post, userId: 1, id: Math.random()}
        setPosts([newPost, ...posts])
        setPost({userId:1, id: 0, title: '', body: ''})
        setIsModalOpen(false)
    }

    const removePost = (id: number): void => {
        const newPosts = posts.filter(post => post.id !== id)
        setPosts(newPosts)
    }

    React.useEffect(() => {
        fetchPosts()
    }, [])



    return (
        <div className="App">

            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                <PostForm post={post} addPost={addPost} setPost={setPost}/>
            </Modal>       

            <MyButton onClick={() => setIsModalOpen(true)}>Создать пост</MyButton>  

            <hr style={{ margin: '15px 0' }} />

            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />

            {postError &&
                <h1>Поймал ошибку</h1>    
            }

            {isPostsLoading
                ? <Loader/>
                : <PostsBlock removePost={removePost} posts={sortedAndSearchedPosts} />
            }
        </div>
    );
}
export default App;
