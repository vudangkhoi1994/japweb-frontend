import React from 'react'
import axiosInstance from '../../config/axiosInstance'
import { Link } from 'react-router-dom'
import { Player, BigPlayButton } from 'video-react';
import UnitViewItem from './UnitViewItem'
import './UnitView.css'
// import HLSSource from '../../config/HLSSource'

class UnitView extends React.Component {
    constructor() {
        super()
        this.state = {
            unit: '',
            unitItems: [],
            modalItems: [],
            currentTab: ''
        }
        this.getUnit = this.getUnit.bind(this)
        this.getUnitWords = this.getUnitWords.bind(this)
        this.getUnitKanjis = this.getUnitKanjis.bind(this)
        this.getUnitGrammars = this.getUnitGrammars.bind(this)
        this.renderTab = this.renderTab.bind(this)
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

    renderTab() {
        let items = ''
        if (this.state.currentTab === 0) {
            items = this.state.unitItems.map((item) => {
                return (
                    <UnitViewItem
                        key={item._id}
                        itemType={'words'}
                        label={item.kana}
                        meaning={item.meaning}
                        item={item}
                    />
                )
            })
        } else if (this.state.currentTab === 1) {
            items = this.state.unitItems.map((item) => {
                return (
                    <UnitViewItem
                        key={item._id}
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
                    <UnitViewItem
                        key={item._id}
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
            <div className="unit-view">
                
                <Player src={this.state.unit.video}>
                    <BigPlayButton position="center" />
                </Player>
                <div className="unit-title">

                    <h4>{this.state.unit.name} : {this.state.unit.description}</h4>
                </div>
                <hr />
                <h5>Tóm tắt bài học</h5>
                <ul className="nav nav-tabs nav-justified">
                    <li className="nav-item">
                        <Link to="#" className={this.setState.currentTab === 0 ? 'nav-link active' : 'nav-link'} onClick={this.getUnitWords}>Từ vựng</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className={this.setState.currentTab === 1 ? 'nav-link active' : 'nav-link'} onClick={this.getUnitKanjis}>Kanji</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className={this.setState.currentTab === 2 ? 'nav-link active' : 'nav-link'} onClick={this.getUnitGrammars}>Ngữ pháp</Link>
                    </li>
                </ul>
                <div className="container" >
                    {this.renderTab()}
                </div>
            </div>
        )
    }
}

export default UnitView
