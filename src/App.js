import { useEffect, useMemo, useState } from "react";
import React from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
import './styles/TextInputComp.css'
import PostItem from "./components/PostItem";
import TextInputComp from "./components/TextInputComp";
import MyBtn from "./components/UI/button/MyBtn";
import MyInput from "./components/UI/button/input/MyInput";
import PostList from "./components/PostList";
import MySelect from "./components/select/MySelect";
import FilterPosts from "./components/FilterPosts";
import MyModal from "./components/UI/MyModal/MyModal";
import { usePosts } from "./hooks/usePosts";
import axios from 'axios';
import PostService from "./API/PostService";
import LoadingPosts from "./components/UI/loading/LoadingPosts";
import { useFetching } from "./hooks/useFetching";

function App() {
    
    const [fetchPosts, loader, error] = useFetching(async () => {
        const posts = await PostService.getAll();
        setPosts(posts);
    })


    useEffect(() => {
        fetchPosts()
    }, [])

    const [posts, setPosts] = useState([])
    const [valuePost, setValuePost] = useState({ title: '', body: '' });
    const [visibleMyModal, setVisibleMyModal] = useState(false);


    const addNewPost = (event) => {
        event.preventDefault()

        setPosts([...posts, { ...valuePost, id: Date.now() }])
        setVisibleMyModal(false);

    };

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    };


    const [filterPost, setFilterPost] = useState({ sort: '', search: '' });

    const sortedAndSearchingPosts = usePosts(posts, filterPost.sort, filterPost.search);



    return (
        <div className="App">
            <button onClick={() => setVisibleMyModal(true)}>Add post</button>
            <button onClick={() => fetchPosts()}>Add fetch post</button>

            <form>

                <FilterPosts
                    filterPost={filterPost}
                    setFilterPost={setFilterPost}
                />
                <MyModal visible={visibleMyModal} setVisible={setVisibleMyModal}>
                    <MyInput type="text" placeholder="Название поста" onChange={(e) => { setValuePost({ ...valuePost, title: e.target.value }) }}></MyInput>
                    <MyInput type="text" placeholder="Описание поста" onChange={(e) => { setValuePost({ ...valuePost, body: e.target.value }) }}></MyInput>
                    <MyBtn onClick={addNewPost}>BUTTON</MyBtn>
                </MyModal>
                {error &&
                <h1>Произошла ошибка ${error}</h1>

                }
                {loader
                    ? <div style={{display:'flex', justifyContent: 'center'}}><LoadingPosts/></div>
                    : <PostList remove={removePost} posts={sortedAndSearchingPosts} title='posts'></PostList>   
                }
            </form>
        </div>
    );
}

export default App;
