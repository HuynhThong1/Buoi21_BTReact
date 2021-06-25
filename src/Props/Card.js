import React, { Component } from 'react'

export default class Card extends Component {
    render() {


        //so sánh sự khác biệt giữa this.state và this.props

        /* 
            Giống nhau:
                đều là thuộc tính có sẵn của react class component để chứa các giá trị cần render ra giao diện
            Khác nhau:
                state dùng để chứa các giá trị thay đổi khi người dùng thao tác trên giao diện
                STATE CÓ THỂ GÂN GIÁ TRỊ BẰNG GET STATE
                props dùng để nhận giá trị từ component cha truyền vào.
                PROPS KO THỂ GÁN GÁI TRỊ.




        */

        //this.props: là thuộc tính có sẵn của react class component


        let tenSanPham = this.props.tenSanPham;
        let gia = this.props.gia;

        let product = this.props.product;

        return (
            <div className="card bg-dark text-white">
                <img src={product.image} alt="..." />

                <div className="card-body">
                    <p className="font-weight-bold">Tên sản phẩm: {product.name}</p>
                    <p>Giá: {product.price}</p>
                </div>
            </div>
        )
    }
}
