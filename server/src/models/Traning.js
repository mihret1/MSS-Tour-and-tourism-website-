const mongoose=require('mongoose')

const traningSchema= new mongoose.Schema({
     fullname:{
       type: String
     },
     phone:String,
     email:String,
     age:Number,
     course:[String],
     site:String,
     photo:String,
     progres:{
      type:String,
      default:'ongoing'
     }


},{timestamps:true})

const traning=mongoose.model('Traning',traningSchema)
module.exports =traning