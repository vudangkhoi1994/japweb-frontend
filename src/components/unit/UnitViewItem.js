import React from 'react'
import { Link } from 'react-router-dom'

function UnitViewItem(props) {
    return (
        <div className="row">
            <div className="col-2 text-left">
                <p>
                    {props.label}
                </p>
            </div>
            <div className="col-10 text-left">
                <p>{props.meaning}</p>
            </div>
        </div>
    )
}

export default UnitViewItem
