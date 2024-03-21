
import imgg from '../assets/softnet.jpg'

function Footer() {
  return (
    <div className='bg-[#E9E0FF] m-10 max-sm:mx-3 sm:max-lg:mx-4'>
      <div className="flex pt-10 gap-5 justify-center items-center px-2 max-md:gap-2 ">
            <div className=" h-[2.2px] bg-[#755BB4] w-[42%]"></div>
            <img src={imgg} className='w-28 h-20'/>
            <div className=" h-[2.2px] bg-[#755BB4] w-[42%]"></div>

      </div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Footer