import React from 'react'
import axiosInstance from '../../config/axiosInstance'
import TableRow from '../shared/TableRow'

class courseCreate extends React.Component {
    constructor() {
        super()
        this.state = {
            course: {
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
            course: {
                ...prevState.course,
                [name] :value
            }
        }))
    }

    onClickSubmitHandler(event) {
        event.preventDefault()
        console.log(this.state.course)

        const course = this.state.course
        axiosInstance.post('/courses/create', course)
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
                    </tbody>
                </table>
                <div className="form-group text-center">
                    <button type="submit" className="btn btn-primary" onClick={this.onClickSubmitHandler}>Submit</button>
                </div>
            </form>
        )
    }
}

export default courseCreate
