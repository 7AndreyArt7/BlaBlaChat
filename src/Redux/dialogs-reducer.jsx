const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

const dialogsReducer = (state, action) => {


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