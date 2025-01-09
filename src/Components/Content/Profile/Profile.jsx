import React from "react";
import classes from "./Profile.module.css";
import MyPost from "./My post/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPost state={props.state}
                    dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile