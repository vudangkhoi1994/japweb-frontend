import React from 'react'
import axiosInstance from '../../config/axiosInstance'
import { Link } from 'react-router-dom'
import TableRow from '../shared/TableRow'
import TableRowSelect from '../shared/TableRowSelect'

class GrammarUpdate extends React.Component {
    constructor() {
        super()
        this.state = {
            grammar: ''
        }
        this.getGrammar = this.getGrammar.bind(this)
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onClickSaveHandler = this.onClickSaveHandler.bind(this)
    }

    getGrammar() {
        const _id = this.props.match.params.id
        axiosInstance.get('/grammars/' + _id)
            .then((res) => {
                this.setState({
                    grammar: res.data
                })
            })
            .catch(error => console.log(error))
    }

    componentDidMount() {
        this.getGrammar()
    }

    onClickSaveHandler(event) {
        event.preventDefault()
        const data = this.state.grammar
        axiosInstance.put('/grammars/' + this.props.match.params.id, data)
        .then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    onChangeHandler(event) {
        const { name, value } = event.target
        this.setState((prevState) => ({
            grammar: {
                ...prevState.grammar,
                [name]: value
            }
        }))
    }

    render() {
        return (
            <form className="form-group">
                <table className="table">
                    <tbody>
                        <TableRow name="name" label="Ngữ pháp" onChangeHandler={this.onChangeHandler} value={this.state.grammar.name} optRequired={true} />
                        <TableRow name="content" label="Giải thích" onChangeHandler={this.onChangeHandler} value={this.state.grammar.content} />
                        <TableRow name="unitid" label="Bài học" onChangeHandler={this.onChangeHandler} value={this.state.grammar.unitid} />
                        <TableRowSelect name="level" label="Cấp độ" onChangeHandler={this.onChangeHandler} selectValue={this.state.grammar.level}
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
                    <button type="submit" className="btn btn-primary" onClick={this.onClickSaveHandler}>Lưu</button>
                    <button type="submit" className="btn btn-secondary" >
                        <Link to="/grammars/all" style={{ color: '#fff' }}>Cancel</Link>
                    </button>
                </div>
            </form>
        )
    }
}

export default GrammarUpdate
