import React from 'react'
import axiosInstance from '../../config/axiosInstance'
import { Link } from 'react-router-dom'
import TableRow from '../shared/TableRow'
import TableRowSelect from '../shared/TableRowSelect'

class WordUpdate extends React.Component {
    constructor() {
        super()
        this.state = {
            word: ''
        }
        this.getWord = this.getWord.bind(this)
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onClickSaveHandler = this.onClickSaveHandler.bind(this)
    }

    getWord() {
        const _id = this.props.match.params.id
        axiosInstance.get('/words/' + _id)
            .then((res) => {
                this.setState({
                    word: res.data
                })
            })
            .catch(error => console.log(error))
    }

    componentDidMount() {
        this.getWord()
    }

    onClickSaveHandler(event) {
        event.preventDefault()
        const data = this.state.word
        axiosInstance.put('/words/' + this.props.match.params.id, data)
        .then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    onChangeHandler(event) {
        const { name, value } = event.target
        this.setState((prevState) => ({
            word: {
                ...prevState.word,
                [name]: value
            }
        }))
    }

    render() {
        return (
            <form className="form-group">
                <table className="table">
                    <tbody>
                        <TableRow name="kana" label="Từ vựng" onChangeHandler={this.onChangeHandler} value={this.state.word.kana} optRequired={true} />
                        <TableRow name="kanji" label="Kanji" onChangeHandler={this.onChangeHandler} value={this.state.word.kanji} />
                        <TableRow name="meaning" label="Ý nghĩa" onChangeHandler={this.onChangeHandler} value={this.state.word.meaning} />
                        <TableRow name="audio" label="Audio" onChangeHandler={this.onChangeHandler} value={this.state.word.audio} />
                        <TableRow name="image" label="Hình ảnh" onChangeHandler={this.onChangeHandler} value={this.state.word.image} />
                        <TableRow name="unitid" label="Bài học" onChangeHandler={this.onChangeHandler} value={this.state.word.unitid} />
                        <TableRowSelect name="type" label="Loại từ" onChangeHandler={this.onChangeHandler} selectValue={this.state.word.type}
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
                    <button type="submit" className="btn btn-primary" onClick={this.onClickSaveHandler}>Lưu</button>
                    <button type="submit" className="btn btn-secondary" >
                        <Link to="/words/all" style={{ color: '#fff' }}>Cancel</Link>
                    </button>
                </div>
            </form>
        )
    }
}

export default WordUpdate
