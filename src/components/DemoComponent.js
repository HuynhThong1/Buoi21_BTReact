//Code tạo ra component rcc

import React, { Component } from 'react'

export default class DemoComponent extends Component {

    //phương thức render nội dung giao diện của thẻ
    //nội dung component phải được bao phủ bởi 1 thẻ:: thường dùng thẻ div
    render() {
        return (
            <div className="container">
                <div className="content m-2 p-2 bg-dark text-white">
                    <p className="display-4">Title</p>
                    <p>Content</p>
                </div>
            </div>
        )
    }
}


