import React from 'react'
import "../Home/home.css";
import { motion } from "framer-motion";
import heroImg from "../../../assets/hero-bg.webp"
import Carousel from './Carousel';
import Service from '../services/Service';
import { Titles } from '../../Common/Titles';
import { Link } from 'react-router-dom';
import Button from '../../Common/Buttons/Button';

const logos = [
  "https://cdn-ikppifh.nitrocdn.com/KFQXVFcYhiTYihMSBBFFEzTRjqmFZAWs/assets/images/optimized/rev-73ee50a/calitgroup.com/wp-content/uploads/2024/05/calitgroup-sba-veteran-owned-v2.png",
  "https://cdn-ikppifh.nitrocdn.com/KFQXVFcYhiTYihMSBBFFEzTRjqmFZAWs/assets/images/optimized/rev-73ee50a/calitgroup.com/wp-content/uploads/2024/12/Top-Managed-Service-Provider-Orange-County-2024.png",
  "https://cdn-ikppifh.nitrocdn.com/KFQXVFcYhiTYihMSBBFFEzTRjqmFZAWs/assets/images/optimized/rev-73ee50a/calitgroup.com/wp-content/uploads/2023/03/0004_upcity.png",
  "https://cdn-ikppifh.nitrocdn.com/KFQXVFcYhiTYihMSBBFFEzTRjqmFZAWs/assets/images/optimized/rev-73ee50a/calitgroup.com/wp-content/uploads/2023/03/top_the_manifest_cybersecurity_company_los_angeles_2023_award.png",
  "https://cdn-ikppifh.nitrocdn.com/KFQXVFcYhiTYihMSBBFFEzTRjqmFZAWs/assets/images/optimized/rev-73ee50a/calitgroup.com/wp-content/uploads/2023/03/0000_CISSP.png",
  "https://cdn-ikppifh.nitrocdn.com/KFQXVFcYhiTYihMSBBFFEzTRjqmFZAWs/assets/images/optimized/rev-73ee50a/calitgroup.com/wp-content/uploads/2024/05/calitroup-bbb-accredited-business-v1.png",
  "https://cdn-ikppifh.nitrocdn.com/KFQXVFcYhiTYihMSBBFFEzTRjqmFZAWs/assets/images/optimized/rev-73ee50a/calitgroup.com/wp-content/uploads/2025/03/Cloud-Tango-MSP-US-Select-2025-Badge-v2.png",
];
const industries = [
  {
    id: crypto.randomUUID(),
    icon: "bi bi-tools",
    service: "Utilities",
    description: "Smart grid solutions, energy management systems, and IoT implementations",
  },
  {
    id: crypto.randomUUID(),
    icon: "bi bi-car-front",
    service: "Automobile",
    description: "Connected vehicle technologies, manufacturing automation, and digital transformation",

  },
  {
    id: crypto.randomUUID(),
    icon: "bi bi-gear-wide-connected",
    service: "Manufacturing",
    description: "Supply chain optimization, automation systems, and quality management solutions",

  },
  {
    id: crypto.randomUUID(),
    icon: "bi bi-stack",
    service: "Services",
    description: "Digital transformation, cloud migration, and technology consulting services",

  },

];
const Home = () => {
  // Duplicate array so it loops smoothly
  const repeatedLogos = [...logos, ...logos];
  return (
    <>
      <section className="hero_section position-relative d-flex align-items-center">
        <div className="img_outer w-100 h-100 position-absolute top-0 start-0">
          <img src={heroImg} alt="Hero" className="img-fluid w-100 h-100 object-fit-cover hero-img" />
        </div>
        <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>
        <div className="container position-relative z-3 pt-lg-8">
          <div className="row g-3">
            <div className="col-12 col-lg-7">
              <div className="content_outer text-start  py-lg-5">
                <h1 className="text-white display-5 fw-bold font-primary">
                  Empowering Businesses with Talent
                </h1>
                <p className="text-white font-sec lead mb-3">
                  EliteVet Tech is Veteran-led. Excellence-driven IT Staffing and consulting solutions for every mission
                </p>
                <Button to="/contact" text="Get Started" classname="bg-primary text-white"/>
              </div>
            </div>
            <div className='col-12 col-lg-5'>
              <Carousel />
            </div>
          </div>
          {/* logs */}
          <div className='row'>
            <div className='col-12'>
              <div className="overflow-hidden w-100 py-4 ">
                <motion.div
                  className="d-flex align-items-center gap-5"
                  animate={{ x: ["0%", "-50%"] }} // only half, since we doubled the array
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                    duration: 20, // adjust speed
                  }}
                >
                  {repeatedLogos.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="logo"
                      className="logo_imgs"
                      style={{ objectFit: "contain" }}
                    />
                  ))}
                </motion.div>
              </div>

            </div>
          </div>
          {/* logs */}
        </div>
      </section>
      <Service />
      {/* Industries We Serve  start*/}
      <section className='py-5 section-bg' >
        <Titles text="Industries We Serve" />
        <h3 className='sub-title text-center mb-4'>Delivering tailored solutions across <br className='d-none d-lg-block' /> diverse sectors.</h3>
        <div className='container '>
          <div className='row g-3'>
            {industries.map(({ id, icon, service, description }) => (
              <div className='col-12 col-lg-6 col-xl-3 ' key={id}>
                <div className='card h-100 p-1 bg-card-p rounded-3' >
                  <div className='card-body text-center bg-darks rounded-3'>
                    <div className='card-icon mb-4'>
                      <i className={`display-4 ${icon} text-white`}></i>
                    </div>
                    <h3 className='sub-heading mb-3 fw-semibold  text-white'>{service}</h3>
                    <p className='dark-card-text'>{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Industries We Serve end */}
      {/* Why Choose EliteVet Tech start */}
      <section className='py-5'>
        <Titles text="Why Choose EliteVet Tech" />
        <h3 className='sub-title text-center text-black mb-4'>Because your success is our priority, <br className='d-none d-lg-block' /> every step of the way.</h3>
        <div className=' container'>
          <div className='row g-3'>
            <div className='col-12 col-lg-6 order-2 order-md-1'>
              <div className='row g-3'>
                <div className='col-12'>
                  <div className='card  shadow-sm h-100 position-relative'>
                    <div className='card-body '>
                      <div className='icon-text display-6 text-orange-light position-absolute end-0'>
                        <i className="fa-solid fa-user-tie fa-lg"></i>
                      </div>
                      <div className='right-text'>
                        <h2 className='sub-heading mb-2 fw-semibold fs-2'>500+</h2>
                        <h3 className='sub-heading fw-bold mb-1'>Successfully Placed Professionals</h3>
                        <p>Thousands of professionals placed across industries.
                          Your growth is our achievement.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12'>
                  <div className='card  shadow-sm h-100 position-relative'>
                    <div className='card-body '>
                      <div className='icon-text display-6 text-pink-light position-absolute end-0'>
                        <i className="fa-solid fa-earth-americas fa-lg"></i>
                      </div>
                      <div className='right-text'>
                        <h2 className='sub-heading mb-2 fw-semibold fs-2'>05</h2>
                        <h3 className='sub-heading fw-bold mb-1'>Global Locations</h3>
                        <p>Operating across multiple regions worldwide.
                          Bringing services closer to where you are.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12'>
                  <div className='card  shadow-sm h-100 position-relative'>
                    <div className='card-body '>
                      <div className='icon-text display-6 text-green-light position-absolute end-0'>
                        <i className="fa-solid fa-face-grin-stars fa-lg"></i>
                      </div>
                      <div className='right-text'>
                        <h2 className='sub-heading mb-2 fw-semibold fs-2'>98%</h2>
                        <h3 className='sub-heading fw-bold mb-1'>Client Satisfaction Rate</h3>
                        <p>Consistently achieving 98%+ client satisfaction.
                          Trusted by businesses of all sizes.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12'>
                  <div className='card  shadow-sm h-100 position-relative'>
                    <div className='card-body '>
                      <div className='icon-text display-6 position-absolute end-0   text-blue-light'>
                        <i className="fa-solid fa-headset fa-lg"></i>
                      </div>
                      <div className='right-text'>
                        <h2 className='sub-heading mb-2 fw-semibold fs-2'>24/7</h2>
                        <h3 className='sub-heading fw-bold mb-1'>Support Available</h3>
                        <p>24/7 dedicated support for clients and professionals.
                          Always here when you need us most.</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className='col-12 col-lg-6 order-1 order-md-2'>
              <div className='img_outers h-100 opacity-50'>
                <img src={heroImg} alt="" className='img-fluid w-100 object-fit-cover h-100  rounded-end-5 ' />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose EliteVet Tech end */}
      {/* TESTIMONIALS */}
      <section className='py-5 bg-light-gray '>
       

        <div className=' container'>
           <Titles text="TESTIMONIALS" />
        <h3 className='sub-title text-center text-black mb-4'>See what people say about <br className='d-none d-lg-block' /> EliteVet Tech</h3>
          <div className='testm-section position-relative'>
            <div className='row g-3'>
              <div className='col-12 col-lg-4'>
                {/* inner row start */}
                <div className='row g-3'>
                  <div className='col-12'>
                    <div className='card '>
                      <div className='outer_card_profile d-flex align-items-center gap-3 border-bottom p-3'>
                        <div className=' rounded-circle bg-secondary-subtle p-1' >
                          <img src="https://cdn-icons-png.flaticon.com/512/10337/10337609.png" alt="" className='img-fluid align-middle' style={{ height: "50px", width: "50px" }} />
                        </div>
                        <div>
                          < p className='fw-semibold text-black'>
                            <strong>Sarah Johnson</strong>
                          </p>
                          <p className='fs-14'>CTO, Tech Solutions Inc</p>
                        </div>
                      </div>
                      <div className='card-body p-3'>
                        <p className='font-st' >"EliteVet Tech provided exceptional AWS architects who transformed our cloud infrastructure. Their veteran-led approach brings discipline and excellence to every project."</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className='card '>
                      <div className='outer_card_profile d-flex align-items-center  border-bottom p-3 justify-content-between'>
                        <div className='d-flex gap-3'>
                          <div className=' rounded-circle bg-secondary-subtle p-1' >
                            <img src="https://cdn-icons-png.flaticon.com/512/10337/10337609.png" alt="" className='img-fluid align-middle' style={{ height: "50px", width: "50px" }} />
                          </div>
                          <div>
                            < p className='fw-semibold text-black'>
                              <strong>Sarah Johnson</strong>
                            </p>
                            <p className='fs-14'>CTO, Google</p>
                          </div>
                        </div>
                        <div className=' rounded-circle text-white bg-success d-flex align-items-center justify-content-center' style={{ height: "50px", width: "50px", fontSize: "11px" }}>Google</div>
                      </div>
                      <div className='card-body p-3'>
                        <p className='font-st' >"EliteVet Tech provided exceptional AWS architects who transformed our cloud infrastructure. Their veteran-led approach brings discipline and excellence to every project."</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* inner row end */}
              </div>
              <div className='col-12 col-lg-4'>
                {/* inner row start */}
                <div className='row g-3'>
                  <div className='col-12'>
                    <div className='card '>
                      <div className='outer_card_profile d-flex align-items-center gap-3 border-bottom p-3'>
                        <div className=' rounded-circle bg-secondary-subtle p-1' >
                          <img src="https://cdn-icons-png.flaticon.com/512/10337/10337609.png" alt="" className='img-fluid align-middle' style={{ height: "50px", width: "50px" }} />
                        </div>
                        <div>
                          < p className='fw-semibold text-black'>
                            <strong>Sarah Johnson</strong>
                          </p>
                          <p className='fs-14'>CTO, Tech Solutions Inc</p>
                        </div>
                      </div>
                      <div className='card-body p-3'>
                        <p className='font-st' >"EliteVet Tech provided exceptional AWS architects who transformed our cloud infrastructure. Their veteran-led approach brings discipline and excellence to every project."</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className='card '>
                      <div className='outer_card_profile d-flex align-items-center  border-bottom p-3 justify-content-between'>
                        <div className='d-flex gap-3'>
                          <div className=' rounded-circle bg-secondary-subtle p-1' >
                            <img src="https://cdn-icons-png.flaticon.com/512/10337/10337609.png" alt="" className='img-fluid align-middle' style={{ height: "50px", width: "50px" }} />
                          </div>
                          <div>
                            < p className='fw-semibold text-black'>
                              <strong>Sarah Johnson</strong>
                            </p>
                            <p className='fs-14'>CTO, Google</p>
                          </div>
                        </div>
                        <div className=' rounded-circle text-white bg-success d-flex align-items-center justify-content-center' style={{ height: "50px", width: "50px", fontSize: "11px" }}>Google</div>
                      </div>
                      <div className='card-body p-3'>
                        <p className='font-st' >"EliteVet Tech provided exceptional AWS architects who transformed our cloud infrastructure. Their veteran-led approach brings discipline and excellence to every project."</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* inner row end */}
              </div>
              <div className='col-12 col-lg-4'>
                {/* inner row start */}
                <div className='row g-3'>
                  <div className='col-12'>
                    <div className='card '>
                      <div className='outer_card_profile d-flex align-items-center gap-3 border-bottom p-3'>
                        <div className=' rounded-circle bg-secondary-subtle p-1' >
                          <img src="https://cdn-icons-png.flaticon.com/512/10337/10337609.png" alt="" className='img-fluid align-middle' style={{ height: "50px", width: "50px" }} />
                        </div>
                        <div>
                          < p className='fw-semibold text-black'>
                            <strong>Sarah Johnson</strong>
                          </p>
                          <p className='fs-14'>CTO, Tech Solutions Inc</p>
                        </div>
                      </div>
                      <div className='card-body p-3'>
                        <p className='font-st' >"EliteVet Tech provided exceptional AWS architects who transformed our cloud infrastructure. Their veteran-led approach brings discipline and excellence to every project."</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className='card '>
                      <div className='outer_card_profile d-flex align-items-center  border-bottom p-3 justify-content-between'>
                        <div className='d-flex gap-3'>
                          <div className=' rounded-circle bg-secondary-subtle p-1' >
                            <img src="https://cdn-icons-png.flaticon.com/512/10337/10337609.png" alt="" className='img-fluid align-middle' style={{ height: "50px", width: "50px" }} />
                          </div>
                          <div>
                            < p className='fw-semibold text-black'>
                              <strong>Sarah Johnson</strong>
                            </p>
                            <p className='fs-14'>CTO, Google</p>
                          </div>
                        </div>
                        <div className=' rounded-circle text-white bg-success d-flex align-items-center justify-content-center' style={{ height: "50px", width: "50px", fontSize: "11px" }}>Google</div>
                      </div>
                      <div className='card-body p-3'>
                        <p className='font-st' >"EliteVet Tech provided exceptional AWS architects who transformed our cloud infrastructure. Their veteran-led approach brings discipline and excellence to every project."</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* inner row end */}
              </div>
            </div>
          </div>

          <div className='text-center pt-5'>
            <div style={{ backgroundColor: "#0e0f13" }} className='cta-view-more-test  d-inline-block rounded-3 p-2'>
              <div className='d-flex flex-wrap gap-3 align-items-center'>
                <div className='d-flex gap-1 align-items-center'>
                  <button className='btn btn-primary btn-sm'><i className="fa-solid fa-bolt"></i></button>
                  {/* website logo replace */}
                  <p>800+ companies choose Elitevet Tech.</p>
                </div>
                <div className=' flex-grow-1'>
                  <Link to="/testimonials" className='btn btn-dark d-block btn-sm'>View More</Link>
                </div>

              </div>
            </div>
          </div>
        </div>

      </section>
      {/* TESTIMONIALS */}
      {/*  */}
      
    </>
  )
}

export default Home