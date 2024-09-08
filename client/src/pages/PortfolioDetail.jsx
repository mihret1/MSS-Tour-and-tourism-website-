

import NavBar from "../components/NavBar"
import p1 from '../assets/p/p4.jpg'
import p2 from '../assets/portfolio/p1.jpg'
import p3 from '../assets/portfolio/p2.jpg'
import p4 from '../assets/about/abt.webp'

function PortfolioDetail() {
  return (
   
    <div className="flex flex-col gap-5">

        <div className="bg-gradient-to-br from-[#755BB4] via-[#937DC7] via-49% to-[#846DBC] via-[#BEAFE3] via-77% h-[300px]">
          <NavBar />
          <h1 className="text-2xl text-center text-white pt-[130px] font-semibold"> Portfolio Detail</h1>       
        </div>

       <h1 className="text-2xl text-center font-semibold font-serif pt-16 ">Hulenta mobile App</h1>
       <div className="grid grid-cols-3 justify-items-center gap-x-2 gap-y-2 max-sm:grid-cols-1  sm:max-lg:grid-cols-2">
          <img src={p4} className="w-[400px] h-[250px]"/>
          <img src={p3} className="w-[400px] h-[250px]"/>
          <img src={p1} className="w-[400px] h-[250px]"/>
       </div>

       <div className=" flex pt-24">
         <img src={p2} className=" max-md:w-[90%]  ml:w-[50%]  pl-5"/>  
      </div>

      <p className="text-xl ml:w-[85%] px-5"> 
      It’s a comprehensive delivery app designed for a wide range of items including goods, 
      electronics, furniture, and more. The App is customized differently for Admins, drivers, 
      and clients’ sides. Once registered in the App using their phone numbers and filling out 
      the necessary information, customers will be able to access any service of the company by just 
      logging in to their client account. This platform empowers customers to order and receive products
       with ease and cost-effectiveness and allows them to Stay informed at every step of the delivery 
       process with real-time tracking and accommodates a variety of delivery needs, 
      offering flexibility and convenience from same-day delivery to customized scheduling.
      It’s a comprehensive delivery app designed for a wide range of items including goods, 
      electronics, furniture, and more. The App is customized differently for Admins, drivers, 
      and clients’ sides. Once registered in the App using their phone numbers and filling out 
      the necessary information, customers will be able to access any service of the company by just 
      logging in to their client account.
      </p>


      <h1 className="text-2xl font-bold ml-7 mt-8">Related Portfolio</h1>
     <div className="flex">
        <div className="flex flex-col w-56 items-center">
          <img src={p1}/>
          <span>ERP system</span>
        </div>
        <div className="flex flex-col w-56 items-center">
          <img src={p4}/>
          <span>GoodayOn</span>
        </div> <div className="flex flex-col w-56 items-center">
          <img src={p2}/>
          <span>masenko app</span>
        </div> <div className="flex flex-col w-56 items-center">
          <img src={p3}/>
          <span>food delivery</span>
        </div> <div className="flex flex-col w-56 items-center">
          <img src={p4}/>
          <span>e-learning web</span>
        </div>

     </div>

    </div>
  )
}

export default PortfolioDetail