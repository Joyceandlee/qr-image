import React, { Component } from 'react';
import axios from 'axios';

export default class Shop extends Component {
    state = {
        list: []
    }
    componentDidMount() {
        let num = Math.floor(Math.random() * (5 - 3)) + 3;

        axios.get(`/home/shop?num=${num}`).then(res => {
            if (res.data.code == 1) {
                this.setState({
                    list: res.data.list
                })
            }
        })
    }
    render() {
        let { list } = this.state;
        console.log(list)
        return (
            <div>
                this is order page
                <div className='shopbox'>
                    {
                        list && list.map((item, index) => {
                            return <div key={item.id}><b>name</b>:{item.name}---<b>id</b>:{item.id}</div>
                        })
                    }
                </div>
            </div>
        )
    }
}
