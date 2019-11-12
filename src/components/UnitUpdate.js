import React from 'react'
import axiosInstance from '../config/axiosInstance'
import { Link } from 'react-router-dom'
import './UnitUpdate.css'
import TableRow from './shared/TableRow'
import UnitItem from './UnitItem'
import Modal from './shared/Modal'

class UnitUpdate extends React.Component {
    constructor() {
        super()
        this.state = {
            unit: '',
            unitItems: [],
            modalItems: [],
            currentTab: ''
        }
        this.getUnit = this.getUnit.bind(this)
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onClickSaveHandler = this.onClickSaveHandler.bind(this)
        this.onClickDelete = this.onClickDelete.bind(this)
        this.getUnitWords = this.getUnitWords.bind(this)
        this.getUnitKanjis = this.getUnitKanjis.bind(this)
        this.getUnitGrammars = this.getUnitGrammars.bind(this)
        this.renderTab = this.renderTab.bind(this)
        this.getModalItems = this.getModalItems.bind(this)
    }

    getUnit() {
        const _id = this.props.match.params.id
        axiosInstance.get('/units/' + _id)
            .then((res) => {
                this.setState({
                    unit: res.data
                })
            })
            .catch(error => console.log(error))
    }

    componentDidMount() {
        this.getUnit()
    }

    onClickSaveHandler(event) {
        event.preventDefault()
        const data = this.state.unit
        axiosInstance.patch('/units/' + this.props.match.params.id, data)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            })
    }

    onChangeHandler(event) {
        const { name, value } = event.target
        this.setState((prevState) => ({
            unit: {
                ...prevState.unit,
                [name]: value
            }
        }))
    }

    getUnitWords() {
        const _id = this.props.match.params.id
        axiosInstance.get(`/units/${_id}/words`)
            .then((res) => {
                this.setState({
                    currentTab: 0,
                    unitItems: res.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    getUnitKanjis() {
        const _id = this.props.match.params.id
        axiosInstance.get(`/units/${_id}/kanjis`)
            .then((res) => {
                this.setState({
                    currentTab: 1,
                    unitItems: res.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    getUnitGrammars() {
        const _id = this.props.match.params.id
        axiosInstance.get(`/units/${_id}/grammars`)
            .then((res) => {
                this.setState({
                    currentTab: 2,
                    unitItems: res.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    onClickDelete(e, uitem) {
        e.preventDefault()
        uitem.unitid = null
        const index = this.state.unitItems.findIndex((item) => item._id === uitem._id)
        axiosInstance.put('/words/' + uitem._id, uitem)
            .then((res) => {
                this.setState((prevState) => {
                    unitItems: prevState.unitItems.splice(index, 1)
                })
            }).catch((error) => {
                console.log(error)
            })

        this.renderTab()
    }

    getModalItems () {
        
        let dataType = ''
        if (this.state.currentTab === 0) dataType = 'words'
        if (this.state.currentTab === 1) dataType = 'kanjis'
        if (this.state.currentTab === 2) dataType = 'grammars'
        console.log({dataType});
        
        axiosInstance.get(`/all${dataType}`)
            .then(res => {
                this.setState({
                    modalItems : res.data
                })
            })
            .catch(error => {
                console.log({error});
            })
    }

    renderTab() {
        let items = ''
        if (this.state.currentTab === 0) {
            items = this.state.unitItems.map((item) => {
                return (
                    <UnitItem
                        key={item._id}
                        itemType={'words'}
                        label={item.kana}
                        meaning={item.meaning}
                        item={item}
                        onClickDelete={this.onClickDelete}
                    />
                )
            })
        } else if (this.state.currentTab === 1) {
            items = this.state.unitItems.map((item) => {
                return (
                    <UnitItem
                        itemType={'kanjis'}
                        label={item.character}
                        meaning={item.meaning}
                        item={item}
                    // onClickDelete={this.onClickDelete}
                    />
                )
            })
        } else if (this.state.currentTab === 2) {
            items = this.state.unitItems.map((item) => {
                return (
                    <UnitItem
                        itemType={'grammars'}
                        label={item.name}
                        meaning={item.content}
                        item={item}
                    // onClick={this.onClickDelete}
                    />
                )
            })
        }

        return (items)
    }

    render() {
        return (
            <div>
                <form className="form-group">
                    <table className="table">
                        <tbody>
                            <TableRow name="name" label="Ngữ pháp" onChangeHandler={this.onChangeHandler} value={this.state.unit.name} optRequired={true} />
                            <TableRow name="description" label="Mô tả" onChangeHandler={this.onChangeHandler} value={this.state.unit.description} />
                            <TableRow name="video" label="Video" onChangeHandler={this.onChangeHandler} value={this.state.unit.video} />
                            <TableRow name="document" label="Tài liệu" onChangeHandler={this.onChangeHandler} value={this.state.unit.document} />
                            <TableRow name="courseid" label="Khóa học" onChangeHandler={this.onChangeHandler} value={this.state.unit.courseid} />

                        </tbody>
                    </table>
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-primary" onClick={this.onClickSaveHandler}>Lưu</button>
                        <button type="submit" className="btn btn-secondary" >
                            <Link to="/units/all" style={{ color: '#fff' }}>Cancel</Link>
                        </button>
                    </div>
                </form>
                <hr />
                <h3>Section #2</h3>
                <ul className="nav nav-tabs nav-justified">
                    <li className="nav-item">
                        <Link to="#" className={this.setState.currentTab === 0 ? 'nav-link active' : 'nav-link'} onClick={this.getUnitWords}>Tu vung</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className={this.setState.currentTab === 1 ? 'nav-link active' : 'nav-link'} onClick={this.getUnitKanjis}>Kanji</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className={this.setState.currentTab === 2 ? 'nav-link active' : 'nav-link'} onClick={this.getUnitGrammars}>Ngu Phap</Link>
                    </li>
                </ul>
                <div className="container" >
                        {this.renderTab()}
                </div>
                <div className="container" style={(this.state.currentTab === '') ? {display: 'none'} : {display: ''}}>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#item-list-modal" onClick={this.getModalItems}>
                            Thêm mới
                        </button>
                        <Modal 
                            dataTarget="item-list-modal"
                            modalTitle="//TODO"
                            modalItems={this.state.modalItems}
                            currentTab={this.state.currentTab}
                            onClickAdd={this.onCLickAdd}
                        />
                    </div>
            </div>
        )
    }
}

export default UnitUpdate
