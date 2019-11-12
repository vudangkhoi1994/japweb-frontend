import React from 'react'
import { Link } from 'react-router-dom'

function GrammarListItem (props) {
    return (
        <tr className="">
            <td>
                <Link to={'/grammars/'+ props.grammar._id +'/edit'}>
                    {props.grammar.name}
                </Link>
            </td>
            <td>
                {props.grammar.level}
            </td>
            <td>
                {props.grammar.createdAt}
            </td>
            <td>
                {props.grammar.updatedAt}
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
