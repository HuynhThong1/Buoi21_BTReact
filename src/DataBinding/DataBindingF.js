import React from 'react'

export default function DataBindingF() {

    const title = 'CyberSoft';
    const renderImage = () => {
        return <img src="https:picsum.photos/200/200" alt="..."/>
    }
    return (
        <div>
            <p>Tiêu đề: {title}</p>
            {renderImage()}
        </div>
    )
}
