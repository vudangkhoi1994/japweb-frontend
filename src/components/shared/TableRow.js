import React from 'react'
import './TableRow.css'

function TableRow(props) {
    const opt = props.optRequired ? 'requried' : ''
    return (
        <tr className="row">
            <td className="col-sm-2">
                <label className="col col-form-label">{props.label}</label>
            </td>
            <td className="col-sm-10">
                <input name={props.name} type="text" className="form-control" placeholder="" onChange={props.onChangeHandler} autoComplete="off" {...{opt}} value={props.value}/>
            </td>
        </tr>
    )
}

export default TableRow
