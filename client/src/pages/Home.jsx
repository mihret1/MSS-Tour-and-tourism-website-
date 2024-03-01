import NavBar from "../components/NavBar"
import img1 from '../assets/h5.jpg'

const Home=()=>{
  
    return(
      <div className="m-0">

      <div className="h-[665px] 	 bg-gradient-to-br from-[#765ab7]  via-[#d2cbef]  to-[#7E66B9] "   >
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

     <div className="bg-red h-[1000px]"></div>

      </div> 
    )
}

export default Home