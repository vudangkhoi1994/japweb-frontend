import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import './Navbar.css'

class Navbar extends React.Component {
    handleLogout = () => {
        localStorage.clear()
        this.props.history.push('/login')
    }
    render() {
        const role = window.localStorage.getItem('role')

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand" >Trang chủ</Link>
                <div className="collapse navbar-collapse" >
                    {role === 'super-admin' && (
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item dropdown">
                                <Link to="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Khóa học</Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to="/admin/courses/all" className="dropdown-item">Danh sách khóa học</Link>
                                    <Link to="/admin/courses/create" className="dropdown-item">Thêm khóa học</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Bài học</Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to="/admin/units/all" className="dropdown-item">Danh sách bài học</Link>
                                    <Link to="/admin/units/create" className="dropdown-item">Thêm bài học</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/admin/words/all" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Từ vựng</Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to="/admin/words/all" className="dropdown-item">Danh sách các từ</Link>
                                    <Link to="/admin/words/create" className="dropdown-item">Thêm từ</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Kanji</Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to="/admin/kanjis/all" className="dropdown-item">Danh sách Kanji</Link>
                                    <Link to="/admin/kanjis/create" className="dropdown-item">Thêm Kanji</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Ngữ pháp</Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to="/admin/grammars/all" className="dropdown-item">Danh sách ngữ pháp</Link>
                                    <Link to="/admin/grammars/create" className="dropdown-item">Thêm ngữ pháp</Link>
                                </div>
                            </li>
                        </ul>
                    )}
                </div>
                {role !== null && (
                        <div className="form-inline">
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.handleLogout}>Đăng xuất</button>
                        </div>
                    )}
                {role === null && (
                    <div className="form-inline">
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" >
                            <Link to='/login' >
                                Đăng nhập
                            </Link>
                        </button>
                    </div>
                )}
            </nav>
        )
    }
}

export default withRouter(Navbar)
