import React, { useState } from 'react';

export default function Sidebar() {
    const [menuClicked, setMenuClicked] = useState("ClosedMenu")

    function handleClick() {
        if (menuClicked === "ClosedMenu") {
            setMenuClicked("FullMenu")
        } else {
            setMenuClicked("ClosedMenu")
        }
    }

    return (
        <div className="SideBar">
            <div className={menuClicked}>
                <div>
                    <p><a href="#">Home</a></p>
                    <p><a href="#League">Leagues Data</a></p>
                    <p><a href="#Players">Players</a></p>
                    <p><a href="#Games">Next Games</a></p>
                </div>
            </div>
            <div>
                <i className="fas fa-bars" onClick={handleClick}></i>
                <a href="#"><i className="fas fa-home"></i></a>
                <a href="#League"><i className="fas fa-chart-bar"></i></a>
                <a href="#Players"><i className="fas fa-tshirt"></i></a>
                <a href="#Games"><i class="fas fa-futbol"></i></a>
            </div>
        </div>
    )

}
