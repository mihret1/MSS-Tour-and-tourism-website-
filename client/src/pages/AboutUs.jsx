import NavBar from "../components/NavBar"
import about from '../assets/about/abt.webp'


function AboutUs() {
  return (
    <div>
      <div className="bg-gradient-to-br from-[#755BB4] via-[#937DC7] via-49% to-[#846DBC] via-[#BEAFE3] via-77% h-[300px]">
        <NavBar />
        <h1 className="text-2xl text-center text-white pt-[130px] font-semibold"> About Us</h1>       
      </div>
      
      <div className="flex gap-10 justify-center pt-10">
        <img src={about} className="w-[530px]"/>
        <div className="flex flex-col gap-3 ">
          <h1 className="text-2xl text-[#7F67BB]">Who We Are</h1>
          <div className="h-[2px] w-[400px] bg-[#7F67BB]"></div>
          <p className=" w-[500px] text-xl">
              Softnet is a technology firm specializing in comprehensive technology training,
              tailored software development, and end-to-end technology infrastructure solutions. 
              With over 20 years of experience in delivering technology trainings in Ethiopia, 
              Softnet takes pride in providing comprehensive and accessible technology training programs.
                Our commitment is to empower 
              individuals at all stages of their learning journey, from eager beginners to seasoned experts. 
          </p>
        </div>
      </div>


    </div>
  )
}

export default AboutUs