import React from 'react';

export default class TopBar extends React.Component {

    render() {
        return (
            <div className="TopBar">
                <h1 className="Logo">OffSide LOGO</h1>
                <div className="UserInfos">
                    <p>Name</p>
                    <img alt="userPicture" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png" />
                </div>
            </div>
        );
    }
}