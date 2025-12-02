import express from 'express'
import { options } from './utils/commander.js'
import dotenv from 'dotenv'
import { createFakerProducts, createFakerUsers } from './utils/faker/ecommerce.js'


dotenv.config()

const app = express()

app.get("/fackerProducts/:number",(req,res)=>{
    const { number } = req.params
    const products = createFakerProducts(number)
    res.json(products)
})

app.get("/fackerUsers/:number",(req,res)=>{
    const { number } = req.params
    const users = createFakerUsers(number)
    res.json(users)
})

app.listen(process.env.PORT,()=> console.log("server in port " + process.env.PORT))