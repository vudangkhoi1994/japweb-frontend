import React from 'react'

function TableRow(props) {
    return (
        <tr className="row">
            <td className="col-sm-2">
                <label className="col col-form-label">{props.label}</label>
            </td>
            <td className="col-sm-10">
                <input name={props.name} type={props.type} className="form-control" placeholder="" onChange={props.onChangeHandler} autoComplete="off" required={props.optRequired}  value={props.value}/>
            </td>
        </tr>
    )
}

export default TableRow
