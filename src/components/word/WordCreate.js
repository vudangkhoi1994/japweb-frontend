import React from 'react'
import axiosInstance from '../../config/axiosInstance'
import TableRow from '../shared/TableRow'
import TableRowSelect from '../shared/TableRowSelect'

class WordCreate extends React.Component {
    constructor() {
        super()
        this.state = {
            kana: '',
            kanji: '',
            meaning: '',
            audio: '',
            image: '',
            type: ''
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onClickSubmitHandler = this.onClickSubmitHandler.bind(this)
    }

    onChangeHandler(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    onClickSubmitHandler(event) {
        event.preventDefault()
        const word = this.state
        axiosInstance.post('/words/create', word)
            .then((res) => {
                console.log(res)
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
                        <TableRow name="kana" label="Từ vựng" onChangeHandler={this.onChangeHandler} optRequired={true}/>
                        <TableRow name="kanji" label="Kanji" onChangeHandler={this.onChangeHandler} />
                        <TableRow name="meaning" label="Ý nghĩa" onChangeHandler={this.onChangeHandler} />
                        <TableRow name="audio" label="Audio" onChangeHandler={this.onChangeHandler} />
                        <TableRow name="image" label="Hình ảnh" onChangeHandler={this.onChangeHandler} />
                        <TableRowSelect name="type" label="Loại từ" onChangeHandler={this.onChangeHandler} selectValue={this.state.type}
                            options={[
                                {value:"n", label: "Danh từ"},
                                {value:"v1", label: "Động từ loại 1"},
                                {value:"v2", label: "Động từ loại 2"},
                                {value:"v3", label: "Động từ loại 3"},
                                {value:"adj1", label: "Tính từ đuôi (na)"},
                                {value:"adj2", label: "Tính từ đuôi (i)"},
                                {value:"adv", label: "Phó từ"}
                                ]}
                        />
                    </tbody>
                </table>
                <div className="form-group text-center">
                    <button type="submit" className="btn btn-primary" onClick={this.onClickSubmitHandler}>Submit</button>
                </div>
            </form>
        )
    }
}

export default WordCreate
