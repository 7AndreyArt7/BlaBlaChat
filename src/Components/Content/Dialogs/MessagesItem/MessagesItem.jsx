import React from "react";
import classes from "./MessagesItem.module.css";


const MessagesItem = (props) => {
    return (
        <div className={classes.messages}>
            <img src={props.img}/>
            {props.message}
        </div>
    )
}


export default MessagesItem;