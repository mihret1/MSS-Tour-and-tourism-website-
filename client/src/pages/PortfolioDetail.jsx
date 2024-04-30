

import NavBar from "../components/NavBar"
import p1 from '../assets/p/p4.jpg'
import p2 from '../assets/portfolio/p1.jpg'
import p3 from '../assets/portfolio/p2.jpg'
import p4 from '../assets/about/abt.webp'

function PortfolioDetail() {
  return (
   
    <div>

        <div className="bg-gradient-to-br from-[#755BB4] via-[#937DC7] via-49% to-[#846DBC] via-[#BEAFE3] via-77% h-[300px]">
          <NavBar />
          <h1 className="text-2xl text-center text-white pt-[130px] font-semibold"> Portfolio Detail</h1>       
        </div>

       <h1 className="text-2xl text-center font-semibold font-serif">Hulenta mobile App</h1>
       <div className="grid grid-cols-3 bg-slate-500 justify-center items-center justify-items-center">
          <img src={p4} className="w-[400px] h-[250px]"/>
          <img src={p3} className="w-[400px] h-[250px]"/>
          <img src={p1} className="w-[400px] h-[250px]"/>
       </div>

       <div className=" flex justify-center "><img src={p2} className="w-[700px]"/></div>


    </div>
  )
}

export default PortfolioDetail