const fs = require("fs")

function readfile(path){
    fs.readFile(path, 'utf-8', (err , result)=>{
        if(err){
            return
        }
        console.log(result)
    })
}
function readfilesync(path){
   const result = fs.readFileSync(path, 'utf-8')
   return result
}

function writefile(path , text){
    fs.writeFile(path , text ,(err)=>{})
}
function writefilesync(path , text){
    fs.writeFileSync(path , text)
}
module.exports = {readfile , readfilesync, writefile , writefilesync}