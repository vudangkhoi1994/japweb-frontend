import React from 'react'
import axiosInstance from '../../config/axiosInstance'
import { Link, Redirect } from 'react-router-dom'
import TableRow from '../shared/TableRow'
import CourseItem from './CourseItem'
import Modal from '../shared/Modal'

class CourseUpdate extends React.Component {
    constructor() {
        super()
        this.state = {
            course: '',
            courseUnits: [],
            modalItems: [],
        }
        this.getCourse = this.getCourse.bind(this)
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onClickSaveHandler = this.onClickSaveHandler.bind(this)
        this.getCourseUnits = this.getCourseUnits.bind(this)
        this.renderUnitList = this.renderUnitList.bind(this)
    }

    getCourse() {
        const _id = this.props.match.params.id // get _id from url
        axiosInstance.get(`/courses/${_id}`)
            .then((res) => {
                this.setState({
                    course: res.data
                })
            })
            .catch(error => console.log(error))
    }

    componentDidMount() {
        this.getCourse()
    }

    onClickSaveHandler(event) {
        event.preventDefault()
        const data = this.state.course
        const id = this.props.match.params.id

        axiosInstance.put(`/courses/${id}`, data)
        .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            })
    }

    onChangeHandler(event) {
        const { name, value } = event.target
        this.setState((prevState) => ({
            course: {
                ...prevState.course,
                [name]: value
            }
        }))
    }

    getCourseUnits() {
        const _id = this.props.match.params.id
        
        axiosInstance.get(`/courses/${_id}/units`)
            .then((res) => {
                this.setState({
                    courseUnits: res.data
                })
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // onClickDelete(e, uitem) {
    //     e.preventDefault()

    //     uitem.unitid = null // clear unitId

    //     const index = this.state.unitItems.findIndex((item) => item._id === uitem._id)

    //     let dataType = ''
    //     if (this.state.currentTab === 0) dataType = 'words'
    //     if (this.state.currentTab === 1) dataType = 'kanjis'
    //     if (this.state.currentTab === 2) dataType = 'grammars'

    //     axiosInstance.put(`/${dataType}/${uitem._id}`, uitem)
    //         .then((res) => {
    //             this.setState((prevState) => {
    //                 unitItems: prevState.unitItems.splice(index, 1)
    //             })
    //         }).catch((error) => {
    //             console.log(error)
    //         })
    // }

    // getModalItems() {
    //     axiosInstance.get(`/allunits`)
    //         .then(res => {
    //             this.setState({
    //                 modalItems: res.data
    //             })
    //         })
    //         .catch(error => {
    //             console.log({ error });
    //         })
    // }

    // onCLickAdd(e, item) {
    //     // console.log('working')

    //     item.unitid = this.props.match.params.id

    //     axiosInstance.put(`/${dataType}/${item._id}`, item)
    //         .then((res) => {
    //             this.setState((prevState) => {
    //                 unitItems: prevState.unitItems.push(item)
    //             })
    //             // console.log(this.state)
    //         }).catch((error) => {
    //             console.log(error)
    //         })
    // }

    renderUnitList() {
        const items = this.state.courseUnits.map((item) => {
                return (
                    <CourseItem
                    key={item._id}
                    itemType={'units'}
                    label={item.name}
                    desc={item.description}
                    item={item}
                        // onClickDelete={this.onClickDelete}
                    />
                )
            })
        return items
    }

    render() {
     
        return (
            <div>
                <form className="form-group">
                    <table className="table">
                        <tbody>
                            <TableRow name="name" label="Khóa học" onChangeHandler={this.onChangeHandler} value={this.state.course.name} optRequired={true} />
                            <TableRow name="description" label="Mô tả" onChangeHandler={this.onChangeHandler} value={this.state.course.description} />
                            <TableRow name="image" label="Hình ảnh" onChangeHandler={this.onChangeHandler} value={this.state.course.image} optRequired={true} />                       
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
                <ul className="nav nav-tabs nav-justified">
                    <li className="nav-item">
                        <Link to="#" onClick={this.getCourseUnits} style={{color : 'black'}}> 
                            <h3>Danh sách bài học</h3>
                        </Link>
                    </li>
                </ul>
                <div className="container" >
                    {this.renderUnitList()}
                </div>
                {/* 
                
                <div className="container" style={(this.state.currentTab === '') ? { display: 'none' } : { display: '' }}>
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
                </div> */}
            </div>
        )
    }
}

export default CourseUpdate
