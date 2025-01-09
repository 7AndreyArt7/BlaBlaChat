import React from "react";
import classes from "./Post.module.css";

const Posts = (props) => {
    return (
            <div className={classes.item}>
                {props.name} : {props.message}
                <div> like {props.like}</div>
            </div>
    )
}

export default Posts