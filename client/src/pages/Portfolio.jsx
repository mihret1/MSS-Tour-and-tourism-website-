import NavBar from "../components/NavBar"
import p1 from '../assets/portfolio/p1.jpg'

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



    </div>
  )
}

export default Portfolio