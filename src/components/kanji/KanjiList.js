import React from 'react'
import axiosInstance from '../../config/axiosInstance'
import KanjiListItem from './KanjiListItem'

class WordList extends React.Component {
    constructor() {
        super()
        this.state = {
            kanjis: []
        }
        this.deleteKanji = this.deleteKanji.bind(this)
    }

    getKanjiList() {
        axiosInstance.get('/allkanjis')
            .then((res) => {
                this.setState({
                    kanjis: res.data
                })
            })
            .catch(error => console.log(error))
    }

    componentDidMount() {
        this.getKanjiList()
    }

    deleteKanji (e,_id) {
        e.preventDefault()
        axiosInstance.delete(`/kanjis/${_id}`)
        .then((res) => {
            this.getKanjiList()
        })
        .catch((e) => {
            console.log(e)
        })

    }

    render() {
        const items = this.state.kanjis.map((kanji) => {
            return (
                <KanjiListItem key={kanji._id} kanji={kanji} deleteKanji={this.deleteKanji}/>
            )
        })
        return (
            <div className="kanji-list">
                <h3>Danh sách Kanji</h3>
                <table className="table">
                    <thead>
                        <tr >
                            <th>Kanji</th>
                            <th>Ý nghĩa</th>
                            <th>Onyomi</th>
                            <th>Kunyomi</th>        
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
