import React, { useState } from 'react';

export default function Sidebar() {
    const [menuClicked, setMenuClicked] = useState("ClosedMenu")

    function handleClick(e) {
        if (menuClicked == "ClosedMenu") {
            setMenuClicked("FullMenu")
        } else {
            setMenuClicked("ClosedMenu")
        }
    }


    return (
        <div className="SideBar">
            <div className={menuClicked}>
                <div>
                    <p>Home</p>
                    <p>Data</p>
                    <p>Profile</p>
                </div>
            </div>
            <div>
                <i className="fas fa-bars" onClick={handleClick}></i>
                <i className="fas fa-home Selected"></i>
                <i className="fas fa-chart-bar"></i>
                <i className="fas fa-user"></i>
                <i className="fas fa-cog"></i>
            </div>
        </div>
    )

}
