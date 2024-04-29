
import NavBar from '../components/NavBar'
import sd1 from '../assets/service/sd.jpeg'
import sd2 from '../assets/service/sd2.jpg'
import sd3 from '../assets/service/sd3.jpg'
import sd4 from '../assets/service/sd4.jpg'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';


const ServiceDetail=()=>{
    return(
        <div>

            <div className="bg-gradient-to-br from-[#755BB4] via-[#937DC7] via-49% to-[#846DBC] via-[#BEAFE3] via-77% h-[300px]">
               <NavBar />
               <h1 className="text-2xl text-center text-white pt-[130px] font-semibold"> Service Detail</h1>       
           </div>
           <div className='flex p-10 gap-10 max-ml:flex-col'>
             <img src={sd2} className='w-[400px]'/>
             <div className='flex flex-col'>
                <h1 className='text-2xl font-semibold text-center'>Technology training</h1>
                <p className='text-lg py-3'>
                Technology training of e-learning involves the transfer of knowledge and guidelines
                 about the specific online learning software or system that will be used by the
                  institution as the platform for e-learning. Training can be conducted internally or
                   externally through departments or courses. Training acts as a forerunner to a positive 
                   attitude to technology where it eliminates negative effects such anxiety of performing 
                   new things that is unpredictable. Thus, training facilitates learners` acceptance towards
                    the system or technology consequently
                leads to a positive attitude of using the technology specifically e-learning system.
                In developing countries, there is a growing trend towards integration of technology
                 in curriculum implementation in higher education institutions. This chapter focuses on 
                 integration of information, media, and digital technologies in universities in Kenya.
                  It sheds light on 
                the different technology resources available for use in instruction, with a range of competencies
                </p>
                <div className='flex flex-col'>
                    <div className='flex items-center text-xl gap-2 text-gray-600 '> <ThumbUpOffAltIcon color="secondary" fontSize="large"  /> Programming Languages </div>
                    <div className='flex items-center text-xl gap-2 text-gray-600 '> <ThumbUpOffAltIcon color="secondary" fontSize="large"  /> Networking Basics </div>
                    <div className='flex items-center text-xl gap-2 text-gray-600 '> <ThumbUpOffAltIcon color="secondary" fontSize="large"  /> Artificial Intellegence </div>
                    <div className='flex items-center text-xl gap-2 text-gray-600 '> <ThumbUpOffAltIcon color="secondary" fontSize="large"  /> Web Development </div>
                    <div className='flex items-center text-xl gap-2 text-gray-600 '> <ThumbUpOffAltIcon color="secondary" fontSize="large"  /> Graphics Designing </div>

                </div>

                <button className='text-[#755BB4] text-xl font-semibold py-2 w-[100px] mt-2 '>Register...</button>
             </div>

           </div>


        </div>
    )
}


export default ServiceDetail