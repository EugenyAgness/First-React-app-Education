import React from "react";


const PostItem = (props) => {
    // console.log(props.post.title)
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <button onClick={(e) => {
                    e.preventDefault();
                    props.remove(props.post)}}>Delete</button>
            </div>
        </div>
    );

}

export default PostItem;
