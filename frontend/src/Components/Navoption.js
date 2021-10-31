import React from 'react'

function Navoption(image, icon) {
    return (
        <div>
            <img className="img"
                src={image}
                alt={icon.name}
            />
        </div>
    )
}

export default Navoption
