import NavBar from "../components/NavBar"
import img1 from '../assets/portfolio/p3.jpg'
import img2 from '../assets/portfolio/p5.jpg'
import img3 from '../assets/portfolio/p4.jpg'
import img4 from '../assets/portfolio/p3.jpg'
import img5 from '../assets/portfolio/p2.jpg'
import img6 from '../assets/portfolio/p1.jpg'
import img7 from '../assets/portfolio/p8.jpg'
import img8 from '../assets/portfolio/p9.jpg'

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function Blog() {

  const Carde=(props)=>{
    return(
    <div className='w-[85%] shadow-lg '>
       <img src={props.img} className='w-[100%] h-72 ' style={{ }}/>
       <div className='pl-5 flex flex-col gap-1 py-3 pr-2'>
       <time className='text-lg font-serif '><CalendarMonthIcon sx={{ color:'#755BB4' }} /> {props.date}</time>
       <h1 className='text-2xl font-semibold '>{props.title}</h1>
       <p className='font-sans  '>{props.description}</p>
       <span className="font-bold text-lg text-[#755BB4] "><a href='/'> Read more </a></span>
       </div>
    </div>
    )
  }

  
  return (
    <div >
      <div className="bg-gradient-to-tr from-[#755BB4] via-[#937DC7] via-49% to-[#846DBC] via-[#BEAFE3] via-77% h-[300px]">
        <NavBar />
        <h1 className="text-center text-white text-2xl font-semibold pt-32"> Latest News</h1>
      </div>

      <div className="grid grid-cols-2 max-md:grid-cols-1 justify-items-center gap-y-14 py-24 ">
                 
          <Carde img={img1} 
                 title='Technology for all'
                 date='2/4/2024'
                 description='Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry`s
                  standard dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen book'
            />
              <Carde img={img2} 
                 title='AI in 2024'
                 date='2/4/2024'
                 description='Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry`s
                  standard dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen book'
            />
              <Carde img={img3} 
                 title='AI in 2024'
                 date='2/4/2024'
                 description='Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry`s
                  standard dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen book'
            />  
            <Carde img={img4} 
            title='AI in 2024'
            date='2/4/2024'
            description='Lorem Ipsum is simply dummy text of the printing and
             typesetting industry. Lorem Ipsum has been the industry`s
             standard dummy text ever since the 1500s, when an unknown printer took
             a galley of type and scrambled it to make a type specimen book'
       />  
       <Carde img={img5} 
       title='AI in 2024'
       date='2/4/2024'
       description='Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry`s
        standard dummy text ever since the 1500s, when an unknown printer took
        a galley of type and scrambled it to make a type specimen book'
  />  
  <Carde img={img6} 
  title='AI in 2024'
  date='2/4/2024'
  description='Lorem Ipsum is simply dummy text of the printing and
   typesetting industry. Lorem Ipsum has been the industry`s
   standard dummy text ever since the 1500s, when an unknown printer took
   a galley of type and scrambled it to make a type specimen book'
/>
<Carde img={img7} 
  title='AI in 2024'
  date='2/4/2024'
  description='Lorem Ipsum is simply dummy text of the printing and
   typesetting industry. Lorem Ipsum has been the industry`s
   standard dummy text ever since the 1500s, when an unknown printer took
   a galley of type and scrambled it to make a type specimen book'
/>
<Carde img={img8} 
  title='AI in 2024'
  date='2/4/2024'
  description='Lorem Ipsum is simply dummy text of the printing and
   typesetting industry. Lorem Ipsum has been the industry`s
   standard dummy text ever since the 1500s, when an unknown printer took
   a galley of type and scrambled it to make a type specimen book'
/>

      </div>

    

    </div>
  )
}

export default Blog