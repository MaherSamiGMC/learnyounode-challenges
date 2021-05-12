const bl=require('bl')
const http=require('http')

http.get(process.argv[2],(response)=>{
    response.pipe(bl((err,data)=>{
        err? console.error(err) : console.log(data.toString().split('').length),console.log(data.toString())
    }))
})