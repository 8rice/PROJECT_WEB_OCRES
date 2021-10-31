import React from 'react';

export default function TopBar() {

    const user = {
        name: "Jacques",
        surname: "Rossard"
    }

    return (
        <div className="TopBar">
            <h1 className="Logo">OffSide LOGO</h1>
            <div className="UserInfos">
                <p>{user.name} {user.surname}</p>
                <img alt="userPicture" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png" />
            </div>
        </div>
    );

}