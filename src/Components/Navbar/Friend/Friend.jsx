import React from "react";
import classes from "./Friend.module.css";

const Friend = (props) => {

    return (
        <a className={classes.ava}>
            <div>
                <img src={props.ava}/>
            </div>
            <div>
                {props.name}
            </div>
        </a>

    )
}

export default Friend