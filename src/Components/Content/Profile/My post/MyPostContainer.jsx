import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/profile-reducer";
import MyPost from "./MyPost";


const MyPostContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)

    }

    return <MyPost addPost={addPost}
                   updateNewPostText={onPostChange}
                   posts={state.profilePage.posts}
                   newPostText={state.profilePage.newPostText}/>
}

export default MyPostContainer