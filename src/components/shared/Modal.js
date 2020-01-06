import React from 'react'
import { Link } from 'react-router-dom'

function Modal(porps) {
    let data = ''
    if(porps.currentTab === 0 ) data = {type : 'words', display : 'kana', title :'Danh sách từ'}
    if(porps.currentTab === 1 ) data = {type : 'kanjis', display : 'character', title :'Danh sách kanji'}
    if(porps.currentTab === 2 ) data = {type : 'grammars', display : 'name', title :'Danh sách ngữ pháp'}

    const itemList = porps.modalItems.map((item) => {
            return (
                <div className="form-group row" key={item._id}>
                    <div className="col-sm-10">
                        <Link to={`/admin/${data.type}/${item._id}/edit`}>
                            {item[data.display]}
                        </Link>
                    </div>
                    <div className="col-sm-2 text-center">
                        <button className="btn btn-link" onClick={(e) => porps.onClickAdd(e, item)}>&#43;</button> {/* "&#43;" : "+" */}
                    </div>
                </div>
            )
    })
    return (
        <div className="modal fade" id={porps.dataTarget} tabIndex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modal-title">{data.title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                       {itemList}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng lại</button>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default Modal
