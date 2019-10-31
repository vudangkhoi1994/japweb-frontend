import React from 'react'
import './WordList.css'
import axiosInstance from '../config/axiosInstance'
import ListItem from './WordListItem'

class WordList extends React.Component {
    constructor() {
        super()
        this.state = {
            words: []
        }
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

    render() {
        const items = this.state.words.map((word) => {
            return (
                <ListItem key={word._id} word={word}/>
            )
        })
        return (
            <div className="wordd-list">
                <h3>Danh sach tu</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Từ vựng</th>
                            <th>Kanji</th>
                            <th>Ngày tạo</th>
                            <th>Chỉnh sửa lần cuối</th>
                            <th>Hành động</th>
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
