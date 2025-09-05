import React from 'react'

const ServicesHero = ({ title, description, imgs, bgimg, sectionType }) => {
  const isProcess = sectionType === "process";
  return (
    <section className="bg-black position-relative d-flex align-items-center">
      <div className=" w-100 h-100 position-absolute top-0 start-0">
        <img src={bgimg} alt="Hero" className={`img-fluid w-100 h-100 object-fit-cover ${isProcess ? "opacity-25" : ""
          }`} />
      </div>

      <div className="container position-relative z-3 pt-lg-8 pb-lg-1 pb-4">
        <div className='pb-5'>
          <div className="row g-3 align-items-center">

            <div className='col-12 col-lg-5'>
              <div className={`bg-white d-inline-block rounded-2  ${isProcess ? "p-2 shadow-sm align-middle" : "p-3"
                }`}>
                <img src={imgs} style={{ height: "180px", width: "200px", objectFit: isProcess ? "cover" : "contain", }} className="img-fluid align-middle" alt={title} />
              </div>
            </div>

            <div className="col-12 col-lg-7">
              <div className="content_outer ">
                <h1 className="text-white display-5 fw-bold font-primary">
                  {title}
                </h1>
                <p className="text-white font-sec lead">
                  {description}
                </p>

              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesHero