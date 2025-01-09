import React from "react";
import classes from "./MyPost.module.css";
import Posts from "./Posts/Posts";


const MyPost = (props) => {
    debugger
    let postElements = props.state.profilePage.posts.map(p => <Posts id={p.id} name={p.name} message={p.message} like={p.like}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
     /*   props.store.addPost()*/
        props.dispatch({type: "ADD-POST"})

    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        /*props.store.updateNewPostText(text)*/
        props.dispatch({type: " UPDATE-NEW-POST-TEXT", newText: text})

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