import React from "react"
import { PostProps } from "../components/post/Post"


export const useSortedPosts = (posts: PostProps[], sort:  string): PostProps[] => {
    const sortedPosts = React.useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts
    }, [sort, posts])

    return sortedPosts
}

export const usePosts = (posts: PostProps[], sort: string, query: string): PostProps[] => {
    const sortedPosts = useSortedPosts(posts, sort)
    const sortedAndSearchedPosts = React.useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
    }, [query, sortedPosts])
    
    return sortedAndSearchedPosts
}