
const express= require('express')
const mongoose=require('mongoose')


const PORT=1000
const URL='mongodb://localhost/softnetRegisteration'

const app=express()

app.get('/',(req,res)=>{res.send('this is home')})

app.listen(PORT, ()=>{console.log(`connected on port ${PORT}`)})