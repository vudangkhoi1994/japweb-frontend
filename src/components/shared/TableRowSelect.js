import React from 'react'

function TableRowSelect(props) {
    const opts = props.options.map((opt) => {
        return(
            <option key={opt.value} value={opt.value}> {opt.label} </option>// warning with key props?
        )
    })
    return (
        <tr className="row">
            <td className="col-sm-2">
                <label className="col col-form-label">{props.label}</label>
            </td>
            <td className="col-sm-10">
                <select name={props.name} className="form-control" onChange={props.onChangeHandler} value={props.selectValue}>
                    {opts}
                </select>
            </td>
        </tr>
    )
}

export default TableRowSelect
