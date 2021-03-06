import React from 'react'
import {Link} from 'react-router-dom'

function CourseItem (props) {
    return(
        <div className="row">
            <div className="col">
                <Link
                    to={`/admin/${props.itemType}/${props.item._id}/edit`}
                >
                    {props.label}
                </Link>
            </div>
            <div className="col">
                <p>{props.desc}</p>
            </div>
            <div className="col-sm-2">
            {/* <button className="btn btn-link col" onClick={(e) => props.onClickDelete(e, props.item)}>Xóa</button> */}
            </div>
        </div>
    )
}

export default CourseItem
