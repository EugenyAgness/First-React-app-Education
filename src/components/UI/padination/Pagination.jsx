import React from "react";
import { getPageArray } from "../../../utils/calcPagesCount";

const Pagination = ({changePage, pagesCount, page}) => {
    let pagesArray = getPageArray(pagesCount);
    console.log(pagesCount, 'in Pagination')
    return (
        <div className="page_wrapper">
            {pagesArray.map(p => 
                <span
                onClick={() => {changePage(p)}}
                key={p}
                className={page === p ? 'page page__active' : 'page'}>

                    {p}

                </span>
            )}
        </div>
    )

};

export default Pagination;

