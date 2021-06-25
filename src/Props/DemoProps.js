import React, { Component } from 'react';
import Card from './Card';
import CardFunction from './CardFunction';

export default class DemoProps extends Component {


    arrProduct = [
        {id: 1, name:'Iphone 7 plus', price:1000, image:'https://picsum.photos/id/10/200/200'},
        {id: 2, name:'Iphone X', price:2000, image:'https://picsum.photos/id/10/200/200'},
        {id: 3, name:'Iphone Xs ', price:3000, image:'https://picsum.photos/id/10/200/200'},
    ]

    renderProduct = () => {
        return this.arrProduct.map((item, index) => {
            return <div className="col-4" key={index}>
                <CardFunction product={item} />
            </div>
        });
    }
        
    
    render() {
        return (
            <div className="container">
                <h3 className="text-center">Danh Sách sản phẩm</h3>
                <div className="row">
                    {/* <div className="col-4">
                        <Card product={this.arrProduct[0]}></Card>
                    </div>
                    <div className="col-4">
                        <Card product={this.arrProduct[1]}></Card>
                    </div>
                    <div className="col-4">
                        <Card product={this.arrProduct[2]}></Card>
                    </div> */}
                    {this.renderProduct()}
                </div>
            </div>
        )
    }
}
