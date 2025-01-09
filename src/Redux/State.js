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

    //
    // addMessage() {
    //     let newMessage = {
    //         id: 5,
    //         img: "https://avatars.mds.yandex.net/i?id=9f0512d629696873f8b4997e8231e53e48dab52ca9a76ffb-12910854-images-thumbs&n=13",
    //         message: this._state.dialogsPage.newMessageText
    //     }
    //
    //     this._state.dialogsPage.messages.push(newMessage)
    //     this._state.dialogsPage.newMessageText = " "
    //     this._renderEntireTree(this._state)
    // },
    //
    // updateNewMessageText(newText) {
    //     this._state.dialogsPage.newMessageText = newText
    //     this._renderEntireTree(this._state)
    // },

    subscribe(observer) {
        this._renderEntireTree = observer
    },

    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 6,
                name: "Kirill",
                message: this._state.profilePage.newPostText,
                like: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = " "
            this._renderEntireTree(this._state)
        } else if (action.type === " UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._renderEntireTree(this._state)
        }
        if (action.type === "ADD_MESSAGE") {
            let newMessage = {
                id: 5,
                img: "https://avatars.mds.yandex.net/i?id=9f0512d629696873f8b4997e8231e53e48dab52ca9a76ffb-12910854-images-thumbs&n=13",
                message: this._state.dialogsPage.newMessageText
            }

            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = " "
            this._renderEntireTree(this._state)
        }
        else if (action.type === "UPDATE_NEW_MESSAGE_TEXT") {
            this._state.dialogsPage.newMessageText = action.newText
            this._renderEntireTree(this._state)
        }
    }




}
window.store = store

export default store;