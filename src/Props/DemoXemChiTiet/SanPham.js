import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {

        let {sp} = this.props;
        return (
            <div className="card bg-dark text-white">
                <img src={sp.hinhAnh} alt="..." height={450} />
                <div className="card-body">
                    <p>{sp.tenSP}</p>
                    <p>{sp.giaBan}</p>
                    <button className="btn btn-success" onClick={() => {
                        this.props.xemChiTiet(sp);
                    }}>Xem Chi Tiết</button>

                    <button className="ml-2 btn btn-danger" onClick={() =>{
                        this.props.themGioHang(sp);
                    }}> 
                        Thêm Giỏ Hàng
                    </button>
                </div>
            </div>
        )
    }
}
