import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {

        let { sp } = this.props;
        let count = 0;
        return (
            <div className="card bg-dark text-white">
                <img src={sp.hinhAnh} alt="..." height={450} />
                <div className="card-body">
                    <p>{sp.tenSP}</p>
                    <p>{sp.giaBan}</p>
                    <button className="btn btn-success" onClick={() => {
                        this.props.xemChiTiet(sp);
                    }}>Xem Chi Tiết</button>

                    <button className="ml-2 btn btn-danger" id="add-animation" onClick={() => {
                        this.props.themGioHang(sp);

                        const counter = document.querySelector('#counter');

                        // const cl = counter.classList;
                        // const c = 'animated-counter';
                        count++;
                        counter.innerText = count;
                        //cl.remove(c, cl.contains(c));
                        //setTimeout(() => counter.classList.add('animated-counter'), 1);
                    }}>
                        Thêm Giỏ Hàng
                    </button>
                </div>
            </div>
        )
    }
}
