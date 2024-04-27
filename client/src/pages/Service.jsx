
import NavBar from "../components/NavBar"
import HorizontalRuleSharp from "@mui/icons-material/HorizontalRuleSharp";
import s1 from '../assets/setting.jpg'
import t1 from '../assets/t1.jpg'
import inf1 from '../assets/inf.jpg'
import dev2 from '../assets/dev2.jpg'
import con1 from '../assets/con1.jpg'

function Service() {
  let num=[1,1,1,1,1,1,1,1,1,1,1];
  
  return (
    <div>
        <div className="bg-gradient-to-br from-[#755BB4] via-[#937DC7] via-49% to-[#846DBC] via-[#BEAFE3] via-77% h-[300px]">
        <NavBar />
        <h1 className="text-2xl text-center text-white pt-[130px] font-semibold"> Service </h1>       
        </div>
     
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

export default Service