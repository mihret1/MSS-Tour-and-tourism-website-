const {registerTrainer, getTrainer, deleteTrainer, getOneTrainer, updateTrainer}=require('../controller/Traning')

const express=require('express')
const routes=express.Router()

routes.route('/')
      .post(registerTrainer)
      .get(getTrainer)
      
routes.route('/:id')
      .delete(deleteTrainer)
      .get(getOneTrainer)
      .put(updateTrainer)
      


module.exports=routes