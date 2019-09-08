import React, { Component } from 'react'

export default class QrCode extends Component {
    state = {
        svgurl: []
    }
    componentDidMount() {
        fetch('/home/qrcode')
            .then(res => res.json())
            .then(data => {
                if (data.code == 1) {
                    let arr = [];
                    data.qrlist.map((item, index) => {
                        arr.push(item.qr_svg)
                    })
                    this.setState({
                        svgurl: arr
                    })
                }
            })
    }
    render() {
        let { svgurl } = this.state;
        return (
            <div>
                this is qrcode page
                {
                    svgurl.length && svgurl.map((item,index)=>{
                        return <div dangerouslySetInnerHTML={{__html:item}} key={index}></div>
                    })
                }
            </div>
        )
    }
}
