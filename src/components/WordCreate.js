import React from 'react'
import axiosInstance from '../config/axiosInstance'
import './WordCreate.css'

class WordCreate extends React.Component {
    constructor() {
        super()
        this.state = {
            kana: '',
            kanji: '',
            meaning: '',
            audio: '',
            image: '',
            type: ''
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onClickSubmitHandler = this.onClickSubmitHandler.bind(this)
    }

    onChangeHandler(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })

    }

    onClickSubmitHandler () {
        const word = this.state
        axiosInstance.post('/words/create', word)      
        .then((res) => {
            console.log(res)
            console.log(word)  
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <form className="form-group">
                <table className="table">
                    <tbody>
                        <tr className="row">
                            <td className="col-sm-2">
                                <label className="col col-form-label">Từ vựng</label>
                            </td>
                            <td className="col-sm-10">
                                <div >
                                    <input name="kana" type="text" className="form-control" placeholder="" onChange={this.onChangeHandler} autoComplete="off" />
                                </div>
                            </td>
                        </tr>
                        <tr className="row">
                            <td className="col-sm-2">
                                <label className="col col-form-label">Kanji</label>
                            </td>
                            <td className="col-sm-10">
                                <div >
                                    <input name="kanji" type="text" className="form-control" placeholder="" onChange={this.onChangeHandler} autoComplete="off" />
                                </div>
                            </td>
                        </tr>
                        <tr className="row">
                            <td className="col-sm-2">
                                <label className="col col-form-label">Ý nghĩa</label>
                            </td>
                            <td className="col-sm-10">
                                <div >
                                    <input name="meaning" type="text" className="form-control" placeholder="" onChange={this.onChangeHandler} autoComplete="off" />
                                </div>
                            </td>
                        </tr>
                        <tr className="row">
                            <td className="col-sm-2">
                                <label className="col col-form-label">Audio</label>
                            </td>
                            <td className="col-sm-10">
                                <div >
                                    <input name="audio " type="text" className="form-control" placeholder="" onChange={this.onChangeHandler} autoComplete="off" />
                                </div>
                            </td>
                        </tr>
                        <tr className="row">
                            <td className="col-sm-2">
                                <label className="col col-form-label">Hình ảnh</label>
                            </td>
                            <td className="col-sm-10">
                                <div >
                                    <input name="image" type="text" className="form-control" placeholder="" onChange={this.onChangeHandler} autoComplete="off" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="form-group text-center">
                    <button className="btn btn-primary" onClick={this.onClickSubmitHandler}>Submit</button>
                </div>
            </form>
        )
    }
}

export default WordCreate
