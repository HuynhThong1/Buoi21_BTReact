import React, { Component } from 'react'

export default class Cart extends Component {




    renderGioHang = () => {

        //lấy ra hàm xóa

        let { xoaGioHang } = this.props;
        //Nhận giá trị giỏ hàng từ component demoXemChiTiet
        let { gioHang } = this.props;

        let { tangGiamSoLuong } = this.props;

        return gioHang.map((spGH, index) => {
            return <tr key={index}>
                <td>{spGH.maSP}</td>
                <td>{spGH.tenSP}</td>
                <td><img src={spGH.hinhAnh} width={50} height={50} alt="..." /></td>
                <td>{spGH.giaBan.toLocaleString()}</td>
                <td>
                    <button className="btn btn-primary mr-2" onClick={() => {
                        tangGiamSoLuong(spGH.maSP, 1)
                    }}>+</button>
                    {spGH.soLuong}
                    <button className="btn btn-primary ml-2" onClick={() => {
                        tangGiamSoLuong(spGH.maSP, -1)
                    }}>-</button>
                </td>
                <td>{(spGH.soLuong * spGH.giaBan).toLocaleString()}</td>
                <td><button className="ml-auto btn btn-danger" onClick={() => {
                    xoaGioHang(spGH.maSP);
                }}>Xóa</button></td>
            </tr>
        })
    }

    render() {
        return (
            <div>
                <div>
                    {/* Modal */}
                    <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                        <div className="modal-dialog modal-lg" style={{ maxWidth: '1000px' }} role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Giỏ Hàng</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Mã Sản Phẩm</th>
                                                <th>Tên Sản Phẩm</th>
                                                <th>Hình Ảnh</th>
                                                <th>Đơn giá</th>
                                                <th>Số Lượng</th>
                                                <th>Thành Tiền</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.renderGioHang()}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colSpan="5"></td>
                                                <td>Tổng tiền</td>
                                                <td>{this.props.gioHang.reduce((tongTien, spGH, index) => {
                                                    return tongTien += spGH.soLuong * spGH.giaBan;
                                                }, 0).toLocaleString()}</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
