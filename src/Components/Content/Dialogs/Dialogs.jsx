import React from "react";
import classes from "./Dialods.module.css";
import MessagesItem from "./MessagesItem/MessagesItem";
import DialogsItem from "./DialogsItem/DialogsItem";






const Dialogs = (props) => {

    let messagesElements = props.messages.map(m => <MessagesItem message={m.message} id={m.id} img={m.img}/>)
    let dialogsElements = props.dialogs.map(d => <DialogsItem name={d.name} id={d.id} />)

    let newMessageElement = React.createRef()

    let onAddMessage = () => {
        props.addMessage()
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value
            props.updateNewMessageText(text)
    }

    return (
        <div className={classes.dialogs}>
            <div>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}

                <div>
                    <input className={classes.input} onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}/>
                    <div>
                        <button className={classes.button} onClick={onAddMessage}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;