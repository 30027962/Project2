import React from 'react'

import './Card.css'

const Card = ({car, index, ...otherProps}) => {
    return (
        <div {...otherProps} className="card">
            {
                car.photos.length ?
                <div className="photo">
                    <img src={car.photos} alt="car" />
                </div>
                : null
            }
            <div className="info">
                <h3>{car.name}</h3>
                <p className="description">
                    {
                        car.description
                    }
                </p>
            </div>
        </div>
    )
}

export default Card
