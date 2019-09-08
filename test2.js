const qr = require('qr-image');
// let qrlist = [];

process.on('message', (data) => {
    // console.log(data[0])
    data.map((item, index) => {
        var qr_svg = qr.imageSync(item.name, { type: 'svg' });
        item.qr_svg=qr_svg;
    })
    process.send(data)
})