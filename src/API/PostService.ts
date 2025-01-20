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