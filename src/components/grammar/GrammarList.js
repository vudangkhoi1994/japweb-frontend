import React from 'react'
import axiosInstance from '../../config/axiosInstance'
import GrammarListItem from './GrammarListItem'

class WordList extends React.Component {
    constructor() {
        super()
        this.state = {
            grammars: []
        }
        this.deleteGrammar = this.deleteGrammar.bind(this)
    }

    getGrammarList() {
        axiosInstance.get('/allgrammars')
            .then((res) => {
                this.setState({
                    grammars: res.data
                })
            })
            .catch(error => console.log(error))
    }

    componentDidMount() {
        this.getGrammarList()
    }

    deleteGrammar (e,_id) {
        e.preventDefault()
        axiosInstance.delete(`/grammars/${_id}`)
        .then((res) => {
            this.getGrammarList()
        })
        .catch((e) => {
            console.log(e)
        })
    }

    render() {
        const items = this.state.grammars.map((grammar) => {
            return (
                <GrammarListItem key={grammar._id} grammar={grammar} deleteGrammar={this.deleteGrammar}/>
            )
        })
        return (
            <div className="wordd-list">
                <h3>Danh sách ngữ pháp</h3>
                <table className="table">
                    <thead>
                        <tr >
                            <th>Ngữ pháp</th>
                            <th>Cấp độ</th>
                            <th>Ngày tạo</th>
                            <th>Chỉnh sửa lần cuối</th>
                            <th className="text-center">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default WordList
