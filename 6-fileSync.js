const {readFileSync,writeFileSync} = require('fs')
const path = require('path')

const firstFile = path.join(__dirname,'/model','first.txt')
const secondFile = path.join(__dirname,'/model','text.txt')
const first = readFileSync(firstFile,'utf8')
const second =  readFileSync(secondFile,'utf8')

writeFileSync('./model/result-file.txt',`So the results are displayed over here : first ${first} second ${second}`,{flag:'a'})
