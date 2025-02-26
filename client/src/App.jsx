import AboutUs from "./pages/AboutUs"
import Blog from "./pages/Blog"
import ContactsUs from "./pages/ContactsUs"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Registration from "./pages/Registration"
import Service from "./pages/Service"
import Footer from "./components/Footer"
import ServiceDetail from "./pages/ServiceDetali"
import NavBar from "./components/NavBar"
import Auth from "./pages/Auth"
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import PortfolioDetail from "./pages/PortfolioDetail"
import BlogDetail from "./pages/BlogDetail"


export default function App() {
  return (
   
    <BrowserRouter>        
        <Routes>
          <Route  exact={true} path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/servicedetail' element={<ServiceDetail/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contact' element={<ContactsUs/>}/>
          <Route path='/register' element={<Registration/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/portfoliodetail' element={<PortfolioDetail />}/>
          <Route path='/blogdetail' element={<BlogDetail />}/>
          <Route path='/auth' element={<Auth/>}/>
        </Routes>

        <Footer />
    </BrowserRouter>
  )
}

