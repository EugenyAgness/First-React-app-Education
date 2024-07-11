export const calcPagesCount = (limit, totalPages) => {
    console.log(Math.ceil(totalPages / limit))
    return Math.ceil(totalPages / limit)
}

export const getPageArray = (pagesCount) => {

    const pageArray = [];

    for (let i = 0; i < pagesCount; i++) {
        pageArray.push(i + 1);
    }
    console.log(pagesCount)
    
    return pageArray
}