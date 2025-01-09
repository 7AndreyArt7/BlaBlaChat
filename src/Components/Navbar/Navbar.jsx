import React from "react";
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";


const Navbar = (props) => {

    let friends = props.state.sidebar.friend.map( f => <Friend name={f.name} ava={f.ava} id={f.id}/> )
debugger
    return (
        <nav className={classes.navbar}>
            <div className={classes.item}>
                <NavLink to="/profile"
                         className={navData => navData.isActive ? classes.active : classes.item}> Profile </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs"
                         className={navData => navData.isActive ? classes.active : classes.item}>Dialogs</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/users"
                         className={navData => navData.isActive ? classes.active : classes.item}>User</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news"
                         className={navData => navData.isActive ? classes.active : classes.item}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music"
                         className={navData => navData.isActive ? classes.active : classes.item}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings"
                         className={navData => navData.isActive ? classes.active : classes.item}>Settings</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/friends"
                         className={navData => navData.isActive ? classes.active : classes.item}>Friends</NavLink>
            </div>

            <div >
                {friends}
            </div>

        </nav>
    )
}

export default Navbar