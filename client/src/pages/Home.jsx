import NavBar from "../components/NavBar"
import img1 from '../assets/a.jpg'

const Home=()=>{
    return(
      <div className="h-[1000px] 	 bg-gradient-to-br from-[#765ab7]  via-[#d2cbef]  to-[#7E66B9] "   >
        <NavBar />
        <div className="flex flex-row gap-10 mx-20 pt-16">
          
          <div className="flex-3">
            <h2>Softnet Software Development Company</h2>
            <h1>Softnet Software Development Company Softnet Software Development Company</h1>
          </div>
          <img src={img1} className="flex-1 w-[200px] h-[400px]"/>
        
        </div>


      </div>  
    )
}

export default Home