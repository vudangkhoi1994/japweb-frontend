import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

function GrammarListItem (props) {
    return (
        <tr className="">
            <td>
                <Link to={'/admin/grammars/'+ props.grammar._id +'/edit'}>
                    {props.grammar.name}
                </Link>
            </td>
            <td>
                {props.grammar.level}
            </td>
            <td>
                {props.grammar.createdAt && moment(props.grammar.createdAt).format('HH:mm:ss DD/MM/YYYY')}
            </td>
            <td>
                {props.grammar.updatedAt && moment(props.grammar.updatedAt).format('HH:mm:ss DD/MM/YYYY')}
            </td>
            <td className="text-center">
                <p className="item-edit" >
                    <button onClick={(e) => props.deleteGrammar(e, props.grammar._id)} className="btn btn-link">xóa</button>
                </p>
            </td>
        </tr>
    )
}

export default GrammarListItem
