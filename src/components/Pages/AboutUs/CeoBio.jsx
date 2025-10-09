import React from 'react'

const CeoBio = () => {
    return (
        <>
            <section className="bg-black position-relative d-flex align-items-center">
                <div className=" w-100 h-100 position-absolute top-0 start-0 bg-grd-3">
                    {/* <img src={heroImg} alt="Hero" className="img-fluid w-100 h-100 object-fit-cover
          " /> */}
                </div>

                <div className="container position-relative z-3 pt-lg-8 pb-lg-1 pb-4">
                    <div className='pb-5'>
                        <div className="row g-3 align-items-center justify-content-center">
                            <div className="col-12 col-lg-8 ">
                                <div className="content_outer text-center my-4 ">
                                    <h1 className="text-white display-5 fw-semibold font-primary">
                                        Robert Garcia BIO
                                    </h1>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
            {/* ceo bio */}
            <section className='py-5'>
                <div className=' container'>
                    <div className='row g-4'>
                        <div className='col-12 col-md-3'>
                            <div className='card ceo_card'>
                                <div className='card-body p-2 bg-white rounded-3 shadow-sm' style={{ marginTop: "300px" }}>
                                    <div className='cards_footer d-flex align-items-center justify-content-between'>
                                        <div>
                                            <h2 className='fw-bold'>Robert Garcia</h2>
                                            <p className='fs-14'>CEO, Elitevet Tech</p>
                                        </div>
                                        <div className='sc_icon'>
                                            <i className='fa-brands fa-linkedin fa-xl'></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-9 my-md-auto'>
                            <div>
                                <h3 class="sub-title text-black mb-3 text-start">Robert Garcia, USMC BIO 2025</h3>
                                <p>Born and raised in Southwest Detroit, Mr. Garcia graduated with honors in Architectural Drafting from Western International High School in 1984 before enlisting in the U.S. Marine Corps. He quickly advanced to squad leader in Platoon 2107, Bravo Company, and was promoted to Private First Class upon completing boot camp. Selected for the newly formed Light Armored Vehicle (LAV) Unit due to his perfect driving record, he rose from Driver to Gunner and was honorably discharged as a Corporal (E-4) in 1989. After his service, Mr. Garcia used the GI Bill to study engineering and built a 25+ year career in automotive manufacturing, engineering, and IT specializing in business development and sales with a strong network across Fortune 50 and 100 companies. A committed supporter of veteran initiatives, including the Veteran Round Table and NVBDC, he brings proven leadership, industry expertise, and a passion for service to the NVBDC Membership Advisory Committee.</p>
                                    <p className='my-3'>Thank you for your consideration to support the NVBDC,</p>

                                    <div className='ctas'>
                                        <p className='mb-2'>Robert Garcia, USMC</p>
                                        <a href='tel:313-651-4144' style={{color:"#525866"}} className=' text-decoration-none '><i className="bi bi-telephone-fill me-2"></i>313-651-4144</a>
                                    </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* ceo bio */}
        </>
    )
}

export default CeoBio