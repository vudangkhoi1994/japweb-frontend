import React from 'react'
import axiosInstance from '../../config/axiosInstance'
import { Link } from 'react-router-dom'
import TableRow from '../shared/TableRow'
import TableRowSelect from '../shared/TableRowSelect'

class KanjiUpdate extends React.Component {
    constructor() {
        super()
        this.state = {
            kanji: ''
        }
        this.getKanji = this.getKanji.bind(this)
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onClickSaveHandler = this.onClickSaveHandler.bind(this)
    }

    getKanji() {
        const _id = this.props.match.params.id
        axiosInstance.get('/kanjis/' + _id)
            .then((res) => {
                this.setState({
                    kanji: res.data
                })
            })
            .catch(error => console.log(error))
    }

    componentDidMount() {
        this.getKanji()
    }

    onClickSaveHandler(event) {
        event.preventDefault()
        const data = this.state.kanji 
        axiosInstance.put('/kanjis/' + this.props.match.params.id, data)
        .then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    onChangeHandler(event) {
        const { name, value } = event.target
        this.setState((prevState) => ({
            kanji: {
                ...prevState.kanji,
                [name]: value
            }
        }))
    }

    render() {
        return (
            <form className="form-group">
                <table className="table">
                    <tbody>
                        <TableRow name="character" label="Kanji" onChangeHandler={this.onChangeHandler} value={this.state.kanji.character} type="text" optRequired={'required'}/>
                        <TableRow name="meaning" label="Ý nghĩa" onChangeHandler={this.onChangeHandler} value={this.state.kanji.meaning} type="text"/>
                        <TableRow name="onyomi" label="Onyomi" onChangeHandler={this.onChangeHandler} value={this.state.kanji.onyomi} type="text"/>
                        <TableRow name="kunyomi" label="Kunyomi" onChangeHandler={this.onChangeHandler} value={this.state.kanji.kunyomi} type="text"/>
                        <TableRow name="image" label="Hình ảnh" onChangeHandler={this.onChangeHandler} value={this.state.kanji.image} type="text"/>
                        <TableRow name="strokes" label="Số nét" onChangeHandler={this.onChangeHandler} value={this.state.kanji.strokes} type="number"/>
                        <TableRow name="unitid" label="Bài học"  onChangeHandler={this.onChangeHandler} value={this.state.kanji.unitid} type="text" />
                        <TableRowSelect name="level" label="Cấp độ" onChangeHandler={this.onChangeHandler} selectValue={this.state.kanji.level}
                            options={[
                                {value:"n5", label: "N5"},
                                {value:"n4", label: "N4"},
                                {value:"n3", label: "N3"},
                                {value:"n2", label: "N2"},
                                {value:"n1", label: "N1"},
                                ]}
                        />
                    </tbody>
                </table>
                <div className="form-group text-center">
                    <button type="submit" className="btn btn-primary" onClick={this.onClickSaveHandler}>Lưu</button>
                    <button type="submit" className="btn btn-secondary" >
                        <Link to="/admin/kanjis/all" style={{ color: '#fff' }}>Cancel</Link>
                    </button>
                </div>
            </form>
        )
    }
}

export default KanjiUpdate
