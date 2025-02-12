import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    return <Dialogs addMessage={addMessage}
                    updateNewMessageText={onMessageChange}
                    messages={state.dialogsPage.messages}
                    dialogs={state.dialogsPage.dialogs}
                    newMessageText={state.dialogsPage.newMessageText}/>
}

export default DialogsContainer;