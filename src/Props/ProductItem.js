import React, { Component } from 'react'

export default class ProductItem extends Component {

    
    render() {

        let {product} = this.props;

        return (
            <div className="card bg-white text-dark">
                <img src={product.image} alt="..." />

                <div className="card-body">
                    <p className="font-weight-bold">{product.name}</p>
                    <p>{product.price} $</p>
                    <button style={{background: '#000', color: 'white', padding: '10px', cursor: 'pointer'}}>Add to cart <i class="fas fa-shopping-cart"></i></button>
                </div>
            </div>
        )
    }
}
