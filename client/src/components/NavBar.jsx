
import nav from '../assets/softnet.jpg'
import { useState,useEffect } from "react"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function NavBar() {
  const [showColor,setShowColor]=useState(false)
  // const [isFixed,setIsFixed]=useState(false)
  const [hoverAdd, setHoverAdd]=useState(0)
  const [navb,setNavb]=useState(true)

  useEffect(()=>{
     const handleScroll=()=>{
      if(window.scrollY >=50){
        setShowColor(true)
      }else{
        setShowColor(false)
      }
     }
     window.addEventListener('scroll',handleScroll)
     return ()=>{
     window.removeEventListener('scroll',handleScroll)
     }
  },[])
  
  return (
<div className={`${showColor && "fixed"} w-[100%]` }>

    <div  className={` max-md:bg-white  ${showColor? "bg-white":"bg-transparent"}   ${showColor && "shadow-lg"}  w-[100%]  flex flex-row h-[90px]  items-center  justify-between px-10 max-lg:px-4`}>
      <a href='/'>
      <div className='flex'>
        <img className='w-[65px] h-[65px] max-lg:w-[50px] max-lg:h-[50px]'  src={nav}/>
        <div className='flex flex-col justify-end ml-1 lg:items-center'>
          <h1 className={`max-md:text-black ${!showColor && 'text-white'} max-lg:text-2xl  text-4xl font-serif font-semibold` } > Softnet</h1>
           <p className={`max-md:text-black ${ !showColor && 'text-[#dcd3ec]'} text-sm `}>software development plc</p>
        </div>
       
      </div>
      </a>
      <nav className={` flex flex-row md:max-lg:gap-5 gap-6 max-md:hidden   ${!showColor &&'text-white' } `}>

        <a href='/' className={`md:max-lg:text-lg font-medium  text-xl ${showColor && 'hover:text-[#755BB4]'}`} onMouseEnter={()=>setHoverAdd(1)} onMouseLeave={()=>setHoverAdd(0)}><div>Home {(hoverAdd===1  && !showColor )&& <div className='h-[2px] rounded-full bg-white'></div> }</div></a>
        <a href='/aboutus' className={`md:max-lg:text-lg font-medium  text-xl ${showColor && 'hover:text-[#755BB4]'}`} onMouseEnter={()=>setHoverAdd(2)} onMouseLeave={()=>setHoverAdd(0)}><div>About-Us {(hoverAdd===2 && !showColor )&& <div className='h-[2px] rounded-full bg-white'></div> }</div></a>
        <a href='/Service' className={`md:max-lg:text-lg font-medium  text-xl ${showColor && 'hover:text-[#755BB4]'}`} onMouseEnter={()=>setHoverAdd(3)} onMouseLeave={()=>setHoverAdd(0)}><div>Service {(hoverAdd===3 && !showColor )&& <div className='h-[2px] rounded-full bg-white'></div> }</div></a>
        <a href='/portfolio' className={`md:max-lg:text-lg font-medium  text-xl ${showColor && 'hover:text-[#755BB4]'}`} onMouseEnter={()=>setHoverAdd(4)} onMouseLeave={()=>setHoverAdd(0)}><div>Portfolio {(hoverAdd===4 && !showColor )&& <div className='h-[2px] rounded-full bg-white'></div> }</div></a>
        <a href='/blog' className={`md:max-lg:text-lg font-medium  text-xl ${showColor && 'hover:text-[#755BB4]'}`} onMouseEnter={()=>setHoverAdd(5)} onMouseLeave={()=>setHoverAdd(0)}><div>Blog {(hoverAdd===5 && !showColor )&& <div className='h-[2px] rounded-full bg-white'></div> }</div></a>

      </nav>
      <button type="button" className={`max-md:hidden md:max-lg:px-5 md:max-lg:py-2 rounded-full hover:bg-gray-600 hover:text-white  ${!showColor ? 'bg-white':'bg-black'} ${!showColor ? 'text-[#8660df]':'text-white '}  py-2 px-7 font-bold text-xl`}><a href='/contact'>Contact</a></button>
      
      <button onClick={()=>setNavb((e)=>!e)}   className='hidden max-md:flex max-md:pr-3'>
      <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
      </svg>
      </button>

    
   </div>
   {navb && <div className= {`fixed bg-white h-52 w-[100%] hidden max-md:flex  `}>
        <div className='w-[100%] h-96'>
        <a href='/contact'><div className='border-b-2 border-dashed hover:text-purple-600 p-1'><ArrowRightAltIcon  sx={{ color:'#755BB4' }}/> Home</div></a> 
        <a href='/aboutus'><div className='border-b-2 border-dashed hover:text-purple-600  p-1'> <ArrowRightAltIcon sx={{ color:'#755BB4' }}/>About Us</div></a> 
          <a href='/service'><div className='border-b-2 border-dashed hover:text-purple-600 p-1'><ArrowRightAltIcon sx={{ color:'#755BB4' }}/> Service</div></a> 
          <a href='/portfolio'><div className='border-b-2 border-dashed hover:text-purple-600 p-1'> <ArrowRightAltIcon sx={{ color:'#755BB4' }} />Portfolio</div></a> 
          <a href='/blog'><div className='border-b-2 border-dashed hover:text-purple-600 p-1'><ArrowRightAltIcon sx={{ color:'#755BB4' }}/> Blog</div></a> 
          <a href='/contact'><div className=' hover:text-purple-600 p-1'><ArrowRightAltIcon sx={{ color:'#755BB4' }}/> Contact</div></a> 

        </div>

   </div>}
    

    </div>
  )
}

export default NavBar