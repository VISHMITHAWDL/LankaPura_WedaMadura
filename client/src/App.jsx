import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Aboutus from './pages/Aboutus.jsx';
import Blog from './pages/Blog.jsx';
import Contactus from './pages/Contactus.jsx';
import Appointment from './pages/Appointment.jsx';
import Ourtreat from './pages/Ourtreat.jsx';
import Products from './pages/Products.jsx';
import ArticleDetail from './components/Blog_Compo/ArticleDetail.jsx';


import KidneyDisease from './pages/Diseases/kidneydisease.jsx'
import LiverDisease from './pages/Diseases/liverdisease.jsx'
import AllTypeOfCancers from './pages/Diseases/alltypeofcancers.jsx'
import Diabetic from './pages/Diseases/diabetic.jsx'
import Dengue from './pages/Diseases/dengue.jsx'
import Leptospirosis from './pages/Diseases/leptospirosis.jsx'
import Std from './pages/Diseases/std.jsx'
import Itp from './pages/Diseases/itp.jsx'
import Infertility from './pages/Diseases/infertility.jsx'
import Covid19 from './pages/Diseases/covid19.jsx'
import Sciatica from './pages/Diseases/sciatica.jsx'
import Nsd from './pages/Diseases/nsd.jsx'
import Migraine from './pages/Diseases/migraine.jsx'
import Lunginfection from './pages/Diseases/lunginfection.jsx'
import Lungdiseases from './pages/Diseases/lungdiseases.jsx'
import Catarrh from './pages/Diseases/catarrh.jsx'
import Arthritis from './pages/Diseases/arthritis.jsx'

import Header from './components/Home_Compo/header.jsx'
import Footer from './components/Home_Compo/footer.jsx'
import Prd from './pages/Produt_pages/Productdescription.jsx'
import Abd from './pages/Aboutthedoctor.jsx'
import WhatsAppButton from './components/Home_Compo/Whatsapp';
import Scroltop from './components/Scrolltop.jsx';




function App()
{
  return (
    <Router>
      
      <Header/>
      <Scroltop/>
      <WhatsAppButton />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/ourtreat" element={<Ourtreat />} />
          <Route path="/products" element={<Products />} />
          <Route path="/article2/:id" element={<ArticleDetail />} />
          <Route path="/productdes/:id" element={<Prd/>}/>

          
          <Route path="/kidneydisease" element={<KidneyDisease />} />
          <Route path="/liverdisease" element={<LiverDisease />} />
          <Route path="/alltypeofcancers" element={<AllTypeOfCancers />} />
          <Route path="/diabetic" element={<Diabetic />} />
          <Route path="/dengue" element={<Dengue />} />
          <Route path="/leptospirosis" element={<Leptospirosis />} />
          <Route path="/std" element={<Std />} />
          <Route path="/itp" element={<Itp />} />
          <Route path="/infertility" element={<Infertility />} />
          <Route path="/covid19" element={<Covid19 />} />
          <Route path="/sciatica" element={<Sciatica />} />
          <Route path="/nsd" element={<Nsd />} />
          <Route path="/migraine" element={<Migraine />} />
          <Route path="/lunginfection" element={<Lunginfection />} />
          <Route path="/lungdiseases" element={<Lungdiseases />} />
          <Route path="/catarrh" element={<Catarrh />} />
          <Route path="/arthritis" element={<Arthritis />} />

          <Route path="/abd" element={<Abd />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
