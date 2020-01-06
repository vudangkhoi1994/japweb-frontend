import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import axiosInstance from '../../config/axiosInstance'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            loginInfo: {
                email: '',
                password: ''
            }
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.loginOnClick = this.loginOnClick.bind(this)
    }

    onChangeHandler(event) {
        const { name, value } = event.target
        this.setState((prevState) => ({
            loginInfo: {
                ...prevState.loginInfo,
                [name] :value
            }
        }))
    }

    loginOnClick (event) {
        // console.log(this.state.loginInfo)
        event.preventDefault()
        const loginInfo = this.state.loginInfo
        console.log(loginInfo);
        
        axiosInstance.post('/users/login', loginInfo)
            .then((res) => {
                console.log(res.data)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('role', res.data.user.role);
                axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`
                this.props.history.push("/");
            })
            .catch((error) => {
                alert('Sai email hoặc mật khẩu')
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <form className="login-form" >
                    <h3 className="text-center">Đăng nhập</h3>
                    <div className="form-group">
                        <div className="">
                            <input name="email" type="email" className="form-control" placeholder="Email" required="required" onChange={this.onChangeHandler}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <input name="password" type="password" className="form-control" placeholder="Mật khẩu" required="required" onChange={this.onChangeHandler}/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block" onClick={this.loginOnClick}>Đăng nhập</button>
                    </div>
                </form>
                <p className="text-center">
                    <Link to="/register" >Đăng kí</Link>
                </p>
            </div>
        )
    }
}

export default Login
