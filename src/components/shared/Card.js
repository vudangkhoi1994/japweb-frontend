import React from 'react'
import {Link } from 'react-router-dom'
import './Card.css'

function Card(props) {
    return (
        <div className="card card-witdh">
            <img className="card-img-top" src={props.cardImg} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">{props.cardText}</p>
                <div className="btn btn-success">
                    <Link to={`/courses/${props.cardId}`} className="link-text" > Xem thêm </Link>
                </div>
            </div>
        </div>
    )
}

export default Card
