import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

function UnitListItem (props) {
    return (
        <tr className="">
            <td>
                <Link to={'/admin/units/'+ props.unit._id +'/edit'}>
                    {props.unit.name}
                </Link>
            </td>
            <td>
                {props.unit.description}
            </td>
            <td>
                {props.unit.createdAt && moment(props.unit.createdAt).format('HH:mm:ss DD/MM/YYYY')}
            </td>
            <td>
                {props.unit.updatedAt && moment(props.unit.updatedAt).format('HH:mm:ss DD/MM/YYYY')}
            </td>
            <td className="text-center">
                <p className="item-edit" >
                    <button onClick={(e) => props.deleteUnit(e, props.unit._id)} className="btn btn-link">xóa</button>
                </p>
            </td>
        </tr>
    )
}

export default UnitListItem
