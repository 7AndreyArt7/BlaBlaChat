import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) =>{
    return (
        <div>
            <div>
                <img className={classes.signboard}
                     src="https://avatars.mds.yandex.net/i?id=2a00000179f8705be92a85637971d7c8ac58-4461245-images-thumbs&n=13"/>
            </div>
            <div>Info</div>
            <div>
                <img className={classes.ava}
                     src="https://avatars.mds.yandex.net/i?id=9d13a6982dc5da6062d15440905d92012b4739b69b40672c-11740199-images-thumbs&n=13"/>
                <div>description</div>
            </div>

        </div>
    )
}

export default ProfileInfo