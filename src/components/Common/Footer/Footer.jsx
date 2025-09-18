import React from 'react'
import "../Footer/footer.css";
import { Titles } from '../Titles';
import Button from '../Buttons/Button';
import { Link,useLocation  } from 'react-router-dom';

const Footer = () => {
      const location = useLocation();

  // Example: hide CTA on /contact page
  const showCTA = location.pathname !== '/contact';
    return (
        
<>
 {showCTA && (
       
        <section className="bg-primary py-5 bg-strips">
           
            <div className="container text-center">
                 <Titles text="Let’s Build Success Together" />
            <h3 className='sub-title text-center  mb-4'>Join hundreds of businesses and <br className='d-none d-lg-block' /> professionals who trust EliteVet Tech.</h3>
                <Link to="/contact" className=' bg-black text-white text-decoration-none p-3 rounded-pill' type='button'>Contact Us Now</Link>

            </div>
        </section>
 )}
        {/* // cta section end */}
        {/* // footer section  */}
        <section className='bg-black py-5'>
            <div className=' container'>
                <div className='row g-3'>
                    <div className='col-12 col-lg-4'>
                        <h1 className='sub-title fs-3'>EliteVet Tech</h1>
                        <p className='dark-card-text'>EliteVet Tech – Veteran-led excellence in IT staffing, sourcing, and consulting solutions for businesses worldwide.</p>
                        <div className='social_links pt-3'>

                            <ul className='d-inline-flex align-itmes-center social_links_li gap-2'>
                                <li>
                                    <a href="#?"><i className="fa-brands fa-facebook"></i></a>
                                </li>
                                 <li>
                                    <a href="#?"> <i className="fa-brands fa-linkedin"></i></a>
                                </li>
                                 <li>
                                    <a href="#?">  <i className="fa-brands fa-youtube"></i></a>
                                </li>
                                <li>
                                    <a href="#?">  <i className="fa-brands fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-12 col-lg-2 ms-auto '>
                        <div className='ft_outer'>
                        <h1 className='titles-fs text-start mb-3'>Cloud Services</h1>
                        <ul className='text-white d-flex flex-column gap-2'>
                            <li><Link to="/services/cloud-technologies/aws" className=' text-decoration-none text-white'>AWS</Link> </li>
                            <li><Link to="/services/cloud-technologies/gcp" className=' text-decoration-none text-white'>GCP</Link></li>
                            <li><Link to="/services/cloud-technologies/azure" className=' text-decoration-none text-white'>Azure</Link></li>
                        </ul>
                        </div>
                    </div>
                     <div className='col-12 col-lg-2'>
                        <div className='ft_outer'>
                        <h1 className='titles-fs text-start mb-3'>Services</h1>
                        <ul className='text-white d-flex flex-column gap-2'>
                            <li><Link to="/services/microsoft" className=' text-decoration-none text-white'>Microsoft suite</Link></li>
                            <li><Link to="/services/gis" className=' text-decoration-none text-white'>GIS</Link></li>
                            <li><Link to="/services/palantir" className=' text-decoration-none text-white'>Palantair</Link></li>
                            <li><Link to="/services/salesforce" className=' text-decoration-none text-white'>Salesforce</Link></li>
                            <li><Link to="/services/sap" className=' text-decoration-none text-white'>SAP</Link></li>
                        </ul>
                        </div>
                    </div>
                     <div className='col-12 col-lg-2'>
                        <div className='ft_outer'>
                        <h1 className='titles-fs text-start mb-3'>Company</h1>
                        <ul className='text-white d-flex flex-column gap-2'>
                            <li><Link to="/operations" className=' text-decoration-none text-white'>Operations</Link></li>
                            <li><Link to="/partners" className=' text-decoration-none text-white'>Partners</Link></li>
                            <li><Link to="/testimonials" className=' text-decoration-none text-white'>Testimonials</Link></li>
                            <li><Link to="/careers" className=' text-decoration-none text-white'>Careers</Link></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                     {/* sub footer */}
                <div className='mt-lg-5 mt-3 pt-lg-5 pt-4'>
                    <div className='row g-3 justify-content-center  justify-content-lg-between'>
                        <div className='col-12 col-lg-7'>
                            <p className='dark-card-text'>© {new Date().getFullYear()} EliteVet Tech. All rights reserved.</p>
                        </div>
                        <div className='col-12 col-lg-5'>
                            <ul className='d-flex align-items-center gap-3 dark-card-text justify-content-lg-end '>
                                <li>Privacy policy</li>
                                <li>Terms of service</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* sub footer */}
            </div>

        </section>
        {/* // footer section */}
        </>
    )
}

export default Footer