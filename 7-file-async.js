const {readFile,writeFile} = require('fs')
const path = require('path')

const first= path.join(__dirname,'/model','first.txt')
const second = path.join(__dirname,'/model','text.txt')

readFile(first,'utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const firstDoc = result
    readFile(second,'utf8',(err,result1)=>{
        if(err){
            console.log(err);
            return
        }
        const secondDoc=result1
        writeFile('./model/resultfile-async.txt',`So guys funny thing happened ${firstDoc} ${secondDoc}`,
        (err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        })
    })
})