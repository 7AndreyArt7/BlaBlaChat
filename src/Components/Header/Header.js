import React from "react";
import classes from "./Header.module.css"

const Header=(props)=>{
    return (
        <header className={classes.header}>
            <img className={classes.logo} src="https://static9.tgstat.ru/channels/_0/db/db8684c3150fc7ee4b2bad9ded196867.jpg"/>
            <div className={classes.name}> Bla Bla Chat</div>
            <div className={classes.login}>
                <a href="login" className={classes.login}> Login</a>
            </div>
        </header>
    )
}

export default Header