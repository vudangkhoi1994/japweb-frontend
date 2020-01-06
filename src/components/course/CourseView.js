import React from 'react'
import { Link } from 'react-router-dom'
import axiosInstance from '../../config/axiosInstance'

class CourseUpdate extends React.Component {
    constructor() {
        super()
        this.state = {
            course: '',
            courseUnit: []
        }
        this.getCourse = this.getCourse.bind(this)
        this.getCourseUnit = this.getCourseUnit.bind(this)
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
            .catch((e) => {
                this.props.history.push('/login')
            })
    }

    getCourseUnit() {
        const _id = this.props.match.params.id
        axiosInstance.get(`/courses/${_id}/units`)
            .then((res) => {
                this.setState({
                    courseUnit: res.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    componentDidMount() {
        this.getCourse()
        this.getCourseUnit()
    }

    renderUnitList() {
        const items = this.state.courseUnit.map((item) => {
                return (
                    <div className="row" key={item._id}>
                            <div className="col-1">{item.name}</div>
                            <div className="col-11">
                                <Link to={`/units/${item._id}`}>
                                    <p>{item.description}</p>
                                </Link>
                            </div>
                        </div>
                    // <CourseItem
                    // key={item._id}
                    // itemType={'units'}
                    // label={item.name}
                    // desc={item.description}
                    // item={item}
                    //     // onClickDelete={this.onClickDelete}
                    // />
                )
            })
        return items
    }

    render() {

        return (
            <div>
                <div className="text-center">
                    <h3>Khóa học sơ cấp - N5</h3>
                </div>
                <hr />
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h4>Danh sách bài học</h4>
                            </div>
                        </div>
                    {this.renderUnitList()}
                    </div>
                </div>
            </div>
        )
    }
}

export default CourseUpdate
