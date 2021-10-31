import React from 'react'
import ronaldo from '../Assets/ronaldo.png'
import messi from '../Assets/messi.png'

function HomeVisual() {
    return (
        <div className="Homevisual">
            <div className="Homevisual-content">
                <h1 className="Title"> All the football you <u>need.</u> </h1>
                <div className="Ronaldo">
                    <img src={ronaldo} alt="ronaldo picture" />
                </div>
                <div className="Messi">
                    <img src={messi} alt="messi picture" />

                </div>
            </div>
        </div>
    )
};

export default HomeVisual
