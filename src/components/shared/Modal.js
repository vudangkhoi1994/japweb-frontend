import React from 'react'
import { Link } from 'react-router-dom'

function Modal(porps) {
    const itemList = porps.modalItems.map((item) => {
        if (porps.currentTab === 0 ) {
            return (
                <div className="form-group row" key={item._id}>
                    <div className="col-sm-10">
                        <Link to={`/words/${item._id}/edit`}>
                            {item.kana}
                        </Link>
                    </div>
                    <div className="col-sm-2 text-center">
                        <button className="btn btn-link" >&#43;</button>
                    </div>
                </div>
            )
        }
    })
    return (
        <div className="modal fade" id={porps.dataTarget} tabIndex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modal-title">{porps.modalTitle}</h5>
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
