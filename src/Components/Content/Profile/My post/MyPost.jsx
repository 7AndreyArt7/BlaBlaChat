import React from "react";
import classes from "./MyPost.module.css";
import Posts from "./Posts/Posts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/State";




const MyPost = (props) => {
    debugger
    let postElements = props.state.profilePage.posts.map(p => <Posts id={p.id} name={p.name} message={p.message} like={p.like}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)

    }

    return (
        <div>
            <div>
                <div className={classes.mypost}>
                    <h3> My post</h3>
                </div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.state.profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>add post</button>
                </div>
            </div>
            {postElements}
        </div>
    )
}

export default MyPost