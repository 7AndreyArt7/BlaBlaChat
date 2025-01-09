import React from "react";
import classes from "./../Dialods.module.css";
import {NavLink} from "react-router-dom";


const DialogsItem = (props) => {
    return (
        <div  className={classes.friend}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogsItem;