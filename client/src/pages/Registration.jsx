import { TextField } from "@mui/material"
import NavBar from "../components/NavBar"
import img1 from '../assets/reg.jpg'
import { useState } from "react"


function Registration() {
  const [fullname,setFullname]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [age,setAge]=useState('')
  const [course,setCourse]=useState('')
  const [site,setSite]=useState('')
  // const [fullname,setFullname]=useState('')


  return (
    <div>
 
         <div className="bg-gradient-to-tr from-[#755BB4] via-[#937DC7] via-49% to-[#846DBC] via-[#BEAFE3] via-77% h-[300px]">
              <NavBar />
              <h1 className="text-center text-white text-2xl font-semibold pt-36"> Registration
             </h1>
         </div>
         <h1 className=" text-2xl text-center py-10 font-serif ">Training Registration</h1>
         <p className="px-[8%] pb-14 font-serif  text-xl">It’s a comprehensive delivery app designed for a wide range of items including goods, electronics, furniture, and more. 
          The App is customized differently for Admins, drivers, and clients’ sides. Once registered </p>
         <div className="flex max-md:flex-col">
              <div className="w-1/2 flex flex-col items-center ml:pl-[5%] max-ml:items-center max-md:w-[80%] ">
                <div className="flex flex-col w-[450px] max-lg:w-[80%]   gap-3 pb-5 ">
                   <span className="text-lg font-serif">FullName</span>
                   <input className="outline-[#d0cadc] bg-[#D9D9D9] h-10"
                   value={fullname} onChange={(e)=>setFullname(e.target.value)} />
                </div>
                <div className="flex flex-col w-[450px] max-lg:w-[80%] gap-3 pb-5 ">
                   <span className="text-lg font-serif">Phone Number</span>
                   <input className="outline-[#d0cadc] bg-[#D9D9D9] h-10"
                   value={fullname} onChange={(e)=>setFullname(e.target.value)} />
                </div>
                <div className="flex flex-col w-[450px] max-lg:w-[80%] gap-3 pb-5 ">
                   <span className="text-lg font-serif">Email</span>
                   <input className="outline-[#d0cadc] bg-[#D9D9D9] h-10"
                   value={fullname} onChange={(e)=>setFullname(e.target.value)} />
                </div>
                <div className="flex flex-col w-[450px] max-lg:w-[80%] gap-3 pb-6 ">
                   <span className="text-lg font-serif">Course</span>
                   <input className="outline-[#d0cadc] bg-[#D9D9D9] h-10"
                   value={fullname} onChange={(e)=>setFullname(e.target.value)} />
                </div>
                  <div className="flex flex-col w-[450px] max-lg:w-[80%] gap-3 pb-6 ">
                   <span className="text-lg font-serif">Age</span>
                   <input className="outline-[#d0cadc] bg-[#D9D9D9] h-10"
                   value={fullname} onChange={(e)=>setFullname(e.target.value)} />
                
                </div>
                  <div className="flex flex-col w-[450px] max-lg:w-[80%] gap-3 pb-6 ">
                   <span className="text-lg font-serif">Site</span>
                   <input className="outline-[#d0cadc] bg-slate-100 h-10"
                   value={fullname} onChange={(e)=>setFullname(e.target.value)} />
                </div>
                  <div className="flex flex-col w-[450px] max-lg:w-[80%] gap-3 pb-6 ">
                   <span className="text-lg font-serif">File</span>
                   <input className="outline-[#a796cb] bg-slate-100 h-10"
                   value={fullname} onChange={(e)=>setFullname(e.target.value)} />
                </div>
                <button className="w-40 rounded-md bg-black py-3 text-white text-lg bg-gradient-to-r from-[#755BB4]  to-[#a493ce] hover:bg-gradient-to-r hover:from-[#a493ce] hover:to-[#755BB4]">Register</button>
              </div>
              <img src={img1} className="w-1/2 ml:h-[600px] max-md:w-[80%] "/>
         </div>
   
   
    </div>

  )
}

export default Registration