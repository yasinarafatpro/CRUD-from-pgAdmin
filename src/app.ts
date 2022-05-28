const express=require('express')
import { db } from '../index'
import productController from './Controller/ProductController'
import UserController from './Controller/UserController'
import { productValidator } from './Validator/ProductValidator'
import UserValidator from './Validator/UserValidator'
const app=express()
const cookieParser=require('cookie-parser')
app.use(express.json())
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send('Home Page')
    res.end();
})
app.get('/item',async(req,res)=>{
    try {
        const result=await db.many("SELECT * FROM item;")
        return res.status(201).json(result)
    } catch (error:any) {
        return res.status(203).json({message:error.message ? error.message :"Something want wrong"})
    }
})
app.get('/product',async(req,res)=>{
    try {
        const result=await db.many('SELECT * FROM product;')
        return res.status(201).json(result)
    } catch (error:any) {
        return res.status(203).json({message:error.message ? error.message : "Something went wrong"})
    }
})
app.get('/user',async(req,res)=>{
    try {
        const result=await db.many('SELECT * FROM "user";')
        return res.status(201).json(result)
    } catch (error:any) {
        return res.status(203).json({message:error.message ? error.message : "Something went wrong"})
    }
})

app.post('/user',UserValidator,UserController)
app.post('/product',productValidator,productController)

export default app;