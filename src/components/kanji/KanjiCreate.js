import React from 'react'
import axiosInstance from '../../config/axiosInstance'
import TableRow from '../shared/TableRow'
import TableRowSelect from '../shared/TableRowSelect'

class KanjiCreate extends React.Component {
    constructor() {
        super()
        this.state = {
            kanji: {
                character: '',
                meaning: '',
                onyomi: '',
                kunyomi: '',
                level: '',
                image: '',
                strokes: '',
                examples: []
            }
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onClickSubmitHandler = this.onClickSubmitHandler.bind(this)
    }

    onChangeHandler(event) {
        const { name, value } = event.target
        this.setState((prevState) => ({
            kanji: {
                ...prevState.kanji,
                [name] :value
            }
        }))
    }

    onClickSubmitHandler(event) {
        event.preventDefault()
        console.log(this.state.kanji);

        const kanji = this.state.kanji
        axiosInstance.post('/kanjis/create', kanji)
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
                        <TableRow name="character" label="Kanji" onChangeHandler={this.onChangeHandler} type="text" optRequired={true} />
                        <TableRow name="meaning" label="Ý nghĩa" onChangeHandler={this.onChangeHandler} type="text" />
                        <TableRow name="onyomi" label="Onyomi" onChangeHandler={this.onChangeHandler} type="text" />
                        <TableRow name="kunyomi" label="Kunyomi" onChangeHandler={this.onChangeHandler} type="text" />
                        <TableRow name="image" label="Hình ảnh" onChangeHandler={this.onChangeHandler} type="text" />
                        <TableRow name="strokes" label="Số nét" onChangeHandler={this.onChangeHandler} type="number" />
                        <TableRowSelect name="level" label="Cấp độ" onChangeHandler={this.onChangeHandler} selectValue={this.state.kanji.level}
                            options={[
                                { value: "", label: "---" },
                                { value: "n5", label: "N5" },
                                { value: "n4", label: "N4" },
                                { value: "n3", label: "N3" },
                                { value: "n2", label: "N2" },
                                { value: "n1", label: "N1" }
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

export default KanjiCreate
