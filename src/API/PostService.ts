import axios from "axios"

export const getAllPosts = async(limit:number = 10, page: number = 1) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts',  {
        params: {
            _limit: limit,
            _page: page
        }
    })
    return response
}

export const getPostById = async(id: number) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    return response
}
export const getCommentsPostById = async(id: number) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    return response
}