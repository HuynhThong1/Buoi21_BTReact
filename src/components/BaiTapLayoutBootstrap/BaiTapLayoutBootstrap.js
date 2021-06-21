import React, { Component } from 'react';
import BTHeader from './BTHeader';
import BTBanner from './BTBanner';
import BTItem from './BTItem';
import BTFooter from './BTFooter';

export default class BaiTapLayoutBootstrap extends Component {
    render() {
        return (
            <div className="container-fluid pl-0 pr-0">
                <BTHeader></BTHeader>
                <BTBanner></BTBanner>
                <BTItem></BTItem>
                <BTFooter></BTFooter>
            </div>
        )
    }
}
