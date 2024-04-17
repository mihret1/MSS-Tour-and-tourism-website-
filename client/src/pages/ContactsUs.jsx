import NavBar from "../components/NavBar"
import s from '../assets/contact/s.png'
import l from '../assets/contact/l.png'
import e from '../assets/contact/e.png'
import { useState } from "react"




function ContactsUs() {
  const [fullname ,setFullname]=useState('')
  const [email ,setEmail]=useState('')
  const [phone ,setPhone]=useState('')
  const [subject,setSubject]=useState('')
  const [comment ,setComment]=useState('')


  return (
    <div>
      <div className="
      bg-gradient-to-br from-[#755BB4] via-[#937DC7] via-49% to-[#846DBC] via-[#BEAFE3] via-77%
      h-[300px]">
        <NavBar />
        <h1 className="text-2xl text-center text-white pt-[140px]"> Contact Us</h1>       
      </div>
      
      <div className=" flex flex-col items-center gap-10 pt-7">
          <h1 className="text-2xl text-center font-semibold">Let`s Start Conversation</h1>
         
          <div className="flex gap-20">
              <div className=" flex flex-col gap-7">
                <div className="flex items-center gap-4">
                  <img src={e} className="h-14 w-14"/>
                  <div className="flex flex-col">
                    <span className="font-semibold text-lg">Email and Phone</span>
                    <span>info@softnetsc.com</span>
                    <span>+251912970734</span>

                  </div>
                </div>
              
                <div className="flex items-center gap-4">
                  <img src={l} className="h-14 w-10 mr-4"/>
                  <div className="flex flex-col">
                    <span className="font-semibold text-lg">Our Location</span>
                    <span>Mexico , Shewa Bakery Bldg. <br/>4th Floor - Infront of K </span>
                    <span>Kare Center</span>
                    <span>Addis Ababa , Ethiopia</span>


                  </div>
                </div>


                <div className="flex items-center gap-4">
                  <img src={s} className="h-14 w-14"/>
                  <div className="flex flex-col">
                    <span className="font-semibold text-lg">Project Inquiry</span>
                    <span>+251(0)15 57 86 57</span>
                    <span>+251(9)77 51 04 51</span>

                  </div>
                </div>
              
              
              </div>

              <div className="flex flex-col gap-3">
          
                <div className="flex flex-col">
                   <span className="text-lg font-serif	">Fullname</span>
                   <input 
                   className="outline-none border-2 w-[350px] bg-[#D9D9D9] p-1" 
                   value={fullname} type="text" onChange={(e)=>setFullname(e.target.value)} />
                </div>

                <div className="flex flex-col">
                   <span className="text-lg font-serif	">Email</span>
                   <input 
                   className="outline-none border-2 w-[350px] bg-[#D9D9D9] p-1" 
                   value={email} type="email" onChange={(e)=>setFullname(e.target.value)} />
                </div>

                <div className="flex flex-col">
                   <span className="text-lg font-serif	">Phone Number</span>
                   <input 
                   className="outline-none border-2 w-[350px] bg-[#D9D9D9] p-1" 
                   value={phone} type="text" onChange={(e)=>setFullname(e.target.value)} />
                </div>

                <div className="flex flex-col">
                   <span className="text-lg font-serif	">Subject</span>
                   <input 
                   className="outline-none border-2 w-[350px] bg-[#D9D9D9] p-1" 
                   value={subject} type="text" onChange={(e)=>setFullname(e.target.value)} />
                </div>

                <div className="flex flex-col">
                   <span className="text-lg font-serif	">Your Comment</span>
                   <textarea 
                   className="outline-none border-2 w-[350px] bg-[#D9D9D9] p-1 h-28" 
                   value={comment} type="text" onChange={(e)=>setFullname(e.target.value)} />
                </div>


              </div>
          </div> 
       
       
        </div>
    </div>
  )
}

export default ContactsUs