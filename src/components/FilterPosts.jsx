import React from "react";
import MySelect from "./select/MySelect";

const FilterPosts = ({ filterPost, setFilterPost }) => {

    return (
        <div>
            <input id="inputSearch" style={{ margin: '10px' }} placeholder="Поиск по содержимому" value={filterPost.search} onChange={
                e => {
                    setFilterPost(
                        { ...filterPost, search: e.target.value })
                }}>
            </input>

            <MySelect options={[
                { value: 'title', name: 'По названию поста' },
                { value: 'body', name: 'По содержимому поста' },]
            }
                value={filterPost.sort}
                defaultValue='Сортировать по'
                onChange={selectedSort => {
                    setFilterPost(
                        { ...filterPost, sort: selectedSort })
                }}
            />
        </div>
    )
}


export default FilterPosts;