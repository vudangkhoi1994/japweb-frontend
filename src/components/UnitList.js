import React from 'react'
import './UnitList.css'
import axiosInstance from '../config/axiosInstance'
import UnitListItem from './UnitListItem'

class WordList extends React.Component {
    constructor() {
        super()
        this.state = {
            units: []
        }
        // this.deleteGrammar = this.deleteGrammar.bind(this)
    }

    getUnitList() {
        axiosInstance.get('/allunits')
            .then((res) => {
                this.setState({
                    units: res.data
                })
            })
            .catch(error => console.log(error))
    }

    componentDidMount() {
        this.getUnitList()
    }

    deleteUnit (e,_id) {
        console.log('Workin!!!');
        
        // console.log('Click ok')
        // e.preventDefault()
        // axiosInstance.delete(`/grammars/${_id}`)
        // .then((res) => {
        //     this.getGrammarList()
        // })
        // .catch((e) => {
        //     console.log(e)
        // })
    }

    render() {
        const items = this.state.units.map((unit) => {
            return (
                <UnitListItem key={unit._id} unit={unit} deleteUnit={this.deleteUnit}/>
            )
        })
        return (
            <div className="unit-list">
                <h3>Danh sach tu</h3>
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
