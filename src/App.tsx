/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import './App.css';

import PostsBlock from './components/postsBlock/PostsBlock.tsx'
import PostFilter, { filterProps } from './components/PostFilter/PostFilter.tsx';
import PostForm from './components/postForm/PostForm.tsx';
import Modal from './components/modal/Modal.tsx';
import MyButton from './UI/button/MyButton.tsx';
import Loader from './UI/Loader/Loader.tsx';
import Pagination from './components/Pagination/Pagination.tsx';

import { PostProps } from './components/post/Post.tsx'

import * as PostService from './API/PostService.ts';
import { usePosts } from './hooks/usePosts.ts';
import useFetching from './hooks/useFetching.ts';
import { getPageCount, getPagesArray } from './utils/pages.ts';




function App() {

    const [posts, setPosts] = React.useState<PostProps[]>([])
    // const [isPostsLoading, setIsPostsLoading] = React.useState<boolean>(false)
    const [post, setPost] = React.useState<PostProps>({ userId: 1, id: 0, title: '', body: '' })
    const [filter, setFilter] = React.useState<filterProps>({ sort: '', query: '' })
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)
    const [totalPages, setTotalPages] = React.useState<number>(0)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [limit, setLimit] = React.useState<number>(10)
    const [page, setPage] = React.useState<number>(1)

    const pagesArray = getPagesArray(totalPages)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAllPosts(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    const addPost = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault()
        const newPost = { ...post, userId: 1, id: Math.random() }
        setPosts([newPost, ...posts])
        setPost({ userId: 1, id: 0, title: '', body: '' })
        setIsModalOpen(false)
    }

    const removePost = (id: number): void => {
        const newPosts = posts.filter(post => post.id !== id)
        setPosts(newPosts)
    }

    const changePage = (page: number): void => {
        setPage(page)
    }

    React.useEffect(() => {
        fetchPosts()
    }, [page])

    return (
        <div className="App">

            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                <PostForm post={post} addPost={addPost} setPost={setPost} />
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
                ? <Loader />
                : <PostsBlock removePost={removePost} posts={sortedAndSearchedPosts} />
            }

            <Pagination changePage={changePage} pagesArray={pagesArray} page={page}/>

        </div>
    );
}
export default App;
