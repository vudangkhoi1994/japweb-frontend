import React from 'react'
import axiosInstance from '../../config/axiosInstance'
import CourseListItem from './CourseListItem'

class CourseList extends React.Component {
    constructor() {
        super()
        this.state = {
            courses: []
        }
        this.deleteCourse = this.deleteCourse.bind(this)
    }

    getCourseList() {
        axiosInstance.get('/allcourses')
            .then((res) => {
                this.setState({
                    courses: res.data
                })
            })
            .catch(error => console.log(error))
    }

    componentDidMount() {
        this.getCourseList()
    }

    deleteCourse (e,_id) { 
        e.preventDefault()
        axiosInstance.delete(`/courses/${_id}`)
        .then((res) => {
            this.getCourseList()
        })
        .catch((e) => {
            console.log(e)
        })
    }

    render() {
        const items = this.state.courses.map((course) => {
            return (
                <CourseListItem key={course._id} course={course} deleteUnit={this.deleteCourse}/>
            )
        })
        return (
            <div className="unit-list">
                <h3>Danh sách khóa học</h3>
                <table className="table">
                    <thead>
                        <tr >
                            <th>Khoá học</th>
                            <th>Mô tả</th>
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

export default CourseList
