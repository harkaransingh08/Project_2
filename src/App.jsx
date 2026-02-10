import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import PageNotFound from './components/PageNotFound.jsx'
import Footer from './components/Footer.jsx'
import Service from './components/Service.jsx'
import About from './components/About.jsx'
import Blogs from './components/Blogs.jsx'
import Contact from './components/Contact.jsx'
import SignUp from './components/SignUp.jsx'
import AustraliaStudy from './components/Study/AustraliaStudy.jsx'
import CanadaStudy from './components/Study/CanadaStudy.jsx'
import UsaStudy from './components/Study/UsaStudy.jsx'
import UkStudy from './components/Study/UkStudy.jsx'
import EuropeStudy from './components/Study/EuropeStudy.jsx'
import SingaporeStudy from './components/Study/SingaporeStudy.jsx'
import ViewUniversity from './components/Study/University/ViewUniverty.jsx' // Fixed spelling

export default function App() {
  return (
    <div className='bg-[#ffffff]'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/student-services' element={<Service/>}/>
          <Route path='/about-us' element={<About/>}/>
          <Route path='/blog' element={<Blogs/>}/>  
          <Route path='/contact-us' element={<Contact/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/study-visa/australia' element={<AustraliaStudy/>}/>
          <Route path='/study-visa/canada' element={<CanadaStudy/>}/>
          <Route path='/study-visa/usa' element={<USAStudy/>}/>
          <Route path='/study-visa/uk' element={<UKStudy/>}/>
          <Route path='/study-visa/europe' element={<EuropeStudy/>}/>
          <Route path='/study-visa/singapore' element={<SingaporeStudy/>}/>

          {/* Fixed spelling in param name for consistency */}
          <Route path='/university/:university_name' element={<ViewUniversity/>}/>

          <Route path='/*' element={<PageNotFound/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}