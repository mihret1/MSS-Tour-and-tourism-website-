
import imgg from '../assets/softnet.jpg'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PinDropIcon from '@mui/icons-material/PinDrop';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import CopyrightIcon from '@mui/icons-material/Copyright';


function Footer() {
  return (
    <div className='bg-[#E9E0FF] m-10 max-sm:mx-3 sm:max-lg:mx-4 p-5 flex flex-col gap-1 '>

      <div className="flex pt-3 gap-5 justify-center items-center px-2 max-md:gap-2 ">
            <div className=" h-[2.2px] bg-[#755BB4] w-[43%]"></div>
            <img src={imgg} className='w-28 h-20'/>
            <div className=" h-[2.2px] bg-[#755BB4] w-[43%]"></div>

      </div>
      
      <div className='grid grid-cols-5 px-5 justify-center mt-3 font-medium'>       
        
        
        <div className=' flex  flex-col gap-5 text-lg justify-self-center '>
          <h1 className='text-2xl font-semibold '>Contact</h1>
          <p> <MailOutlineIcon sx={{ color:'#755BB4'}}/> info@softnetsc.com</p>
          <p><LocalPhoneIcon sx={{ color:'#755BB4' }} />+251(0)15 57-86-57</p>
          <p><PinDropIcon sx={{ color:'#755BB4' }} /> Mexico , Shewa Bakery Bldg.
            4th Floor ,Infront of K Kare,
            CenterAddis Ababa , Ethiopia</p>
        </div>        
       
        <div className=' flex  flex-col gap-6 text-lg justify-self-center'>
          <h1 className='text-2xl font-semibold '>Branches</h1>
          <p> Jemo</p>
          <p>Piassa </p>
          <p> Mexico</p>
          <p>piassa atilkt tera</p>
          {/* <p>Training</p> */}
        </div>


        <div className=' flex  flex-col gap-5 text-lg justify-self-center '>
          <h1 className='text-2xl font-semibold '> Service</h1>
          <p>Custom Development</p>
          <p>Web development</p>
          <p>App development</p>
          <p>Creative Graphics</p>
          <p>Training</p>
        </div>

        <div className=' flex  flex-col gap-3 text-lg  justify-self-center	'>
          <h1 className='text-2xl font-semibold '> Links</h1>
          <p>  <a href='/home'>Home</a></p>
          <p>  <a href='/home'>About us</a></p>
          <p>  <a href='/home'>Services</a></p>
          <p>  <a href='/home'>Porfolio</a></p>
          <p>  <a href='/home'>Blog</a></p>
          <p>  <a href='/home'>Contact</a></p>

        </div>
        

        <div className=' flex  flex-col gap-3 text-lg justify-self-center'>
          <h1 className='text-2xl font-semibold '>Follow Us</h1>
            <div className='flex gap-2'>
              <p>  <a href='/home'><FacebookOutlinedIcon /></a></p>
              <p>  <a href='/home'><LinkedInIcon/></a></p>
              <p>  <a href='/home'><InstagramIcon /></a></p>
              <p>  <a href='/home'><TwitterIcon /></a></p>
              <p>  <a href='/home'><PinterestIcon/></a></p>

           </div>
        </div>        


      </div>

      <div className=' flex flex-col items-center gap-3 text-lg pt-16'>
        <div className=" h-[2.2px] bg-[#755BB4] w-[96%]"></div>
        <p><CopyrightIcon fontSize='large' /> 2023. All rights reserved by Softnet SCo. - Privacy Policy - Terms & Conditions</p>
      </div>
    
    </div>
  )
}

export default Footer