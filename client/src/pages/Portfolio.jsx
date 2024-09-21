import NavBar from "../components/NavBar"
import p1 from '../assets/portfolio/p1.jpg'
import p2 from '../assets/portfolio/p2.jpg'
import p3 from '../assets/portfolio/p3.jpg'
import p4 from '../assets/portfolio/p4.jpg'
import p5 from '../assets/portfolio/p5.jpg'
import p6 from '../assets/portfolio/p6.jpg'
import p7 from '../assets/portfolio/p7.jpg'

import p8 from '../assets/p/p12.jpg'
import p9 from '../assets/h4.jpg'


function Portfolio() {
  return (
    <div>
       
       <div className="bg-gradient-to-br from-[#755BB4] via-[#937DC7] via-49% to-[#846DBC] via-[#BEAFE3] via-77% h-[300px]">
        <NavBar />
        <h1 className="text-2xl text-center text-white pt-[130px] font-semibold"> Portfolio </h1>       
      </div>

      <div className="flex px-14 max-ml:px-5 gap-6 pt-16 max-md:flex-col">
        
        <img src={p1} className=" w-[40%] max-md:w-[90%]"/>
        <div className=" flex flex-col">
          <h1 className="text-2xl font-semibold font-serif pb-3 pt-5">Welcome to Our Portfolio </h1>
          <p className="text-xl pr-10 max-ml:pr-1">
             At softnet Solutions, we take pride in developing cutting-edge
             software solutions that drive success. Our portfolio showcases a range of projects that
             highlight our expertise, innovation, and the impactful results we deliver for our clients.
             softnet Solutions, we take pride in developing cutting-edge
             software solutions that drive success. Our portfolio showcases a range of projects that
             highlight our expertise
          </p>
        </div>
      
      </div>

     <div className="bg-[#E8E6EC] xl:m-16 max-xl:m-1  mt-32 pb-5 " >
       <h1 className="text-2xl font-semibold text-center pt-14  pb-7">Here are our Amazing Work</h1>
       <div className="grid grid-cols-3 max-sm:grid-cols-1  sm:max-lg:grid-cols-2 max-lg:px-1  justify-center items-center gap-y-10 lg:max-xl:px-5 px-[8%]   justify-items-center	">
         <div className="w-[310px] flex flex-col items-center text-center bg-white ">
              <img src={p3} className="w-[310px] h-[220px]"/>
              <h1 className=" text-xl font-semibold">Hulenta App</h1>
              <h2 className="text-[#755BB4] text-lg font-semibold">Web Development</h2>
              <p1 >It’s a comprehensive delivery app designed
                 for a wide range of items including goods, electronics, furniture, and more.
              </p1>
              <button className=" text-[#755BB4] text-lg font-semibold ">
                 <a href="/portfoliodetail">Detail</a>
              </button>
         </div>
         <div className="w-[310px] flex flex-col items-center text-center bg-white">
              <img src={p4} className="w-[310px] h-[220px]"/>
              <h1 className=" text-xl font-semibold">Hulenta App</h1>
              <h2 className="text-[#755BB4] text-lg font-semibold">Web Development</h2>
              <p1 >It’s a comprehensive delivery app designed
                 for a wide range of items including goods, electronics, furniture, and more.
              </p1>
              <button className=" text-[#755BB4] text-lg font-semibold ">
              <a href="/portfoliodetail">Detail</a>
              </button>
         </div>
         <div className="w-[310px] flex flex-col items-center text-center bg-white">
              <img src={p5} className="w-[310px] h-[220px]"/>
              <h1 className=" text-xl font-semibold">Hulenta App</h1>
              <h2 className="text-[#755BB4] text-lg font-semibold">Web Development</h2>
              <p1 >It’s a comprehensive delivery app designed
                 for a wide range of items including goods, electronics, furniture, and more.
              </p1>
              <button className=" text-[#755BB4] text-lg font-semibold ">
              <a href="/portfoliodetail">Detail</a>
              </button>
         </div>
         <div className="w-[310px] flex flex-col items-center text-center bg-white">
              <img src={p6} className="w-[310px] h-[220px]"/>
              <h1 className=" text-xl font-semibold">Hulenta App</h1>
              <h2 className="text-[#755BB4] text-lg font-semibold">Web Development</h2>
              <p1 >It’s a comprehensive delivery app designed
                 for a wide range of items including goods, electronics, furniture, and more.
              </p1>
              <button className=" text-[#755BB4] text-lg font-semibold bg-white">
              <a href="/portfoliodetail">Detail</a>
              </button>
         </div>
         <div className="w-[310px] flex flex-col items-center text-center bg-white">
              <img src={p2} className="w-[310px] h-[220px]"/>
              <h1 className=" text-xl font-semibold">Hulenta App</h1>
              <h2 className="text-[#755BB4] text-lg font-semibold">Web Development</h2>
              <p1 >It’s a comprehensive delivery app designed
                 for a wide range of items including goods, electronics, furniture, and more.
              </p1>
              <button className=" text-[#755BB4] text-lg font-semibold ">
              <a href="/portfoliodetail">Detail</a>
              </button>
         </div>
         <div className="w-[310px] flex flex-col items-center text-center bg-white">
              <img src={p7} className="w-[310px] h-[220px]"/>
              <h1 className=" text-xl font-semibold">Hulenta App</h1>
              <h2 className="text-[#755BB4] text-lg font-semibold">Web Development</h2>
              <p1 >It’s a comprehensive delivery app designed
                 for a wide range of items including goods, electronics, furniture, and more.
              </p1>
              <button className=" text-[#755BB4] text-lg font-semibold ">
              <a href="/portfoliodetail">Detail</a>
              </button>
         </div>
       </div>
       <div className="flex gap-2 justify-center pt-5">
          <button className="rounded-full border-2 border-black w-7">1</button>
          <button className="rounded-full border-2 border-black w-7 font-bold bg-[#755BB4]">2</button>
          <button className="rounded-full border-2 border-black w-7">3</button>
       </div>
        
     </div>

      <h1 className="text-2xl font-bold text-center pt-24">Some of Our Projects and Case Studies</h1>
      <div className="flex px-14 max-ml:px-5 gap-6 pt-10 max-md:flex-col ">        
        <div className=" flex flex-col">
          <h1 className="text-xl font-semibold font-serif pb-3 pt-5">Project 1: Streamlining E-Commerce Operations </h1>
          <p className="text-xl pr-10 max-ml:pr-1">
             In this project, we optimized the client`s` e-commerce platform, resulting in a 30% increase in sales and improved user experience.
             software solutions that drive success. Our portfolio showcases a range of projects that
             highlight our expertise
          </p>
        </div>
        <img src={p2} className=" w-[40%] max-md:w-[90%] "/>      
      </div>


      <div className="flex px-14 max-ml:px-5 gap-6 pt-24 max-md:flex-col">
        
        <img src={p8} className=" w-[38%] max-md:w-[80%] h-[220px]"/>
        <div className=" flex flex-col">
          <h1 className="text-2xl font-semibold font-serif pb-3 pt-5">Project 3: food delivery mobile application</h1>
          <p className="text-xl pr-10 max-ml:pr-1">
            In this project, we optimized the client`s 
            e-commerce platform, resulting in a 30% increase in sales and improved user experience.
          </p>
        </div>
      
      </div>


      <div className="flex px-14 max-ml:px-5 gap-3 pt-24 max-md:flex-col ">        
        <div className=" flex flex-col">
          <h1 className="text-xl font-semibold font-serif pb-3 pt-16">Project 4: Blockchain Integration for Supply Chain</h1>
          <p className="text-xl pr-10 max-ml:pr-1">
          We successfully implemented blockchain technology to enhance 
          transparency and traceability in our client`s supply chain, reducing 
          inefficiencies and minimizing errors.
          </p>
        </div>
        <img src={p9} className=" w-[50%] max-md:w-[90%]  "/>      
      </div>

    </div>
  )
}

export default Portfolio