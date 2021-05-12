
console.log(process.argv.reduce((a,b,i)=>i>1 && Number(a)+Number(b)))