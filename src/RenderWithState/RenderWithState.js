import React, { Component } from 'react'

export default class RenderWithState extends Component {


    //nằm ngoài hàm và trong lớp đối tượng là thuộc tính
    //thuộc tính là global

    /*
        sự khác biệt của biến và thuộc tính cũng như hàm và phương thức:
        + thuộc tính và phương thức : có thể sử dụng trong những phương thức khác
        + hàm và biến thì chỉ sử dụng được tại nơi khai báo nó thôi

    */


    /* 
        this.state: là thuốc tính có sẵn của react class component.
        Dùng để chứa các giá trị thay đổi trên giao diện khi người dùng thao tác
        (Click, gõ phím, ........)

    */
    state = {
        login: false, 
    };

    
    userName = 'Huynh Minh Thong';//properties


    renderLogin = () => {
        if(this.state.login){
            return <span>{this.userName}</span>
        }
        return <button className="btn btn-outline-default" onClick={() => {
            this.handleLogin();
            console.log('Thong')
        }}>Login</button>
    }

    handleLogin = () => {
        /* this.setState: là phương thức có sẵn của react class component dùng đê thay đổi giá trị state và gọi lại hàm render => giao diện thay đổi  */
        let newState = {
            login: true,
        };
        this.setState(newState);
    }


    render() {

        //trong hàm thì là biến
        //variable là state
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">CyberSoft</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Action 1</a>
                                    <a className="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li>
                        </ul>
                        <div className=" text-white form-inline my-2 my-lg-0">
                            {/* {this.login ? <span>{this.userName}</span> : <button className="btn btn-outline-default">Login</button>} */}
                            {this.renderLogin()}                            
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
