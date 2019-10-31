import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand" >=> Logo {'<='}</Link>
                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Khóa học</Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="/courses/all" className="dropdown-item">Danh sách khóa học</Link>
                                <Link to="/courses/create" className="dropdown-item">Thêm khóa học</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Bài học</Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="/units/all" className="dropdown-item">Danh sách bài học</Link>
                                <Link to="/units/create" className="dropdown-item">Thêm bài học</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="/words/all" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Từ vựng</Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="/words/all" className="dropdown-item">Danh sách các từ</Link>
                                <Link to="/words/create" className="dropdown-item">Thêm từ</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Kanji</Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="/kanjis/all" className="dropdown-item">Danh sách Kanji</Link>
                                <Link to="/kanjis/create" className="dropdown-item">Thêm Kanji</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Từ vựng</Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="/grammars/all" className="dropdown-item">Danh sách các từ</Link>
                                <Link to="/grammars/create" className="dropdown-item">Thêm ngữ pháp</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar
