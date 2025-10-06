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
                        <div className='col-12 col-md-9'>
                            <div>
                                <h3 class="sub-title text-black mb-3 text-start">Robert Garcia, USMC BIO 2025</h3>
                                <p>Born and raised in SW Detroit, I went to Western International HS in Detroit. I
                                    graduated in 1984 with Honors in Architectural Drafting. Upon graduation, I entered
                                    the USMC in September of 1984 and scored a 90% on the ASVAB test for the US
                                    Military. I entered USMC boot camp and quickly became the third squad leader of
                                    my platoon, 2107 Bravo company. I was promoted to Private First Class “PFC” right
                                    out of boot camp. Upon returning to Camp Pendleton for Infantry Training School
                                    “ITS” I was quickly promoted to the first ever Privates and Private First Class for the
                                    new “LAV” Light Armored Vehicle Unit due to my perfect driving record. I became a
                                    Driver then promoted to Gunner within a year. After completing (4) awesome years
                                    in the USMC I was Honorably discharged in 1989 and my military rank was E-4
                                    Corporal. Upon returning home I used my GI Bill and went to college for
                                    Engineering. I have been in the Automotive Manufacturing & Engineering Industry
                                    for over 25 years, and I have a very large Network of fortune 50 & 100 companies I
                                    call on for New Business Development and Sales opportunities. I have supported
                                    the Veteran Round Table and NVBDC in the past and believe I would be a perfect fit
                                    for the Membership Advisory Committee for the NVBDC.</p>
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