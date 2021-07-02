import React, { Component } from 'react';
//import phương thức kết nối với store
import { connect } from 'react-redux';

class GioHangRedux extends Component {

    renderGioHang = () => {
        return this.props.gioHang.map((spGH, index) => {
            return <tr key={index}>
                <td>{spGH.maSP}</td>
                <td>{spGH.tenSP}</td>
                <td><img src={spGH.hinhAnh} alt="..." width={50} height={50} /></td>
                <td>
                    <button className="btn btn-primary mr-2" onClick={() => {
                        //tạo action
                        const action = {
                            type: 'TANG_GIAM_SO_LUONG',
                            maSP: spGH.maSP,
                            soLuong: 1
                        }

                        //Gửi action lên redux
                        this.props.dispatch(action);
                    }}>+</button>
                    {spGH.soLuong}
                    <button className="btn btn-primary ml-2" onClick={() => {
                        //tạo action
                        const action = {
                            type: 'TANG_GIAM_SO_LUONG',
                            maSP: spGH.maSP,
                            soLuong: -1
                        }

                        //Gửi action lên redux
                        this.props.dispatch(action);
                    }}>-</button>
                </td>
                <td>{(spGH.giaBan).toLocaleString()}</td>
                <td>{(spGH.giaBan * spGH.soLuong).toLocaleString()}</td>
                <td><button className="btn btn-danger" onClick={() =>{
                    //Tạo ra action chứa mã sản phẩm được click 

                    const action = {
                        type: 'XOA_GIO_HANG', //type thuộc tính bắt buộc để định nghĩa action
                        maSP: spGH.maSP
                    };

                    //đưa dữ liệu lên reducer = this.props.dispatch

                    this.props.dispatch(action);
                }}>Xóa</button></td>
            </tr>
        })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h3 className="text-right">Giỏ Hàng(0)</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã SP</th>
                            <th>Tên SP</th>
                            <th>Hình Ảnh</th>
                            <th>Số Lượng</th>
                            <th>Giá Bán</th>
                            <th>Thành Tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
                </table>
            </div>
        )
    }
}

//Hàm này sẽ lấy state từ redux về và biến thành props của component
const mapStateToProps = (rootReducer) => {
    // let propsComponent = ;
    return {
        //Tạo ra 1 props tên this.props.gioHang (dữ liệu giá trị của nó lấy từ reducer (store) về)
        gioHang: rootReducer.stateGioHang
    };
}
//Hàm connect nhận input (là component) => trả 1 component mới mang dữ liệu từ store

export default connect(mapStateToProps)(GioHangRedux)
