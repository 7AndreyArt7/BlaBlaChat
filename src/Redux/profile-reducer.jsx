const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

let initialState = {
    posts: [
        {id: 1, name: "Andrey", message: "I like IT", like: 23},
        {id: 2, name: "Ivan", message: "I too", like: 3},
        {id: 3, name: "Lecha", message: "End Mi", like: 0},
        {id: 4, name: "Dima", message: "you serious", like: 3},
        {id: 5, name: "Maksim", message: "yes, of course", like: 7}
    ],
    newPostText: "New Text"
}

const profileReducer = (state=initialState, action) => {

    switch (action.type) {
        case ADD_POST :
            let newPost = {
                id: 6,
                name: "Kirill",
                message: state.newPostText,
                like: 0
            }
            state.posts.push(newPost);
            state.newPostText = " "
            return state

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state

        default: return state
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) =>( {type: UPDATE_NEW_POST_TEXT, newText: text})



export default profileReducer