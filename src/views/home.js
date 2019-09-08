import React, { Component } from 'react';
import {Switch,NavLink,Route} from 'react-router-dom';
import Shop from './Shop';
import QrCode from './qrCode';
import '../css/home.css'

export default class Home extends Component {
    render() {
        return (
            <div>
                <NavLink to="/home/shop">生成订单</NavLink>
                <NavLink to="/home/qrCode">生成二维码</NavLink>
                <Switch>
                    <Route path="/home/shop" component={Shop}></Route>
                    <Route path="/home/qrCode" component={QrCode}></Route>
                </Switch>
            </div>
        )
    }
}
