import React from 'react'
import './WordListItem.css'

function ListItem (props) {
    return (
        <tr className="">
            <td>
                <a href={'/words/'+props.word._id}>
                    {props.word.kana}
                </a>
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
            <td>
                <p className="item-edit" >
                    <a href={'/words/edit/'+ props.word._id}>sửa </a>
                    <a href={'/words/delete/'+ props.word._id}>xóa</a>
                </p>
            </td>
        </tr>
    )
}

export default ListItem
