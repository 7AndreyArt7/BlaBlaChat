const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                img: "https://avatars.mds.yandex.net/i?id=9f0512d629696873f8b4997e8231e53e48dab52ca9a76ffb-12910854-images-thumbs&n=13",
                message: state.newMessageText
            }

            state.messages.push(newMessage)
            state.newMessageText = " "

            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newTexts

            return state

        default:
            return state

    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newTexts: text})

export default dialogsReducer