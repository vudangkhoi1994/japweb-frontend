import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

function CourseListItem (props) {
    return (
        <tr className="">
            <td>
                <Link to={'/admin/courses/'+ props.course._id +'/edit'}>
                    {props.course.name}
                </Link>
            </td>
            <td>
                {props.course.description}
            </td>
            <td>
                {props.course.createdAt && moment(props.course.createdAt).format('HH:mm:ss DD/MM/YYYY')}
            </td>
            <td>
                {props.course.updatedAt && moment(props.course.updatedAt).format('HH:mm:ss DD/MM/YYYY')}
            </td>
            <td className="text-center">
                <p className="item-edit" >
                    <button onClick={(e) => props.deleteUnit(e, props.course._id)} className="btn btn-link">xóa</button>
                </p>
            </td>
        </tr>
    )
}

export default CourseListItem
