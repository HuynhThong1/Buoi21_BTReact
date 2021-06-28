import React, { Component } from 'react';
import SanPham from './SanPham';
import Cart from './Cart';

export default class DemoXemChiTiet extends Component {

    mangSanPham = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/phone/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/phone/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/phone/applephone.jpg" }
    ]

    state = {
        sanPhamChiTiet: { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/phone/applephone.jpg" },

        gioHang: [
            // { maSP: 1, tenSP: 'IPhone 11 Pro Max', soLuong: 1, giaBan: 1000, hinhAnh: './img/phone/applephone.jpg'}
        ],
    }

    tangGiamSoLuong = (maSP, soLuong) => {
        console.log(maSP, soLuong)

        let gioHangCapNhat = [...this.state.gioHang];

        //kiểm tra sp có trong giỏ hàng k

        let spGH = gioHangCapNhat.find(spGH => spGH.maSP === maSP);

        if(spGH){
            spGH.soLuong += soLuong;

            if(spGH.soLuong < 1){
                alert('số lượng tối thiểu là 1.');
                spGH.soLuong -= soLuong;
                // this.xoaGioHang(maSP);
                // return;
            }
        }

        this.setState({
            gioHang: gioHangCapNhat
        });
    }

    themGioHang = (spClick) => {
        console.log('sanPhamClick', spClick)
        //Thêm thuộc tính số lượng cho sản phẩm click
        // ... spread operator 
        let spGioHang = { ...spClick, soLuong: 1 };

        //khi người đùng click vào => thêm sản phẩm được click vào mảng giỏ hàng.
        let gioHangCapNhat = [...this.state.gioHang];


        //Tìm sản phẩm được click có trong giỏ hàng hay không
        let sp = gioHangCapNhat.find(spGH => spGH.maSP === spGioHang.maSP);

        if (sp) { //spClick có trong giỏ hàng
            sp.soLuong += 1; //tăng số lượng
        }
        else {
            //Thêm sản phẩm được click
            gioHangCapNhat.push(spGioHang);
        }

        console.log('Giỏ hàng sau khi cập nhật', gioHangCapNhat);

        //Chắc chắn hàm này sẽ gọi setState
        this.setState({
            gioHang: gioHangCapNhat
        })
    }


    //Hàm xóa giỏ hàng đặt tại nơi chứa state giỏ hàng
    xoaGioHang = (maSP) => {

        console.log('maSPXoa', maSP)

        //từ mã SP tìm ra SP và xóa

        let gioHangCapNhat = [...this.state.gioHang];

        let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === maSP);

        if(index !== -1){
            gioHangCapNhat.splice(index,1);
        }
        
        // another way delete item
        // gioHangCapNhat = gioHangCapNhat.filter(sp => sp.maSP !== maSP);

        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    renderSanPham = () => {
        return this.mangSanPham.map((sanPham, index) => {
            return <div className="col-4" key={index}>

                <SanPham sp={sanPham} xemChiTiet={this.xemChiTiet} themGioHang={this.themGioHang} ></SanPham>
                {/* <div className="card bg-dark text-white">
                    <img src={sanPham.hinhAnh} alt="..." height={400} />
                    <div className="card-body">
                        <p>{sanPham.tenSP}</p>
                        <p>{sanPham.giaBan.toLocaleString()}</p>
                        <button className="btn btn-success" onClick={() => {
                            this.XemChiTiet(sanPham);
                        }}>Xem Chi Tiết</button>
                    </div>
                </div> */}
            </div>
        })
    }

    xemChiTiet = (sanPhamDuocClick) => {
        //Thay đổi sản phẩm chi tiết trong state bằng sản phẩm được click

        this.setState({
            sanPhamChiTiet: sanPhamDuocClick
        });
    }


    tinhTongSoLuong = () => {
        let tongSoLuong = this.state.gioHang.reduce((tong, spGH, index) => {
            return tong += spGH.soLuong;
        }, 0)
        return tongSoLuong;
    }

    


    render() {

        let { sanPhamChiTiet } = this.state;

        return (
            <div className="container">
                <Cart gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} tangGiamSoLuong={this.tangGiamSoLuong}></Cart>
                <h3>Danh Sách Sản Phẩm</h3>
                <div className="text-right">
                    <span className="btn" data-toggle="modal" data-target="#modelId">Giỏ hàng ({this.tinhTongSoLuong()})</span>
                </div>
                <div className="row">
                    {this.renderSanPham()}
                </div>

                <div className="row mt-5">
                    <div className="col-4 text-center">
                        <h3>{sanPhamChiTiet.tenSP}</h3>
                        <img src={sanPhamChiTiet.hinhAnh} height={300} alt="..." />
                    </div>
                    <div className="col-8">
                        <h3 className="text-center">Thông số kỹ thuật</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Màn hình</th>
                                    <th>{sanPhamChiTiet.manHinh}</th>
                                </tr>
                                <tr>
                                    <th>Hệ điều hành</th>
                                    <th>{sanPhamChiTiet.heDieuHanh}</th>
                                </tr>
                                <tr>
                                    <th>Camera trước</th>
                                    <th>{sanPhamChiTiet.cameraTruoc}</th>
                                </tr>
                                <tr>
                                    <th>Camera sau</th>
                                    <th>{sanPhamChiTiet.cameraSau}</th>
                                </tr>
                                <tr>
                                    <th>Ram</th>
                                    <th>{sanPhamChiTiet.ram}</th>
                                </tr>
                                <tr>
                                    <th>Rom</th>
                                    <th>{sanPhamChiTiet.rom}</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
