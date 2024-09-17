
const express= require('express')
const mongoose=require('mongoose')

const traningRoute=require('./src/routes/Traning')

const PORT=1000
const URL='mongodb://localhost/softnetRegisteration'

const app=express()
app.use(express.json())

app.get('/',(req,res)=>{res.send('this is home')})
app.use('/traning',traningRoute)

mongoose.connect(URL
        // ,{useNewUrlParser: true,useUnifiedTopology: true,}
          )
        .then(()=>{console.log('db connected')})
        .catch((error)=>console.log(error))
        

app.listen(PORT, ()=>{console.log(`connected on port ${PORT}`)})