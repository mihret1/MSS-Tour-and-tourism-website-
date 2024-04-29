import NavBar from "../components/NavBar"
import img1 from '../assets/h5.jpg'
import img2 from '../assets/s1.jpg'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import c1 from '../assets/client/client1.png'
import c2 from '../assets/client/client2.png'
import c3 from '../assets/client/client3.png'
import c4 from '../assets/client/client4.png'
import c7 from '../assets/client/client7.png'
import c5 from '../assets/client/client5.png'
import c6 from '../assets/client/client6.png'
import c8 from '../assets/client/client8.png'
import c9 from '../assets/client/client9.png'
import c10 from '../assets/client/client10.png'
import c11 from '../assets/client/client11.png'
import c12 from '../assets/client/client12.png'
import s1 from '../assets/setting.jpg'
import t1 from '../assets/t1.jpg'
import inf1 from '../assets/inf.jpg'
import dev2 from '../assets/dev2.jpg'
import con1 from '../assets/con1.jpg'
import tra from '../assets/tra.jpg'

import i1 from '../assets/p/p4.jpg'
import i2 from '../assets/p/p12.jpg'
import i3 from '../assets/p/p11.png'
import i4 from '../assets/p/p10.png'
import i5 from '../assets/p/p5.jpg'
import i6 from '../assets/p/p1.jpg'
import i7 from '../assets/p/p7.jpg'
import i8 from '../assets/p/p3.jpg'
import i9 from '../assets/p/p8.jpg'
import news from '../assets/news.jpg'
import cal1 from '../assets/cal1.png'
import pp from '../assets/pp.jpg'

import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import EventNoteIcon from '@mui/icons-material/EventNote';
import GroupsIcon from '@mui/icons-material/Groups';
import HorizontalRuleSharp from "@mui/icons-material/HorizontalRuleSharp";
import { useState } from "react";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import CircleIcon from '@mui/icons-material/Circle';
// import { IconButton } from "@mui/material";



const Home=()=>{
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };
  var settings2 = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  

  let num=[1,1,1,1,1,1,1,1,1,1,1];
  const [p,setP]=useState(1)
  const [t,setT]=useState(1)

    return(
      <div className="m-0 flex flex-col gap-10">
         {/* part one */}
        <div className="h-[665px] shadow-lg	 bg-gradient-to-br from-[#7457b8]  via-[#d2cbef] via-70%  to-[#7E66B9] "   >
          <NavBar />

          <div className="flex flex-row gap-2 mx-16 pt-16">
            
            <div className="">
              <h2 className="font-bold text-4xl text-white max-sm:text-xl sm:max-lg:text-3xl ">Software-Technology Development </h2>
              <h5 className="font-normal  pl-[30px] pr-[160px] pt-4 text-white text-xl leading-6 max-sm:leading-5  max-sm:pl-1	max-sm:pr-1 max-sm:text-lg sm:max-lg:px-1">Softnet is a technology firm specializing in comprehensive technology training, 
                tailored software development, and end-to-end technology infrastructure solutions.
                Our mission is to provide creative and innovative technology solutions </h5>
              <div className=" flex flex-col gap-3 mx-[160px] max-sm:mx-1 mt-5 sm:max-lg:mx-10">
                <a href='/'><div className="lists bg-gradient-to-r from-[#765ab7] to-white ">Web Development</div></a>
                <a href='/'><div className="lists bg-gradient-to-r from-[#7f62c2] to-white ">Mobile Development</div></a>
                <a href='/'> <div className="lists bg-gradient-to-r from-[#765ab7] to-white">Graphics Designing</div></a>
                <a href='/'><div className="lists bg-gradient-to-r from-[#7e63bf] to-white ">Training</div></a>         
              </div>
          
            </div>

            <img src={img1} className=" w-[500px] h-[400px] mt-10  max-lg:hidden lg:max-xl:w-1/3"/>
          
          </div>

        </div> 
         
         {/* part two */}
        <div className=" flex flex-row px-[2%] py-[2%] shadow-lg gap-5 max-lg:flex-col">
             <img src={img2} className=" w-[53%] max-lg:w-[100%] "/>
             
             <div className=" flex flex-col gap-7 p-4">
                <h1 className="font-bold text-3xl ">WHO WE ARE</h1>
                <span  className="text-[#5c5555]  text-lg  font-semibold ">
                  Softnet is a technology firm specializing in comprehensive technology training, 
                  tailored software development, and end-to-end technology infrastructure solutions.
                 
                </span>
                <div className="flex flex-col">
                  <div> <ArrowRightIcon fontSize="large" sx={{color:'#755BB4'}}/> <span className="text-md font-semibold text-[#5c5555]">Prioritizing your needs</span></div>
                  <div> <ArrowRightIcon fontSize="large" sx={{color:'#755BB4'}}/> <span className="text-md font-semibold text-[#5c5555]" >Better Solutions</span></div>
                  <div> <ArrowRightIcon fontSize="large" sx={{color:'#755BB4'}}/> <span className="text-md font-semibold text-[#5c5555]">comprehensive technology training,</span></div>
                  <div> <ArrowRightIcon fontSize="large" sx={{color:'#755BB4'}}/> <span className="text-md font-semibold text-[#5c5555]">positive impact on people`s lives.</span></div>
                </div>
               <div>
                <button className="px-6  bg-gradient-to-r from-[#784983] to-[#bcabe3] hover:bg-gradient-to-r hover:from-[#bcabe3] hover:to-[#784983] py-2 rounded-md text-white text-lg font-semibold">
                  Read More <ArrowRightAltIcon fontSize="large" />
                </button>
              </div>
             </div>
        
        </div>

         {/* part Three */}
        <div className="flex flex-col gap-4 py-4 items-center rounded-lg shadow-lg bg-[#E9E0FF] mx-[1.1%]">
           <h1 className="text-2xl font-normal">Client</h1>
           <h1 className="text-2xl font-semibold">Brand We Have Empowered</h1>
           <p className="text-center text-lg">Every Brand We Help Attain Sucess  is Success Story For Us Well Too. We Are Greateful to  
                    This Client For Believing in Our Work,Giving Us This Opportunity To Help Them Succeded</p>
          <div className="w-[90%]  max-md:hidden">
             <Slider {...settings} className="">
               <div><img  className="w-32 h-28" src={c1}/></div> 
               <div><img  className="w-32 h-28" src={c2}/></div> 
               <div><img  className="w-32 h-28" src={c9}/></div> 
               <div><img  className="w-32 h-28" src={c4}/></div> 
               <div><img  className="w-32 h-28" src={c5}/></div> 
               <div><img  className="w-32 h-28" src={c12}/></div> 
               <div><img  className="w-32 h-28" src={c7}/></div> 
               <div><img  className="w-32 h-28" src={c8}/></div> 
               <div><img  className="w-32 h-28" src={c3}/></div> 
               <div><img  className="w-32 h-28" src={c10}/></div> 
               <div><img  className="w-32 h-28" src={c11}/></div> 
               <div><img  className="w-32 h-28" src={c6}/></div> 
             </Slider>
          </div>
          <div className="w-[90%] md:hidden px-2">
             <Slider {...settings2} className="">
               <div><img  className="w-32 h-28" src={c1}/></div> 
               <div><img  className="w-32 h-28" src={c2}/></div> 
               <div><img  className="w-32 h-28" src={c9}/></div> 
               <div><img  className="w-32 h-28" src={c4}/></div> 
               <div><img  className="w-32 h-28" src={c5}/></div> 
               <div><img  className="w-32 h-28" src={c12}/></div> 
               <div><img  className="w-32 h-28" src={c7}/></div> 
               <div><img  className="w-32 h-28" src={c8}/></div> 
               <div><img  className="w-32 h-28" src={c3}/></div> 
               <div><img  className="w-32 h-28" src={c10}/></div> 
               <div><img  className="w-32 h-28" src={c11}/></div> 
               <div><img  className="w-32 h-28" src={c6}/></div> 
             </Slider>
          </div>

       
        </div>  
        
          {/* part four */}
        <div className="flex flex-col gap-8  p-5">
          <h1 className="text-3xl font-bold text-center">Our Services</h1>
          
          <div className="flex flex-row gap-5 justify-center">

            <div className="flex flex-row items-center max-md:hidden">
              {num.map((e)=>(<h1><HorizontalRuleSharp /></h1>))}
            </div>
            <img src={s1} className="w-[160px] h-26"/> 
            <div className="flex flex-row items-center max-md:hidden">
              {num.map((e)=>(<h1><HorizontalRuleSharp /></h1>))}
            </div>
          
          </div>

          <div className="grid grid-cols-2 max-md:grid-cols-1 justify-center	px-[2%] gap-y-12 gap-x-24">

            <div className="flex flex-row gap-2">
              <img src={t1} className="w-[110px] h-24"/>
              <div>
                <h1 className="text-xl font-semibold">Technolgy Training</h1>
                <p>From coding to web development,
                   we offer specialized programs for all age groups,
                    starting as young as 10 years old
                </p>
                <a href='/servicedetail' className="text-purple-700  font-semibold">Learn More</a>
              </div>
            </div>

            <div className="flex flex-row gap-2">
              <img src={dev2} className="w-[110px] h-24"/>
              <div>
                <h1 className="text-xl font-semibold">Software Development</h1>
                <p>We craft scalable, secure, and user-friendly
                   software applications to enhance productivity and streamline your business processes
                </p>
                <a href='/servicedetail' className="text-purple-700 font-semibold">Learn More</a>
              </div>
            </div>         

            <div className="flex flex-row gap-2">
              <img src={inf1} className="w-[110px] h-24"/>
              <div>
                <h1 className="text-xl font-semibold">Infrastructure supply and Deployment</h1>
                <p>End-to-end services
                   guaranteeing seamless integration and optimal 
                   performance of your technology infrastructure.
                </p>
                <a href='/servicedetail' className="text-purple-700 font-semibold">Learn More</a>
              </div>
            </div>

            <div className="flex flex-row gap-2">
              <img src={con1} className="w-[110px] h-24"/>
              <div>
                <h1 className="text-xl font-semibold">TInformation Technology outsourcing (ITO)</h1>
                <p>Softnet, your ultimate partner for 
                  outsourced services that redefine excellence. Dive into a realm where professionalism
                </p>
                <a href='/servicedetail' className="text-purple-700 font-semibold">Learn More</a>
              </div>
            </div>
          </div>
        </div>
          
          {/* part five */}
        <div className="flex flex-row max-md:flex-col  gap-16 mt-20 px-[6%] shadow-lg">
          <div className="w-[42%] max-md:w-[100%]"><img src={tra} className="h-[510px] w-[100%]"/></div> 
          <div className="w-[45%] max-md:w-[100%] flex flex-col gap-6">
            <h1 className="text-3xl font-semibold ">Technology Trainings</h1>
            <p className="text-xl  font-semibold md:max-lg:text-lg ">With over 20 years of experience in delivering technology trainings in Ethiopia, 
              Softnet takes pride in providing comprehensive and accessible technology training programs.  </p>
            <h1 className="text-2xl font-semibold">Ourses We Give</h1>
            <div className="flex flex-col text-lg md:max-lg:text-md ">
                  <div> <ArrowRightIcon fontSize="large" sx={{color:'#755BB4'}}/> <span className="text-md font-semibold ">Prioritizing your needs</span></div>
                  <div> <ArrowRightIcon fontSize="large" sx={{color:'#755BB4'}}/> <span className="text-md font-semibold " >Better Solutions</span></div>
                  <div> <ArrowRightIcon fontSize="large" sx={{color:'#755BB4'}}/> <span className="text-md font-semibold ">comprehensive technology training,</span></div>
                  <div> <ArrowRightIcon fontSize="large" sx={{color:'#755BB4'}}/> <span className="text-md font-semibold ">positive impact on people`s lives.</span></div>
            </div>
            <div className="flex flex-row gap-3">
            <button className="px-6 bg-gradient-to-r from-[#784983] to-[#bcabe3] hover:bg-gradient-to-r hover:from-[#bcabe3] hover:to-[#784983] py-2 rounded-md text-white text-lg font-semibold">
                  Register 
            </button>

            <button className="px-6  bg-gradient-to-r from-[#784983] to-[#bcabe3] hover:bg-gradient-to-r hover:from-[#bcabe3] hover:to-[#784983] py-2 rounded-md text-white text-lg font-semibold">
                  Read More 
            </button>
            </div>
          </div>
        </div>
         
         {/* part six */}
        <div className="flex flex-col items-center gap-5 mt-16">
          <h1 className=" text-2xl font-semibold  text-[#755BB4]">What We Have Done So Far?</h1>
          <div className="flex flex-row gap-4 text-lg font-semibold max-md:grid max-md:grid-cols-3 md:max-lg:gap-2 p-2 ">
             <button 
             style={{ ...(p===1 && {backgroundColor:'#755BB4'}) }}
            className="button" 
            onClick={()=>setP(1)}>All</button>
             <button 
              style={{ ...(p===2 && {backgroundColor:'#755BB4'}) }}

             className="button" onClick={()=>setP(2)}>Web</button>
             <button 
             style={{ ...(p===3 && {backgroundColor:'#755BB4'}) }}
             className="button" onClick={()=>setP(3)}>Mobile</button>
             <button 
             style={{ ...(p===4 && {backgroundColor:'#755BB4'}) }}
             className="button" onClick={()=>setP(4)}>Training</button>
             <button 
             style={{ ...(p===5 && {backgroundColor:'#755BB4'}) }}
             className="button" onClick={()=>setP(5)}>Infrustructure</button>
             <button 
             style={{ ...(p===6 && {backgroundColor:'#755BB4'}) }}
             className="button" onClick={()=>setP(6)}>ITO</button>
          </div>
         <div className="w-[70%]">
          
          { ( p===1 || p===3) && <div className=" grid grid-cols-3 max-sm:grid-cols-1  sm:max-ml:grid-cols-2  gap-x-3 gap-y-3 items-center justify-center">
            <img src={i5} className="h-52 w-[400px]"/>
            <img src={i3} className="h-52 w-[350px]"/>
            <img src={i2} className="h-52 w-[400px]"/>
            <img src={i4} className="h-52 w-[350px]"/>
            <img src={i1} className="h-52 w-[400px]"/>   
            <img src={i6} className="h-52 w-[350px]"/>
            <img src={i7} className="h-52 w-[400px]"/>
            <img src={i8} className="h-52 w-[350px]"/>
            <img src={i9} className="h-52 w-[400px]"/> 
          </div>}

          { (p===2 || p===5) && <div className=" grid grid-cols-3 max-sm:grid-cols-1 sm:max-ml:grid-cols-2  gap-x-3 gap-y-3 items-center justify-center">
            <img src={i9} className="h-52 w-[400px]"/>
            <img src={i7} className="h-52 w-[350px]"/>
            <img src={i5} className="h-52 w-[400px]"/>
            <img src={i4} className="h-52 w-[350px]"/>
            <img src={i1} className="h-52 w-[400px]"/>   
            
          </div>}

          { (p===4 || p===6 )&& <div className=" grid grid-cols-3 max-sm:grid-cols-1 sm:max-ml:grid-cols-2  gap-x-3 gap-y-3 items-center justify-center">
            <img src={i8} className="h-52 w-[400px]"/>
            <img src={i3} className="h-52 w-[350px]"/>
            <img src={i2} className="h-52 w-[400px]"/>
            
          </div>}
       
        </div>

        </div>
      
         {/* part seven */}
       <div className="h-72  bg-[#E9E0FF] mx-[6%]  md:max-ml:mx-[2%] pt-5 max-md:h-[650px] ">
           <h1 className="text-2xl pl-5 font-semibold">Success in Number</h1>
          <div className="flex flex-row justify-center gap-4 items-center max-md:flex-col">
           
           <div className=" flex justify-center items-center gap-4 border-4	pl-5 border-[#755BB4] rounded-[50%] w-56 h-44">
              <GroupsIcon  sx={{ fontSize:59 }}/>
              <div className="h-32 w-[2px] bg-[#755BB4]"></div>
              <h1 className=" text-lg font-bold  flex flex-col  "><span className="text-2xl ">20,000</span>Happy Client</h1>
           </div>

           <div className=" flex justify-center items-center gap-4 border-4	pl-4 border-[#755BB4] rounded-[50%] w-56 h-44">
              <EventNoteIcon  sx={{ fontSize:59 }}/>
              <div className="h-32 w-[2px] bg-[#755BB4]"></div>
              <h1 className=" text-lg font-bold  flex flex-col  "><span className="text-2xl ">3000</span>Projects Completed</h1>
           </div>

           <div className=" flex justify-center items-center gap-4 border-4	pl-4 border-[#755BB4] rounded-[50%] w-56 h-44">
              <AccessAlarmsIcon  sx={{ fontSize:59 }}/>
              <div className="h-32 w-[2px] bg-[#755BB4]"></div>
              <h1 className=" text-lg font-bold  flex flex-col  "><span className="text-2xl ">14,000</span>Projects Completed</h1>
           </div>
        </div> 
       </div>
      


      {/* part eight */}
      <div className="flex flex-col justify-center items-center">
        
        <h1 className="font-bold text-2xl">Latest Update</h1>
        <img src={news}/>
        <div className="flex flex-row max-sm:flex-col sm:max-ml:grid sm:max-ml:grid-cols-2 w-[80%]  gap-10">
           <div className="hover:shadow-2xl">
            <a href="/">
            <img src={i5} className="w-[100%]"/>
             <div className="bg-[#E9E0FF] p-3">
              <img src={cal1} className="w-10 h-10"/>
              <p className="text-center font-semibold">
              We are accepting new students starting from January  12, 2024
              </p>
             </div>
            </a>
           </div>

           <div  className="hover:shadow-2xl" >
           <a href="/">
            <img src={i2}  className="w-[100%]"/>
             <div className="bg-[#E9E0FF] p-3">
             <img src={cal1} className="w-10 h-10"/>
             <p className="text-center font-semibold">
             We are Accepting new students starting from January  12, 2024
             </p>
             </div>
             </a>
           </div>

           <div className="hover:shadow-xl">
           <a href="/">
            <img src={i5}  className="w-[100%]"/>
             <div className="bg-[#E9E0FF] p-3">
             <img src={cal1} className="w-10 h-10"/>
             <p className="text-center font-semibold">
             We are accepting new students starting from January  12, 2024
             </p>
             </div>
             </a>
           </div>
        </div>
      
      </div>


     {/* part nine */}
     <div className="flex flex-row gap-8 bg-[#E9E0FF] mx-[3%] h-80 md:max-ml:h-96  xss:max-md:h-[560px]  xs:max-xss:h-[660px]  p-[2%]  max-md:flex-col">
        <div className="w-[40%] max-md:w-[95%]">
          <h1 className="text-3xl font-bold pb-3">Testimonials</h1>
          <p className="text-xl">A testimonial is an honest endorsement of your product or 
            service that usually comes from a customer, colleague, 
            or peer who has benefited from or experienced success as a
             result of the work you did for them.</p>
        </div>
        <div className="bg-white w-[60%] rounded-lg p-5 max-md:w-[95%]">
         
          <div className="flex gap-4">
            <img src={pp}  className=" rounded-full w-16 h-16"/>
            <div className="font-semibold">
              <h1 className="text-xl">Mihiret Desalegn</h1>
              <h1>Store Owner</h1>
            </div>
          </div>
          <div>
           
              <p className=" font-medium ml:px-6 lg:text-base">
              <FormatQuoteIcon color="secondary" fontSize="large"/>

              {(t===1 || t===3) && `Duis autee irure dolor in reprehenderit in voluptate velit esse 
              cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident.Duis aute irure dolor in
              reprehenderit in voluptate velit esse 
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident`}.
              { (t===2 || t===4) && `There are many variations of passages of Lorem Ipsum available,
               but the majority have suffered alteration in some form, 
              by injected humour, or randomised words which don't look even slightly believable. 
              If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't 
              anything embarrassing hidden in the middle of text.` }

               <FormatQuoteIcon color="secondary" fontSize="large"/> </p> 
            
          </div>
          <div className="flex justify-center gap-1 ">
             <button onClick={()=>setT(1)}> <CircleIcon   sx={{fontSize:15, ...(t===1 ? {color:'purple'}:{color:'gray'})}}/></button>
             <button onClick={()=>setT(2)}> <CircleIcon  sx={{fontSize:15,...(t===2 ? {color:'purple'}:{color:'gray'})}}/></button>
             <button onClick={()=>setT(3)}> <CircleIcon sx={{fontSize:15,...(t===3 ? {color:'purple'}:{color:'gray'})}}/></button>
             <button onClick={()=>setT(4)}> <CircleIcon sx={{fontSize:15 ,...(t===4 ? {color:'purple'}:{color:'gray'})}}/></button>
          </div>
            
        </div>
    
     </div>

      </div> 
    )
}

export default Home