import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Navigation from './Navigation';
import Footer from './Footer';

export default class BaiTapComponent extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Header></Header>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <Navigation></Navigation>
                    </div>
                    <div className="col-8">
                        <Content></Content>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Footer></Footer>
                    </div>
                </div>
            </div>
        )
    }
}
