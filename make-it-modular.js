const mymodule=require('./mymodule')

mymodule(process.argv[2],process.argv[3], callBack=(err,data)=>{
    err? console.error(err): console.log(data.join('\n'))
})