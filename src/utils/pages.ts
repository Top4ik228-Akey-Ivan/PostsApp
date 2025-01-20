 export const getPageCount = (totalCount: number, limit: number): number => {
    const pageCount = Math.ceil( totalCount / limit)
    return pageCount
}

export const getPagesArray = (totalPages: number): number[] => {
    const result: number[] = []
    for (let i = 0; i < totalPages; i++) {
        result.push(i + 1)
    }
    return result
}