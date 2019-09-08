const fs=require('fs');

let Logger = (app) => {
    app.use(async (ctx, next) => {
        let {path,status}=ctx;
        let date=new Date();
        let obj={
            path,
            status,
            date
        }
        //写入日志
        fs.appendFileSync('./middleware/logger.txt',JSON.stringify(obj),'utf-8') 
    })
    
}

module.exports={Logger}