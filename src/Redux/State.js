// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
// const ADD_POST = "ADD-POST";
// const ADD_MESSAGE = "ADD_MESSAGE";
// const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {

    _renderEntireTree() {
    },
    getState() {
        return this._state
    },

    _state: {

        profilePage: {
            posts: [
                {id: 1, name: "Andrey", message: "I like IT", like: 23},
                {id: 2, name: "Ivan", message: "I too", like: 3},
                {id: 3, name: "Lecha", message: "End Mi", like: 0},
                {id: 4, name: "Dima", message: "you serious", like: 3},
                {id: 5, name: "Maksim", message: "yes, of course", like: 7}
            ],
            newPostText: "New Text"
        },

        dialogsPage: {
            dialogs: [
                {name: "Andrey", id: "Andrey"},
                {name: "Lecha", id: "Lecha"},
                {name: "Ivan", id: "Ivan"},
                {name: "Dima", id: "Dima"},
                {name: "Olya", id: "Olya"}
            ],

            messages: [
                {
                    id: 1,
                    img: "https://avatars.mds.yandex.net/i?id=a9345eb529a6779ccfd7fe8f4a7538ba6e6520dd-9221923-images-thumbs&n=13",
                    message: "hi"
                },
                {
                    id: 2,
                    img: "https://avatars.mds.yandex.net/i?id=9f0512d629696873f8b4997e8231e53e48dab52ca9a76ffb-12910854-images-thumbs&n=13",
                    message: "how are you"
                },
                {
                    id: 3,
                    img: "https://avatars.mds.yandex.net/i?id=a9345eb529a6779ccfd7fe8f4a7538ba6e6520dd-9221923-images-thumbs&n=13",
                    message: "whats new"
                },
                {
                    id: 4,
                    img: "https://avatars.mds.yandex.net/i?id=9f0512d629696873f8b4997e8231e53e48dab52ca9a76ffb-12910854-images-thumbs&n=13",
                    message: "where did you go"
                }
            ],
            newMessageText: "new message"
        },

        sidebar: {
            friend: [
                {
                    id: 1,
                    name: "Andrey",
                    ava: "https://avatars.mds.yandex.net/i?id=77bf587cf367f4c7f9c372e1fcc05fdd229c269f-5428578-images-thumbs&n=13"
                },
                {
                    id: 2,
                    name: "Ivan",
                    ava: "https://avatars.mds.yandex.net/i?id=77bf587cf367f4c7f9c372e1fcc05fdd229c269f-5428578-images-thumbs&n=13"
                },
                {
                    id: 3,
                    name: "Alex",
                    ava: "https://avatars.mds.yandex.net/i?id=77bf587cf367f4c7f9c372e1fcc05fdd229c269f-5428578-images-thumbs&n=13"
                }
            ]
        }
    },

    subscribe(observer) {
        this._renderEntireTree = observer
    },



   dispatch(action) {
       this._state.profilePage= profileReducer(this._state.profilePage, action)
       this._state.dialogsPage= dialogsReducer(this._state.dialogsPage, action)
       // this._state.sidebar= sidebarReducer(this._state.sidebar, action)

       this._renderEntireTree(this._state)

//         if (action.type === ADD_POST) {
//             let newPost = {
//                 id: 6,
//                 name: "Kirill",
//                 message: this._state.profilePage.newPostText,
//                 like: 0
//             }
//             this._state.profilePage.posts.push(newPost);
//             this._state.profilePage.newPostText = " "
//             this._renderEntireTree(this._state)
//         } else if (action.type === UPDATE_NEW_POST_TEXT) {
//             this._state.profilePage.newPostText = action.newText;
//             this._renderEntireTree(this._state)
//         }
//         if (action.type === ADD_MESSAGE) {
//             let newMessage = {
//                 id: 5,
//                 img: "https://avatars.mds.yandex.net/i?id=9f0512d629696873f8b4997e8231e53e48dab52ca9a76ffb-12910854-images-thumbs&n=13",
//                 message: this._state.dialogsPage.newMessageText
//             }
//
//             this._state.dialogsPage.messages.push(newMessage)
//             this._state.dialogsPage.newMessageText = " "
//             this._renderEntireTree(this._state)
//         } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
//             this._state.dialogsPage.newMessageText = action.newTexts
//             this._renderEntireTree(this._state)
//         }
  },
}

// export const addPostActionCreator = () => {
//     return {
//         type: ADD_POST
//     }
// }
//
// export const updateNewPostTextActionCreator = (text) => {
//     return {
//         type: UPDATE_NEW_POST_TEXT, newText: text
//     }
// }
//
// export const addMessageActionCreator = () => {
//     return {
//         type: ADD_MESSAGE
//     }
// }
//
// export const updateNewMessageTextActionCreator = (text) => {
//     return {
//             type: UPDATE_NEW_MESSAGE_TEXT, newTexts: text
//         }
//     }


window.store = store

export default store;