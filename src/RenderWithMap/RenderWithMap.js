import React, { Component } from 'react'

export default class RenderWithMap extends Component {


    arrProduct = [
        { id: 1, name: 'iphone', price: 1000, img: 'https://picsum.photos/id/10/200/200' },
        { id: 2, name: 'iphone X', price: 2000, img: 'https://picsum.photos/id/20/200/200' },
        { id: 3, name: 'iphone XS', price: 3000, img: 'https://picsum.photos/id/30/200/200' },
        { id: 4, name: 'iphone XS Max', price: 4000, img: 'https://picsum.photos/id/40/200/200' },]



    renderProduct = () => {

        //cách 1:
        // let arrTagProduct = [];

        // for(let i = 0; i< this.arrProduct.length; i++){
        //     let product = this.arrProduct[i];
        //     let tagJSX = <tr>
        //         <td>{product.id}</td>
        //         <td>{product.name}</td>
        //         <td>{product.price}</td>
        //         <td><img width={50} height={50} src={product.img} alt="..." /></td>
        //     </tr>;
        //     arrTagProduct.push(tagJSX);
        // }

        // return arrTagProduct;


        //Cách 2: sử dụng map

        return  this.arrProduct.map((product, index) => {
            return <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td><img width={50} height={50} src={product.img} alt="..." /></td>
            </tr>;
        });

        //return arrResult;
    }

    render() {
        return (
            <div className="container">
                <h3>Danh Sách sản phẩm</h3>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã SP</th>
                            <th>Tên SP</th>
                            <th>Giá SP</th>
                            <th>Hình Ảnh</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderProduct()}
                    </tbody>
                </table>
            </div>

        )
    }
}
