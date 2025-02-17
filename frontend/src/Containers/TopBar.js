import React from 'react';
import logo from '../Assets/logo.png'
import userPicture from '../Assets/userpicture.jpeg'



export default function TopBar() {
    const user = {
        name: "Yannis",
        surname: "Gooré"
    }
    return (


        <div className="TopBar">
            <div className="Logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="UserInfos">
                <p>{user.name} {user.surname}</p>
                <img className="UserPicture" src={userPicture} alt="user" />
            </div>
        </div>
    );
}
/*
// Plan de la topbar
{/* Logo du site */
/* Affichage prénom du user*/
/* Photo */
/* message */
/* notifications */
/* coeur */

