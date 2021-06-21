import React, { Component } from 'react'

export default class DataBinding extends Component {

    product = {
        id: 1,
        name: 'Iphone X',
        price: 1000,
        img: 'https://picsum.photos/200/200'
    }

    renderProduct = () => {
        return <div>
            <div className="w-100 mt-2">
                <div className="card">
                    <img src={this.product.img} alt="hình" />
                    <div className="card-body">
                        <p>{this.product.name}</p>
                        <p>{this.product.price}</p>
                    </div>
                    <div className="card-footer bg-dark text-white">
                        <button className="btn btn-success">Buy</button>
                    </div>
                </div>
            </div>
        </div>
    }

    render() {
        let hoTen = 'Nguyen Van A'
        let product = {
            id: 1,
            name: 'Iphone X',
            price: 1000,
            img: 'https://picsum.photos/200/200'
        }
        return (
            <div className="container">
                <p>Họ Tên: {hoTen}</p>

                <div className="row">
                    <div className="col-4">
                        <div className="w-100 mt-2">
                            <div className="card">
                                <img src={product.img} alt="hình" />
                                <div className="card-body">
                                    <p>{product.name}</p>
                                    <p>{product.price}</p>
                                </div>
                                <div className="card-footer bg-dark text-white">
                                    <button className="btn btn-success">Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        {this.renderProduct()}
                    </div>

                    <div className="col-4">
                        {this.renderProduct()}
                    </div>
                </div>




            </div>
        )
    }
}
