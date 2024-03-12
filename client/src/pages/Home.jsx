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

import HorizontalRuleSharpIcon from '@mui/icons-material/HorizontalRuleSharp';
import HorizontalRuleSharp from "@mui/icons-material/HorizontalRuleSharp";

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
  
    return(
      <div className="m-0 flex flex-col gap-10">

        <div className="h-[665px] shadow-lg	 bg-gradient-to-br from-[#7457b8]  via-[#d2cbef] via-70%  to-[#7E66B9] "   >
          <NavBar />

          <div className="flex flex-row gap-2 mx-16 pt-16">
            
            <div className="">
              <h2 className="font-bold text-4xl text-white max-sm:text-xl sm:max-lg:text-3xl ">Software-Technology Development </h2>
              <h5 className="font-normal  pl-[30px] pr-[160px] pt-4 text-white text-xl leading-6 max-sm:leading-5  max-sm:pl-1	max-sm:pr-1 max-sm:text-lg sm:max-lg:px-1">Softnet is a technology firm specializing in comprehensive technology training, 
                tailored software development, and end-to-end technology infrastructure solutions.
                Our mission is to provide creative and innovative technology solutions </h5>
              <div className=" flex flex-col gap-3 mx-[160px] max-sm:mx-1 mt-5 sm:max-lg:mx-10">
                <div className="w-[280px] h-[60px] bg-gradient-to-r from-[#9a87d2] to-[#eeecf4]  rounded-lg text-center text-xl	py-4 font-semibold ">Web Development</div>
                <div className="w-[280px] h-[60px] bg-gradient-to-r from-[#7f62c2] to-white rounded-lg  text-center text-xl	py-4 font-semibold ">Mobile Development</div>
                <div className="w-[280px] h-[60px] bg-gradient-to-r from-[#765ab7] to-white rounded-lg text-center text-xl	py-4 font-semibold">Graphics Designing</div>
                <div className="w-[280px] h-[60px] bg-gradient-to-r from-[#7e63bf] to-white rounded-lg text-center text-xl	py-4 font-semibold">Training</div>           
              </div>
          
            </div>

            <img src={img1} className=" w-[500px] h-[400px] mt-10  max-lg:hidden lg:max-xl:w-1/3"/>
          
          </div>

        </div> 

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
       
       <div className="flex flex-col gap-8 shadow-lg p-5">
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
                <a href='/service' className="text-purple-700  font-semibold">Learn More</a>
              </div>
            </div>

            <div className="flex flex-row gap-2">
              <img src={dev2} className="w-[110px] h-24"/>
              <div>
                <h1 className="text-xl font-semibold">Software Development</h1>
                <p>We craft scalable, secure, and user-friendly
                   software applications to enhance productivity and streamline your business processes
                </p>
                <a href='/service' className="text-purple-700 font-semibold">Learn More</a>
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
                <a href='/service' className="text-purple-700 font-semibold">Learn More</a>
              </div>
            </div>

            <div className="flex flex-row gap-2">
              <img src={con1} className="w-[110px] h-24"/>
              <div>
                <h1 className="text-xl font-semibold">TInformation Technology outsourcing (ITO)</h1>
                <p>Softnet, your ultimate partner for 
                  outsourced services that redefine excellence. Dive into a realm where professionalism
                </p>
                <a href='/service' className="text-purple-700 font-semibold">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      
      </div> 
    )
}

export default Home