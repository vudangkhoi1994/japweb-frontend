import React from 'react'
import './WordList.css'
import axiosInstance from '../../config/axiosInstance'
import WordListItem from './WordListItem'

class WordList extends React.Component {
    constructor() {
        super()
        this.state = {
            words: []
        }
        this.deleteWord = this.deleteWord.bind(this)
    }

    getWordsList() {
        axiosInstance.get('/allwords')
            .then((res) => {
                this.setState({
                    words: res.data
                })
            })
            .catch(error => console.log(error))
    }

    componentDidMount() {
        this.getWordsList()
    }

    deleteWord (e,_id) {
        e.preventDefault()
        axiosInstance.delete(`/words/${_id}`)
        .then((res) => {
            this.getWordsList()
        })
        .catch((e) => {
            console.log(e)
        })

    }

    render() {
        const items = this.state.words.map((word) => {
            return (
                <WordListItem key={word._id} word={word} deleteWord={this.deleteWord}/>
            )
        })
        return (
            <div className="wordd-list">
                <h3>Danh sach tu</h3>
                <table className="table">
                    <thead>
                        <tr >
                            <th>Từ vựng</th>
                            <th>Kanji</th>
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
