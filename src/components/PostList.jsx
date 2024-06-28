import React from "react";
import PostItem from "./PostItem";
import {TransitionGroup} from 'react-transition-group';
import {CSSTransition} from 'react-transition-group';
import '../styles/App.css'


const PostList = ({posts, title, remove}) => {
    return ( 
        posts.length       
        ?   <div>
            <TransitionGroup>
                {posts.map((post, index) => 
                <CSSTransition
                    key={post.id}
                    timeout={500}
                    classNames='posts'>

                    <PostItem remove={remove} number={index + 1} post={post} /> 

                </CSSTransition>
                )}
            </TransitionGroup>
            </div>
        : <h1>{'нет постов'}</h1>
        
    )
}

export default PostList;