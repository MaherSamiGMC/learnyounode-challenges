fs=require('fs')

const mymodule=(x,y,z)=>{
    const path=x
    const ext='.'+y
    fs.readdir(path, (err,data)=>{
        err? z(err): z(null,data.filter(el=>el.includes(ext)))})

}

module.exports=mymodule