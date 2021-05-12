fs=require('fs')


files=fs.readdir(process.argv[2],(err,list)=>{
    err ? console.log(err) : console.log(list.filter(el=>el.includes("."+ process.argv[3])).join('\n'))
})
