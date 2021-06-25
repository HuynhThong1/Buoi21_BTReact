import React from 'react'

//props là thuộc tính chúa giá trị từ component cha (component sử dùng thẻ này) truyền vào
export default function CardFunction(props) {

    const product = props.product;
    
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
