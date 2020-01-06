import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

function WordListItem (props) {
    return (
        <tr className="">
            <td>
                <Link to={'/admin/words/'+ props.word._id +'/edit'}>
                    {props.word.kana}
                </Link>
            </td>
            <td>
                {props.word.kanji}
            </td>
            <td>
                {props.word.createdAt && moment(props.word.createdAt).format('HH:mm:ss DD/MM/YYYY')}
            </td>
            <td>
                {props.word.updatedAt && moment(props.word.updatedAt).format('HH:mm:ss DD/MM/YYYY')}
            </td>
            <td className="text-center">
                <p className="item-edit" >
                    <button onClick={(e) => props.deleteWord(e, props.word._id)} className="btn btn-link">xóa</button>
                </p>
            </td>
        </tr>
    )
}

export default WordListItem
