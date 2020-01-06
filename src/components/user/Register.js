import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import axiosInstance from '../../config/axiosInstance'

class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            accInfo: {
                name: '',
                email: '',
                password: ''
            }
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.registerOnClick = this.registerOnClick.bind(this)
    }

    onChangeHandler(event) {
        const { name, value } = event.target
        this.setState((prevState) => ({
            accInfo: {
                ...prevState.accInfo,
                [name] :value
            }
        }))
    }

    registerOnClick (event) {
        // console.log(this.state.loginInfo)
        event.preventDefault()
        const accInfo = this.state.accInfo
        console.log(accInfo);
        
        axiosInstance.post('/users/create', accInfo)
            .then((res) => {
                console.log(res.data)
                localStorage.setItem('token', res.data.token)
                this.props.history.push('/')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <form className="login-form" >
                    <h3 className="text-center">Đăng kí tài khoản</h3>
                    <div className="form-group">
                        <div className="">
                            <input name="name" type="text" className="form-control" placeholder="Tên" required="required" onChange={this.onChangeHandler}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="">
                            <input name="email" type="email" className="form-control" placeholder="Email" required="required" onChange={this.onChangeHandler}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <input name="password" type="password" className="form-control" placeholder="Mật khẩu" required="required" onChange={this.onChangeHandler}/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block" onClick={this.registerOnClick}>Đăng kí</button>
                    </div>
                </form>
                <p className="text-center">
                    <Link to="/login" >Đăng nhập</Link>
                </p>
            </div>
        )
    }
}

export default Register
