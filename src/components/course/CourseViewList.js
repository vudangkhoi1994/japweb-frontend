import React from 'react'
import Card from '../shared/Card'
import './CourseViewList.css'
import axiosInstance from '../../config/axiosInstance'

class CourseViewList extends React.Component {
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

    deleteCourse(e, _id) {
        console.log('Click ok')
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
        // const items = this.state.courses.map((course) => {
        //     return (
        //         <CourseListItem key={course._id} course={course} deleteUnit={this.deleteCourse}/>
        //     )
        // })
        return (
            <div className="course-list text-center">
                <h3 className="cvl-header">Chọn khóa học phù hợp với bạn</h3>
                <div className="card-deck" >
                    {this.state.courses.map(course => (
                        <Card
                            key={course._id}
                            cardImg={course.image}
                            cardTitle={course.name}
                            cardText={course.description}
                            cardId={course._id}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default CourseViewList
