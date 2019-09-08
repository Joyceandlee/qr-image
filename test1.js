const Mock = require('mockjs');
let list = [];

process.on('message', data => {
    for (var i = 0; i < data; i++) {
        let obj = Mock.mock({
            'id': Mock.Random.guid(),
            'name': '@NAME'
        })
        list.push(obj)
    }
    process.send(list)
})

