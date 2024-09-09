import NavBar from "../components/NavBar"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import img1 from '../assets/bd1.jpg'
import img2 from '../assets/p/p2.jpg'
import img3 from '../assets/p/p9.jpg'
import img4 from '../assets/p/p7.jpg'
import img5 from '../assets/p/p5.jpg'

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CommentIcon from '@mui/icons-material/Comment';
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { TextField } from "@mui/material";

const BlogDetail=()=>{
    const [blog,setBlog]=useState('')
    const [commentt,setComment]=useState('')

    const Carde=(props)=>{
        return(
            <div className="flex h-28  gap-2 items-center border-b-2 pb-4">
              <img src={props.img} className="h-24 w-1/4 rounded-md"/>
              <div className="flex flex-col justify-items-center  w-3/4">
                <time className="text-lg font-serif ">{props.datee}</time>
                <p className="text-xl font-semibold max-xss:text-lg">{props.desc}</p>
              </div>
            </div>
        )
    }

      const  Carde2=(props)=>{
        return(
            
            <div className="flex flex-col shadow-md shadow-slate-600 w-1/3 max-sm:w-[80%] pb-4  h-[320px]">
                <a href="/"><img src={props.img} className="h-44 w-[100%]"/></a>
                <time className="text-lg font-serif px-1">{props.datee}</time>
                <h1 className="text-lg font-semibold pl-1 hover:text-[#755BB4] "><a href="/">{props.title}</a></h1>
            </div>
        )
    }
    return (
        <div>
           <div className="bg-gradient-to-tr from-[#755BB4] via-[#937DC7] via-49% to-[#846DBC] via-[#BEAFE3] via-77% h-[300px]">
            <NavBar />
            <h1 className="text-center text-white text-xl font-semibold pt-32"> Latest News <ArrowForwardIosIcon /> Technology for all
            </h1>
           </div>
           <div className="flex p-16 max-md:px-5 gap-10  max-lg:flex-col"> 
             <div className=" w-3/5 flex flex-col gap-2 max-lg:w-[95%] border-2 p-2">
                     <img src={img1} className="w-[100%] h-[440px] max-sm:h-[250px]"/>
                    <div className="flex items-center gap-10 pl-5 pt-2">
                        <time className='text-lg font-serif '><CalendarMonthIcon sx={{ color:'#755BB4' }} /> mar, 9/2023</time>
                       <span className="font-serif"> <CommentIcon  sx={{ color:'#755BB4' }} />
                          <a href="/">Comments</a>
                        </span>
                    </div> 
                    <h1 className="text-2xl">In publishing and graphic design,</h1>
                    <p className="text-lg">
                    Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
                    Lorem ipsum may be used as a placeholder before the final copy is available.
                    </p>
                    
                    <h1 className="text-2xl pt-4">In publishing and graphic design,</h1>
                    <p className="text-lg">
                    Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
                    Lorem ipsum may be used as a placeholder before the final copy is available.
                    </p>

                    <div className="px-8">
                        <ul style={{ listStyleType: 'disc'  }}>
                            <li>software development</li>
                            <li>software development</li>
                            <li>software development</li>
                            <li>software development</li>
                            <li>software development</li>

                        </ul>
                    </div>
                    
                    <h1 className="text-2xl pt-3">In publishing and graphic design,</h1>
                    <p className="text-lg">
                    Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
                    Lorem ipsum may be used as a placeholder before the final copy is available.
                    </p>
                    <p className="text-lg pt-4">
                    Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
                    Lorem ipsum may be used as a placeholder before the final copy is available.
                    </p>
                    <p className="text-lg pt-5">
                    Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
                    Lorem ipsum may be used as a placeholder before the final copy is available.
                    </p>

                    <div className="flex flex-col gap-3 pt-10">
                        <h1 className="text-2xl">Write Your Comment</h1>
                        
                        <div className=" flex max-sm:flex-col gap-4 justify-between">
                           <div className=" w-1/2  max-sm:w-[90%] "><TextField sx={{ width:'100%', outlineColor:'red' }}  placeholder="your name..."/> </div> 
                           <div className="  w-1/2 max-sm:w-[90%]">  <TextField sx={{ width:'100%' }}  placeholder="email..."/></div> 
                        </div>
                        <textarea
                        className="border-2  outline-[#9e88d1]"

                          rows='8'  
                          value={commentt} 
                           onChange={(e)=>setComment(e.target.value)}
                          /> 
                          <button className="w-32 bg-gradient-to-r from-[#755BB4]  to-[#a493ce] hover:bg-gradient-to-r hover:from-[#a493ce] hover:to-[#755BB4] text-white text-lg px-5 py-3">Submit</button>
                    </div>

                    <div>
                     <h1 className="text-2xl font-bold pt-7 pb-4 max-sm:text-center">Related Blog</h1>
                     <div className="flex  gap-3 max-sm:flex-col  justify-center items-center ">
                        <Carde2  
                        datee='october 6,2023'
                        img={img2}
                        title='The integration of WhatsApp for order inquiries 
                        '
                        />

                        <Carde2 
                        datee='march 23,2021'
                        img={img3}
                        title='The integration of for order inquiries   .
                        '
                        />
                        <Carde2  
                        datee='june 3,2024'
                        img={img4}
                        title='The integration of  the no WhatsApp for order inquiries  .
                        '
                        />
                       
                    </div>
                    
                    </div>



             </div>

             <div className=" w-2/5 max-lg:w-[95%] ">
               <div className="flex">
                <input 
                type="text" 
                onChange={(e)=>setBlog(e.target.value)} 
                value={blog} placeholder="Search Blog"
                style={{ outline:'none' }} 
                className="border-2 border-r-0 border-[#846DBC] rounded-l-full  py-3 w-[300px] h-14 pl-4 text-left"/>
                 <button><div className="rounded-r-full  border-2 border-[#846DBC] w-24 h-14 bg-gradient-to-l from-[#583aa4] to-[#9784c9] hover:bg-gradient-to-l hover:from-[#9784c9] hover:to-[#583aa4] flex items-center justify-center "> <SearchIcon sx={{color:'white', fontSize:35}}/> </div></button>
               </div>
               <div>
                    <h1 className="text-2xl font-bold pt-7 pb-4">Recent Posts</h1>
                    <div className="flex flex-col gap-5 ">
                        <Carde  
                        datee='october 6,2023'
                        img={img2}
                        desc='The integration of WhatsApp for order inquiries streamlines the  .
                        '
                        />

                        <Carde  
                        datee='october 6,2023'
                        img={img3}
                        desc='The integration of WhatsApp for order inquiries streamlines the  .
                        '
                        />
                        <Carde  
                        datee='october 6,2023'
                        img={img4}
                        desc='The integration of WhatsApp for order inquiries streamlines the  .
                        '
                        />
                        <Carde  
                        datee='october 6,2023'
                        img={img5}
                        desc='The integration of WhatsApp for order inquiries streamlines the  .
                        '
                        />
                    </div>
                    <div className="flex flex-col pt-10 px-10">
                        <h1 className="text-2xl font-semibold pb-6">Catagories</h1>
                        <div className="flex justify-between text-lg border-b-2 pb-2 pt-2 "><span><a href="/" className="hover:text-[#846DBC]">Web Development</a></span><span>(4)</span></div>
                        <div className="flex justify-between text-lg border-b-2 pb-2 pt-2"><span><a href="/" className="hover:text-[#846DBC]">Graphic Design</a></span><span>(1)</span></div>
                        <div className="flex justify-between text-lg border-b-2 pb-2 pt-2"><span><a href="/" className="hover:text-[#846DBC]">Digital Marketing</a></span><span>(3)</span></div>
                        <div className="flex justify-between text-lg border-b-2 pb-2 pt-2"><span><a href="/" className="hover:text-[#846DBC]">App Development</a></span><span>(5)</span></div>
                        <div className="flex justify-between text-lg border-b-2 pb-2 pt-2"><span><a href="/" className="hover:text-[#846DBC]">Corprate Business</a></span><span>(12)</span></div>
                        <div className="flex justify-between text-lg border-b-2 pb-2 pt-2"><span><a href="/" className="hover:text-[#846DBC]">Web Development</a></span><span>(7)</span></div>

                    </div>
               </div>
               
             </div>
          </div>
        </div>
    )
}

export default BlogDetail