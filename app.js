const Koa = require('koa');
const app = new Koa();
const {configRouter} = require('./index.js');
const {Logger}=require('./middleware/index.js');

//接口
configRouter(app)
//日志
Logger(app)

app.listen(8080, () => {
    console.log("server is running at port 8080")
})