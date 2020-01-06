import React from 'react'
import moment from 'moment'
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
                {props.kanji.createdAt && moment(props.kanji.createdAt).format('HH:mm:ss DD/MM/YYYY')}
            </td>
            <td>
                {props.kanji.updatedAt && moment(props.kanji.updatedAt).format('HH:mm:ss DD/MM/YYYY')}
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