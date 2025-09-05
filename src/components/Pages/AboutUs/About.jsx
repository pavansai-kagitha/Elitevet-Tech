import React from 'react'
import heroImg from "../../../assets/Herobg.webp"
import { Titles } from '../../Common/Titles'
import "../AboutUs/about.css";

const WeDo = [
  {
    id: crypto.randomUUID(),
    icon: "fa-solid fa-users-gear",
    service: "Staffing Solutions",
    description: "Helping enterprises find the right talent, from cloud engineers to business analysts.",
  },
  {
    id: crypto.randomUUID(),
    icon: "fa-solid fa-handshake",
    service: "Consulting Services",
    description: "Guiding organizations with strategy, process alignment, and digital adoption.",

  },
  {
    id: crypto.randomUUID(),
    icon: "fa-solid fa-people-carry-box",
    service: "Project Delivery",
    description: "Providing end-to-end execution with program managers, consultants, and agile leaders.",

  },
  {
    id: crypto.randomUUID(),
    icon: "fa-solid fa-microchip",
    service: "Technology Enablement",
    description: "Partnering with clients to maximize ROI from cloud, ERP, and analytics platforms.",

  },

]
const CoreValues = [
  {
    id: 1,
    icon: "fa-solid fa-users",
    service: "People First",
    description: "Talent is our foundation; we invest in people and partnerships.",
  },
  {
    id: 2,
    icon: "fa-solid fa-truck-fast",
    service: "Excellence in Delivery",
    description: "Every project, every consultant, every outcome matters.",
  },
  {
    id: 3,
    icon: "fa-solid fa-users-rays",
    service: "Customer-Centricity",
    description: "We work backwards from client needs, ensuring alignment and impact.",
  },
  {
    id: 4,
    icon: "fa-solid fa-gear",
    service: "Agility & Innovation",
    description: "We adapt quickly, leveraging new methods and tools to stay ahead.",
  },
]
const About = () => {
  return (
    <>
      <section className="bg-black position-relative d-flex align-items-center">
        <div className=" w-100 h-100 position-absolute top-0 start-0">
          <img src={heroImg} alt="Hero" className="img-fluid w-100 h-100 object-fit-cover
          " />
        </div>

        <div className="container position-relative z-3 pt-lg-8 pb-lg-1 pb-4">
          <div className='pb-5'>
            <div className="row g-3 align-items-center justify-content-center">
              <div className="col-12 col-lg-8 ">
                <div className="content_outer text-center my-4 ">
                  <h1 className="text-white display-5 fw-bold font-primary">
                    Empowering businesses with talent and transformation.
                  </h1>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>
      <section className='py-5 bg-white'>
        <div className=' container'>
          <div className=' text-start d-inline-block'>
            <Titles text="How it started" />
          </div>
          <div className='row g-3'>
            <div className='col-12 col-md-7'>
              <h3 className='sub-title text-black mb-1'>Our story</h3>
              <p className='fs-18 mb-2'>EliteVet Tech was founded with a mission to connect world-class talent with forward-thinking organizations.</p>
              <p className='fs-18 mb-2'>As a veteran-led and excellence-driven company, we bring a culture of discipline, innovation, and commitment to every engagement.</p>
              <p className='fs-18'>We launched EliteVet Tech from a spark of frustration after witnessing skyrocketing cloud costs at our previous venture, we knew there had to be a better way. That question became our mission: build a solution that automatically optimizes cloud infrastructure and cuts costs, with no manual intervention needed.</p>
            </div>
            <div className='col-12 col-md-5'>
              <div className='card border-primary p-2 rounded-3'>
                <div className='card-body card-body-clr rounded-3'>
                  <h3 className="sub-heading mb-2 fw-semibold ">Who We Are</h3>
                  <p>We are a team of industry-certified consultants, staffing specialists, and technology advisors who thrive on solving complex challenges.
                    Our focus is on delivering people-powered solutions that align with client goals across industries like</p>
                  <h3 className="sub-heading my-3 fw-semibold ">Industries</h3>
                  <div>
                    <ul className='ul_about nav d-flex flex-column  gap-2'>
                      <li ><p >Cloud & Digital Platforms</p></li>
                      <li><p >ERP & CRM Solutions (SAP, Salesforce, Microsoft)</p></li>
                      <li><p >Business Process Consulting</p></li>
                      <li><p >GIS & Data Analytics</p></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* leadership*/}
      <section className='py-5'>
        <div className=' container'>
          <Titles text="People" />
          <h3 className='sub-title text-black mb-4 text-center'>Our leadership</h3>
          <div className='row g-3'>
            <div className='col-12 col-md-6 col-lg-3'>
              <div className='card people_card'>
                <div className='card-body p-2 bg-white rounded-3 shadow-sm' style={{ marginTop: "300px" }}>
                  <div className='cards_footer d-flex align-items-center justify-content-between'>
                    <div>
                      <h2 className='fw-bold'>Sarah Johnson</h2>
                      <p className='fs-14'>CTO, Tech Solutions Inc</p>
                    </div>
                    <div className='sc_icon'>
                      <i className='fa-brands fa-linkedin fa-xl'></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-3'>
              <div className='card people_card'>
                <div className='card-body p-2 bg-white rounded-3 shadow-sm' style={{ marginTop: "300px" }}>
                  <div className='cards_footer d-flex align-items-center justify-content-between'>
                    <div>
                      <h2 className='fw-bold'>Sarah Johnson</h2>
                      <p className='fs-14'>CTO, Tech Solutions Inc</p>
                    </div>
                    <div className='sc_icon'>
                      <i className='fa-brands fa-linkedin fa-xl'></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-3'>
              <div className='card people_card'>
                <div className='card-body p-2 bg-white rounded-3 shadow-sm' style={{ marginTop: "300px" }}>
                  <div className='cards_footer d-flex align-items-center justify-content-between'>
                    <div>
                      <h2 className='fw-bold'>Sarah Johnson</h2>
                      <p className='fs-14'>CTO, Tech Solutions Inc</p>
                    </div>
                    <div className='sc_icon'>
                      <i className='fa-brands fa-linkedin fa-xl'></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-3'>
              <div className='card people_card'>
                <div className='card-body p-2 bg-white rounded-3 shadow-sm' style={{ marginTop: "300px" }}>
                  <div className='cards_footer d-flex align-items-center justify-content-between'>
                    <div>
                      <h2 className='fw-bold'>Sarah Johnson</h2>
                      <p className='fs-14'>CTO, Tech Solutions Inc</p>
                    </div>
                    <div className='sc_icon'>
                      <i className='fa-brands fa-linkedin fa-xl'></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* leadership*/}
      {/* what we do */}
      <section className='py-5 bg-light-gray'>
        <div className='container'>
          <Titles text="What We Do" />
          <h3 className='sub-title text-black mb-4 text-center'>Empowering business growth with exceptional talent and strategic consulting.</h3>
          <div className='row g-3'>
            {WeDo.map(({ id, service, description, icon }) => (
              <div className='col-12 col-lg-6 col-xl-3 ' key={id}>
                <div className='card h-100 shadow-sm' >
                  <div className='card-body text-center'>
                    <div className='card-icon mb-4 display-4'>
                      <i className={` ${icon}`}></i>
                    </div>
                    <h3 className='sub-heading mb-3 fw-semibold font-trenda'>{service}</h3>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* what we do */}
      {/* Our Core Values */}
      <section className='py-5 section-bg'>
        <div className=' container'>
          <Titles text="Values" />
          <h3 className='sub-title  mb-4 text-center'>Our Core Values</h3>
          <div className='row g-3'>
            {CoreValues.map(({ id, service, description, icon }) => (
              <div className='col-12 col-md-6 ' key={id}>
                <div className='card h-100 rounded-3 p-1 bg-card-p' >
                  <div className='card-body text-start rounded-3' style={{ backgroundColor: "#0a0d13" }}>
                    <div className='card-icon mb-3 display-4'>
                      <i className={` ${icon} icons-about_color`}></i>
                    </div>
                    <h3 className='sub-heading mb-2 fw-semibold text-white font-trenda'>{service}</h3>
                    <p className='dark-card-text'>{description}</p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

      </section>
      {/* Our Core Values */}
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
                  <a href="#?" className='btn btn-dark d-block btn-sm'>View More</a>
                </div>

              </div>
            </div>
          </div>
        </div>

      </section>
      {/* TESTIMONIALS */}
      {/* locations */}
      <section className='py-5'>
        <div className=' container'>
          <Titles text="locations" />
          <h3 className='sub-title text-center text-black mb-4'>Our Operations</h3>
          <div className='row g-3 flex-wrap'>
            <div className='col'>
              <div className='outer_country_card text-center'>
                <div className='flag_icons'>
                  <span className="fi fi-us display-1"></span>
                </div>
                <h2 className='fw-bold sub-heading mt-2 mb-1'>USA</h2>
                <p className="fs-14 white-space-no">Elitevet Tech USA</p>
              </div>
            </div>
            <div className='col'>
              <div className='outer_country_card text-center'>
                <div className='flag_icons'>
                  <span className="fi fi-in display-1"></span>
                </div>
                <h2 className='fw-bold sub-heading mt-2 mb-1'>India</h2>
                <p className="fs-14 white-space-no">Elitevet Tech India</p>
              </div>
            </div>
            <div className='col'>
              <div className='outer_country_card text-center'>
                <div className='flag_icons'>
                  <span className="fi fi-ae display-1"></span>
                </div>
                <h2 className='fw-bold sub-heading mt-2 mb-1'>Dubai</h2>
                <p className="fs-14 white-space-no">Elitevet Tech Dubai</p>
              </div>
            </div>
            <div className='col'>
              <div className='outer_country_card text-center'>
                <div className='flag_icons'>
                  <span className="fi fi-sg display-1"></span>
                </div>
                <h2 className='fw-bold sub-heading mt-2 mb-1'>Singapore</h2>
                <p className="fs-14 white-space-no">Elitevet Tech Singapore</p>
              </div>
            </div>
            <div className='col'>
              <div className='outer_country_card text-center'>
                <div className='flag_icons'>
                  <span className="fi fi-ph display-1"></span>
                </div>
                <h2 className='fw-bold sub-heading mt-2 mb-1'>Philippines</h2>
                <p className="fs-14 white-space-no">Elitevet Tech Philippines</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* locations */}
    
    </>
  )
}

export default About