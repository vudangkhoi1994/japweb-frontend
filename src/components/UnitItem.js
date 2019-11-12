import React from 'react'
import {Link} from 'react-router-dom'

function UnitItem (props) {
    return(
        <div className="row">
            <div className="col">
                <Link
                    to={'/' + props.itemType + '/' + props.item._id + '/edit' }
                >
                    {props.label}
                </Link>
            </div>
            <div className="col">
                <p>{props.meaning}</p>
            </div>
            <div className="col-sm-2">
            <button className="btn btn-link col" onClick={(e) => props.onClickDelete(e, props.item)}>Xóa</button>
            </div>
        </div>
    )
}

export default UnitItem
