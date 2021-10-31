import React from 'react';
import '../Assets/logo.png'

export default function TopBar() {



    return (
        <div className="TopBar">
            <div className="Logo">
                <img alt="logo" src="{logo}" />
            </div>
            <div className="UserInfos">
                <p>{user.name} {user.surname}</p>
                <img alt="userPicture" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png" />
            </div>
        </div>
    );



}