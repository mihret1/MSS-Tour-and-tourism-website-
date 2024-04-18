import NavBar from "../components/NavBar"
import about from '../assets/about/abt.webp'
import checkbox from '../assets/about/checkbox.png'
import o from '../assets/about/o.jpg'
import ab from '../assets/about/ab.jpg'
import CircleIcon from '@mui/icons-material/Circle';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';


function AboutUs() {
  return (
    <div>

      <div className="bg-gradient-to-br from-[#755BB4] via-[#937DC7] via-49% to-[#846DBC] via-[#BEAFE3] via-77% h-[300px]">
        <NavBar />
        <h1 className="text-2xl text-center text-white pt-[130px] font-semibold"> About Us</h1>       
      </div>
      
       <div className="flex gap-10 justify-center pt-10 max-ml:flex-col items-center">
        <img src={about} className="w-[40%] max-sm:w-[80%] sm:max-ml:w-[60%] ml:max-lg:w-[50%]"/>
        <div className="flex flex-col gap-3 px-2 w-[40%] max-sm:w-[90%] sm:max-ml:w-[85%] ml:max-lg:w-[50%]">
          <h1 className="text-2xl text-[#7F67BB]">Who We Are</h1>
          <div className="h-[2px] w-[400px] bg-[#7F67BB] max-xss:w-[300px] xss:max-lg:w-[350px]"></div>
          <p className="  text-xl max-sm:text-lg ">
              Softnet is a technology firm specializing in comprehensive technology training,
              tailored software development, and end-to-end technology infrastructure solutions. 
              With over 20 years of experience in delivering technology trainings in Ethiopia, 
              Softnet takes pride in providing comprehensive and accessible technology training programs.
                Our commitment is to empower 
              individuals at all stages of their learning journey, from eager beginners to seasoned experts. 
          </p>
        </div>
       </div>

       <div className="flex gap-10 justify-center pt-28 max-ml:flex-col items-center">
        <div className="flex flex-col items-center gap-3 px-1 w-[40%] max-sm:w-[90%] sm:max-ml:w-[85%] ml:max-lg:w-[50%]">
          <h1 className="text-2xl text-[#7F67BB]">Our Mission</h1>
          <div className="h-[2px] w-[400px] bg-[#7F67BB] max-xss:w-[300px] xss:max-lg:w-[350px]"></div>
          <p className="  text-xl max-sm:text-lg text-center ">
               Our mission is to provide creative and innovative technology solutions that effectively address the challenges 
             of our community, while also ensuring that these solutions are scalable and globally applicable. 
          </p>
        </div> 
        <div className="flex flex-col items-center gap-3 px-1 w-[40%] max-sm:w-[90%] sm:max-ml:w-[85%] ml:max-lg:w-[50%]">
          <h1 className="text-2xl text-[#7F67BB]">Our Vision</h1>
          <div className="h-[2px] w-[400px] bg-[#7F67BB] max-xss:w-[300px] xss:max-lg:w-[350px]"></div>
          <p className="  text-xl max-sm:text-lg text-center">
          Our vision is to be an exceptional and sustainable Ethiopian company that delivers 
          innovative technology solutions that have a significant positive impact on people`s lives.
          </p>
        </div>
       </div>

      <div className="flex flex-col items-center py-14 gap-3 m-14 bg-gradient-to-br from-[#7f64bd] to-[#D9D9D9]">
        <h1 className=" text-2xl font-semibold">What We Do</h1>
        <p className=" text-center text-lg w-[70%] font-semibold max-md:w-[90%] max-sm:text-base" >
             Softnet is a technology firm specializing in comprehensive technology training, 
             tailored software development, and end-to-end technology infrastructure solutions.
        </p>
       
        <div className="flex justify-start gap-20 pt-4 max-md:flex-col  max-sm:gap-10">

          <div className="flex flex-col gap-3">
            <div className="abt"> <img src={checkbox} className="Aimg"/> Software Development</div>
            <div className="abt"> <img src={checkbox} className="Aimg"/> Information Technology outsourcing (ITO)</div>
            <div className="abt"> <img src={checkbox} className="Aimg"/> Technology Trainings</div>
            <div className="abt"> <img src={checkbox} className="Aimg"/> Infrastructure supply and Deployment</div>

          </div>
          
          <div className="flex flex-col gap-3">
            <div className="abt"> <img src={checkbox} className="Aimg"/> Software Development</div>
            <div className="abt"> <img src={checkbox} className="Aimg"/> Information Technology outsourcing (ITO)</div>
            <div className="abt"> <img src={checkbox} className="Aimg"/> Technology Trainings</div>
            <div className="abt"> <img src={checkbox} className="Aimg"/> Infrastructure supply and Deployment</div>

          </div>
        
        </div>


      </div>


      <div className="flex justify-center  items-center gap-1 max-md:flex-col max-md:gap-4">

        <div className="flex flex-col w-[50%] max-md:w-[85%]">
          <h1 className="text-2xl font-semibold">Our Core Values</h1>
          <p className="text-xl ">At TechSolutions, our core values guide everything we do:</p>
         
          <div className="flex gap-3 pt-4 "> 
             <img src={checkbox} className="w-10 h-10"/>
             <div className="font-serif	">
                <h1 className="text-xl font-semibold">Software Development</h1> 
                <p className="text-lg ml:w-[80%] "> We embrace creativity and continuously seek new and better ways to solve problems </p>
             </div>
          </div>

          <div className="flex gap-3 pt-4 "> 
             <img src={checkbox} className="w-10 h-9"/>
             <div className="font-serif	">
                <h1 className="text-xl font-semibold">Software Development</h1> 
                <p className="text-lg  ml:w-[80%]"> We embrace creativity and continuously seek new and better ways to solve problems </p>
             </div>
          </div>
          <div className="flex gap-3 pt-4 "> 
             <img src={checkbox} className="w-10 h-10"/>
             <div className="font-serif	">
                <h1 className="text-xl font-semibold">Software Development</h1> 
                <p className="text-lg ml:w-[80%]"> We embrace creativity and continuously seek new and better ways to solve problems </p>
             </div>
          </div>
          <div className="flex gap-3 pt-4 "> 
             <img src={checkbox} className="w-10 h-10"/>
             <div className="font-serif	">
                <h1 className="text-xl font-semibold">Software Development</h1> 
                <p className="text-lg  ml:w-[80%]"> We embrace creativity and continuously seek new and better ways to solve problems </p>
             </div>
          </div>


         </div>
         <img src={o} className="w-[35%] max-xss:w-[85%] xss:max-sm:w-[70%] sm:max-md:w-[60%] "/>

      </div>

     <div className="flex pt-28 justify-center max-sm:flex-col max-sm:items-center ">
         <img src={ab} className="w-[44%] max-sm:w-[80%]"/>
         <div className="flex flex-col w-[40%] max-sm:w-[80%] pt-14 gap-1 max-sm:items-center">
          <h1 className="text-2xl font-semibold"> What Sets Us Apart</h1>
          <p className="text-xl max-sm:text-center" >
            Our commitment to innovation, client satisfaction,
            and a collaborative
            approach sets us apart. We take pride
            in developing tailor-made solutions that not
            only meet but exceed our clients`expectations
          </p>
         </div>
     </div>

     <div className=" flex flex-row gap-10 justify-center items-center bg-[#F0ECF9] m-10 max-md:flex-col max-sm:mx-2 sm:max-ml:mx-5  py-10">
        <div className="flex flex-col w-[40%]  max-md:w-[80%]  ">
          <h1 className="text-2xl font-semibold">Testimonials</h1>
          <p className="text-lg md:pr-10">
            Ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident.
          </p>
        </div>
        <div className="flex flex-col w-[40%] max-xss:w-[92%]  max-md:w-[80%] md:max-lg:w-[50%] bg-white rounded-2xl py-4 px-5">
          <div className=" flex font-serif items-center gap-2">
            <img src={o} className="w-24 h-24 max-sm:w-20 max-sm:h-20 rounded-full"/>
            <div className="flex flex-col">
              <h2 className="text-xl">Mihiret Desalegn</h2>
              <span className="text-lg">store owner</span>
            </div>
          </div>
          <div>
            <p className="px-7 max-sm:px-3"><FormatQuoteIcon sx={{ fontSize:'36px', color:'#7F007F',  }} /> Duis aute irure dolor in reprehenderit in voluptate velit esse 
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.<FormatQuoteIcon sx={{ fontSize:'36px', color:'#7F007F', marginLeft:3 }}/>
            </p>
          </div>
          <div  className="flex justify-center  ">
           <button> <CircleIcon sx={{ fontSize: 20 ,color:'#C8BEE0'}}/></button>
           <button> <CircleIcon sx={{ fontSize: 20 ,color:'#C8BEE0'}}/></button>
           <button> <CircleIcon sx={{ fontSize: 20,color:'#C8BEE0' }}/></button>
           <button> <CircleIcon sx={{ fontSize: 20 ,color:'#7F007F'}}/></button>
           <button> <CircleIcon sx={{ fontSize: 20,color:'#C8BEE0' }}/></button>

          </div>
        </div>

     </div>

     <div className=" flex flex-col gap-2 items-center">
        <h1 className=" text-2xl font-semibold">Our Technology Stack</h1>
        <div className="text-xl font-semibold flex gap-4">

          <span className="text-[#8A11E9]"> Python,</span>
          <span className="text-[#2FC0C6]"> React.js, </span>
          <span className="text-[#943737]"> Docker ,</span>
          <span className="text-[#1BE023]"> AWS,</span>
          <span className="text-[#EDDC47]">nodejs ,</span>
          <span className="text-[#8A11E9]"> mongodb</span>
          
          </div>
     </div>







    </div>
  )
}

export default AboutUs