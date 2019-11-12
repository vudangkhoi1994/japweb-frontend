import React from 'react'
import axiosInstance from '../config/axiosInstance'
import './UnitCreate.css'
import TableRow from './shared/TableRow'

class UnitCreate extends React.Component {
    constructor() {
        super()
        this.state = {
            unit: {
                name: '',
                content: '',
                level: ''
            }
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onClickSubmitHandler = this.onClickSubmitHandler.bind(this)
    }

    onChangeHandler(event) {
        const { name, value } = event.target
        this.setState((prevState) => ({
            unit: {
                ...prevState.unit,
                [name] :value
            }
        }))
    }

    onClickSubmitHandler(event) {
        event.preventDefault()
        console.log(this.state.unit);

        const unit = this.state.unit
        axiosInstance.post('/units/create', unit)
            .then((res) => {
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <form className="form-group">
                <table className="table">
                    <tbody>
                        <TableRow name="name" label="Bài học" onChangeHandler={this.onChangeHandler} type="text" optRequired={true} />
                        <TableRow name="description" label="Mô tả" onChangeHandler={this.onChangeHandler} type="text" />
                        <TableRow name="video" label="Video" onChangeHandler={this.onChangeHandler} type="text" />
                        <TableRow name="document" label="Tài liệu" onChangeHandler={this.onChangeHandler} type="text" />
                    </tbody>
                </table>
                <div className="form-group text-center">
                    <button type="submit" className="btn btn-primary" onClick={this.onClickSubmitHandler}>Submit</button>
                </div>
            </form>
        )
    }
}

export default UnitCreate
