
const traning=require('../models/Traning')

const registerTrainer=async(req,res)=>{
    const {fullname, email, phone, age , course, photo, site}=req.body
    
      try{
        if (!fullname || !phone || !course || !photo || !site || !age) res.send('enter all required field')
          const registeredTraning= await traning.create({fullname, email, phone, age , course, photo, site})
           res.status(201).json({msg:'u r registerd', registeredTraning})
        }catch(error){

            res.send({error})
     }


}

const getTrainer=async(req,res)=>{
    try{
        const trainer=await traning.find()
        if(!trainer) {res.status(404).send('cant find')}
        res.status(200).json({'your registerd trainer': trainer})
        
    }catch(err){
        res.json(err)
    }

}


const deleteTrainer=async(req,res)=>{
    try{
        const trainer= await traning.findByIdAndDelete(req.params.id)
        res.status(200).json({'deleted trainer':trainer})

    }catch(err){
        res.json(err)
    }


}

const getOneTrainer=async(req,res)=>{

    try{
        const trainer=await traning.findById(req.params.id)
        if(!trainer) res.send('not found')
        res.json(trainer)
    }catch(err){
        res.json(err)

    }

}


const updateTrainer=async(req,res)=>{
    try{
        const datas=req.body
        const updatedTrainer=await traning.findByIdAndUpdate(
            req.params.id,
            datas,
            {new:true}

       )
       if(!updatedTrainer) res.send('not found')
        res.json({msg:'updated!',updatedTrainer})

    }catch(err){
        res.json(err)
    }

}

module.exports={registerTrainer,getTrainer,deleteTrainer,getOneTrainer,updateTrainer}