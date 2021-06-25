import React, { Component } from 'react'

export default class HandleEvent extends Component {

    showMessage = () => {
        alert('123213213213213');
    }

    showTitle = (tenLop) => {
        console.log(`Hello ${tenLop}`)
    }


    render() {
        const name = 'Thongdepzai';


        const handleClick = (event) => {
            document.querySelector('#btnClick').style.backgroundColor = 'cyan';
            alert('Hello Thongdepzai');
        }


        return (
            <div className="container">
                Xử lý sự kiện trong react


                <button className="btn btn-default" id="btnClick" onClick={handleClick}>Click me!!!</button>

                <button className="btn btn-default" id="btnClick" onClick={(event) => {
                    alert(`hello ${name}`);
                    this.showTitle(`FE66`);
                }}>Show Message</button>
            </div>
        )
    }
}
