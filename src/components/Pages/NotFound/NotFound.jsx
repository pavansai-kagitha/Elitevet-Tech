import React from "react";
import { Link, Links } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "../../../assets/Herobg.webp";
import Button from "../../Common/Buttons/Button";

const NotFound = () => {
  return (
    <section className="bg-black position-relative d-flex align-items-center">
         <div className=" w-100 h-100 position-absolute top-0 start-0">
           <img src={heroImg} alt="Hero" className="img-fluid w-100 h-100 object-fit-cover"/>
         </div>
   
         <div className="container position-relative z-3 pt-lg-8 pb-lg-1 pb-4">
           <div className='pb-5'>
             <div className="row g-3 align-items-center text-center">
               <div className="col-12">
                 <div className="content_outer my-5 ">
                   <h1 className="text-white display-1 fw-bold font-primary mb-1">
                 404
                   </h1>
                   <h3 className=" sub-heading text-white mb-3">Page Not Found</h3>
                   <p className="text-white font-sec lead">
                   The page you’re looking for doesn’t exist or may have been moved.
                   </p>

                  
                   <Button to="/" classname="btn btn-primary rounded-pill mt-3" text="Back to Home"/>
   
                 </div>
               </div>
   
   
             </div>
           </div>
         </div>
       </section>
  );
};

export default NotFound;
