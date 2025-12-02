import express from 'express'
import { fork } from 'child_process';


const app = express()


app.get("/compleja",(req,res)=>{
    const child = fork('./src/compleja.js')
    child.send("")
    child.on("compleja",result =>{
        console.log(result)
        res.send(result)
    })
    })


app.get("/",(req,res)=>{
     res.send("ok")
 })



app.listen(8080,()=> console.log("server in port 8080 "))