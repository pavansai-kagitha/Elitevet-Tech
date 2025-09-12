import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Common/Header/Header";
import Home from "./components/sections/Home/Home";
import Footer from "./components/Common/Footer/Footer";
import About from "./components/Pages/AboutUs/About";
import ServicesPage from "./components/Pages/Services/Services";
import { AnimatePresence,motion } from "framer-motion";
import { useEffect } from "react";
import Operations from "./components/Pages/Operations/Operations";
import CareersPage from "./components/Pages/Careers/CareersPage";
import Jobapply from "./components/Pages/Careers/Jobapply";
import IndustryInsights from "./components/Pages/IndustryInsights/IndustryInsights";
import Testimonials from "./components/Pages/Testimonials/Testimonials";
import Partners from "./components/Pages/Partners/Partners";
import Contact from "./components/Pages/Contact/Contact";
import NotFound from "./components/Pages/NotFound/NotFound";




function App() {
  const location = useLocation();
  return (
    <>
   <Header/>
   <ScrollToTop/>
   <AnimatePresence mode="wait">
    <Routes keyId={location.pathname} location={location}>
       
        <Route path="/" element={<MotionWrapper keyId={location.pathname}><Home/></MotionWrapper>} />
        <Route path="/about" element={<MotionWrapper keyId={location.pathname}><About/></MotionWrapper>}/>
          <Route path="/operations" element={<MotionWrapper keyId={location.pathname}><Operations/></MotionWrapper>}/>
          <Route path="/careers" element={<MotionWrapper keyId={location.pathname}><CareersPage/></MotionWrapper>}/>
          <Route path="/IndustryInsights" element={<MotionWrapper keyId={location.pathname}><IndustryInsights/></MotionWrapper>}/>
          <Route path="/testimonials" element={<MotionWrapper keyId={location.pathname}><Testimonials/></MotionWrapper>}/>
          <Route path="/partners" element={<MotionWrapper keyId={location.pathname}><Partners/></MotionWrapper>}/>
          <Route path="/contact" element={<MotionWrapper keyId={location.pathname}><Contact/></MotionWrapper>}/>
          <Route path="/careers/apply/:jobId/:jobTitle" element={<MotionWrapper keyId={location.pathname}><Jobapply/></MotionWrapper>}/>
         <Route path="/services/:serviceId" element={<MotionWrapper keyId={location.pathname}><ServicesPage/></MotionWrapper>}/>
         <Route path="/services/:categoryId/:serviceId" element={<MotionWrapper keyId={location.pathname}><ServicesPage/></MotionWrapper>} />
         <Route path="*" element={<MotionWrapper keyId={location.pathname}><NotFound/></MotionWrapper>} />
      </Routes>
      </AnimatePresence>
      <Footer/>

    
    </>
  )
}
// Motion wrapper for smooth fade + slide animation
const MotionWrapper = ({ children, keyId }) => {
  return (
    <motion.div
     key={keyId} 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};


//scroll top in clicks
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};



export default App
