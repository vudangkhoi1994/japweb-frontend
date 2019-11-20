import React from 'react'
import { Link } from 'react-router-dom'

function WordListItem (props) {
    return (
        <tr className="">
            <td>
                <Link to={'/admin/kanjis/'+ props.kanji._id +'/edit'}>
                    {props.kanji.character}
                </Link>
            </td>
            <td>
                {props.kanji.meaning}
            </td>
            <td>
                {props.kanji.onyomi}
            </td>
            <td>
                {props.kanji.kunyomi}
            </td>
            <td>
                {props.kanji.createdAt}
            </td>
            <td>
                {props.kanji.updatedAt}
            </td>
            <td className="text-center">
                <p className="item-edit" >
                    <button onClick={(e) => props.deleteKanji(e, props.kanji._id)} className="btn btn-link">xóa</button>
                </p>
            </td>
        </tr>
    )
}

export default WordListItem