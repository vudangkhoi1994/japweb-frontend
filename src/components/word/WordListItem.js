import React from 'react'
import { Link } from 'react-router-dom'
import './WordListItem.css'

function WordListItem (props) {
    return (
        <tr className="">
            <td>
                <Link to={'/words/'+ props.word._id +'/edit'}>
                    {props.word.kana}
                </Link>
            </td>
            <td>
                {props.word.kanji}
            </td>
            <td>
                {props.word.createdAt}
            </td>
            <td>
                {props.word.updatedAt}
            </td>
            <td className="text-center">
                <p className="item-edit" >
                    {/* <Link to={'/words/delete/'+ props.word._id} onClick={(event) => props.deleteWord(props.word._id)}> xóa </Link> */}
                    <button onClick={(e) => props.deleteWord(e, props.word._id)} className="btn btn-link">xóa</button>
                    {/* <a href="" onClick={(e) => props.deleteWord(e, props.word._id)}>xóa</a> */}
                </p>
            </td>
        </tr>
    )
}

export default WordListItem
