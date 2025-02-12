import React from "react";
import classes from "./MyPost.module.css";
import Posts from "./Posts/Posts";


const MyPost = (props) => {

    let postElements = props.posts.map(p => <Posts id={p.id} name={p.name} message={p.message} like={p.like}/>)

    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div>
            <div>
                <div className={classes.mypost}>
                    <h3> My post</h3>
                </div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>add post</button>
                </div>
            </div>
            {postElements}
        </div>
    )
}

export default MyPost