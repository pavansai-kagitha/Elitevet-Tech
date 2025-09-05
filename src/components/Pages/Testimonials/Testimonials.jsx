import React from 'react'
import { Titles } from '../../Common/Titles'
import heroImg from "../../../assets/Herobg.webp";

const Testimonials = () => {
  return (
    <>
      {/* Hero Section */}
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
                    Read About Our Excellent Services
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-5 bg-light-gray '>

        <div className=' container'>
          <Titles text="TESTIMONIALS" />
          <h3 className='sub-title text-center text-black mb-4'>See what people say about <br className='d-none d-lg-block' /> EliteVet Tech</h3>
          <div className=' position-relative'>
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
        </div>

      </section>

    </>
  )
}

export default Testimonials