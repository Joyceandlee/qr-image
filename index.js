const { fork } = require('child_process');
const url = require('url');
const fs = require('fs')


let configRouter = (app) => {
    app.use(async (ctx, next) => {
        let path = url.parse(ctx.request.url)
        console.log(path)
        let { num } = ctx.query;
        if (path.pathname === '/home/shop') {
            console.log('/home/shop')
            createWorker = () => {
                return new Promise((resolve, reject) => {
                    let worker1 = fork('./test1.js')
                    let getnum = num;
                    worker1.send(getnum)
                    worker1.on('message', (data) => {
                        resolve(data)
                        fs.writeFileSync('./data.json', JSON.stringify(data))
                        worker1.kill()
                    })
                })
            }

            let list = await createWorker()
            ctx.body = {
                code: 1,
                msg: 'path /shop success',
                list
            }
        }
        await next()
    })

    app.use(async (ctx, next) => {
        let path = url.parse(ctx.request.url).pathname;
        if (path === '/home/qrcode') {
            console.log('/home/qrcode')
            let datajson = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
            createWorker = () => {
                return new Promise((resolve, reject) => {
                    let worker2 = fork('./test2.js');
                    worker2.send(datajson)
                    worker2.on('message', data => {
                        resolve(data)
                    })
                })
            }
            let qrlist = await createWorker();
            ctx.body = {
                code: 1,
                msg: 'path /qrCode success',
                qrlist
            }
        }
        await next()
    })
}

module.exports = { configRouter }