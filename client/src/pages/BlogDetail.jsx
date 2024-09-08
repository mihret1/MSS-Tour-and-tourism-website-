import NavBar from "../components/NavBar"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import img1 from '../assets/service/sd4.jpg'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CommentIcon from '@mui/icons-material/Comment';

const BlogDetail=()=>{
    return (
        <div>
           <div className="bg-gradient-to-tr from-[#755BB4] via-[#937DC7] via-49% to-[#846DBC] via-[#BEAFE3] via-77% h-[300px]">
        <NavBar />
        <h1 className="text-center text-white text-xl font-semibold pt-32"> Latest News <ArrowForwardIosIcon /> Technology for all
        </h1>
           </div>
           <div className="flex p-20 gap-10 "> 
            <div className=" w-3/5 flex flex-col gap-2">
                     <img src={img1} className="w-[100%] h-[440px]"/>
                    <div className="flex items-center gap-10 pl-5 pt-2">
                        <time className='text-lg font-serif '><CalendarMonthIcon sx={{ color:'#755BB4' }} /> mar, 9/2023</time>
                       <span> <CommentIcon  sx={{ color:'#755BB4' }} />
                         Comments
                        </span>
                    </div> 
                    <h1 className="text-2xl">In publishing and graphic design,</h1>
                    <p className="text-lg">
                    Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
                    Lorem ipsum may be used as a placeholder before the final copy is available.
                    </p>
                    <h1 className="text-2xl pt-4">In publishing and graphic design,</h1>
                    <p className="text-lg">
                    Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
                    Lorem ipsum may be used as a placeholder before the final copy is available.
                    </p>
                    <h1 className="text-2xl pt-3">In publishing and graphic design,</h1>
                    <p className="text-lg">
                    Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
                    Lorem ipsum may be used as a placeholder before the final copy is available.
                    </p>
                    <p className="text-lg pt-4">
                    Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
                    Lorem ipsum may be used as a placeholder before the final copy is available.
                    </p>
                    <p className="text-lg pt-5">
                    Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
                    Lorem ipsum may be used as a placeholder before the final copy is available.
                    </p>
            </div>
            <div className="bg-blue-500 w-2/5 ">hey</div>
           </div>
        </div>
    )
}

export default BlogDetail