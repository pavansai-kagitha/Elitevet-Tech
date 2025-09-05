import { useParams } from "react-router-dom";

import servicesContent from "./datasr"
import ServicesHero from "./ServicesHero";
import { Titles } from "../../Common/Titles";
import heroImg from "../../../assets/Herobg.webp";
const ServicesPage = () => {
  const { categoryId, serviceId } = useParams();

  let content;

  if (categoryId && serviceId) {
    // Nested service: e.g. technologystaffing/aws
    content = servicesContent[categoryId]?.[serviceId];
  } else {
    // Top-level service: e.g. web, mobile, cloud
    content = servicesContent[categoryId || serviceId];
  }
  if (!content) {
    return <>
    
    <section className="bg-black position-relative d-flex align-items-center">
      <div className=" w-100 h-100 position-absolute top-0 start-0">
        <img src={heroImg} alt="Hero" className="img-fluid w-100 h-100 object-fit-cover"/>
      </div>

      <div className="container position-relative z-3 pt-lg-8 pb-lg-1 pb-4">
        <div className='pb-5'>
          <div className="row g-3 align-items-center text-center">
            <div className="col-12">
              <div className="content_outer my-5 ">
                <h1 className="text-white display-5 fw-bold font-primary mb-1">
              Service not found
                </h1>
                <p className="text-white font-sec lead">
                Oops! We couldn’t find that service. Please check again or explore our offerings.
                </p>

              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
    </>;
  }

  return (
    <section >
      {/* Hero */}
      <ServicesHero title={content.title} description={content.description} imgs={content.imgs} bgimg={content.bgimg} sectionType={categoryId} />
      <section>
        <div className="container py-5">
          {/* Why Choose */}
          {content.whyChoose && (
            <div>
              <Titles text={content.whyChoose.title} />
              <h3 className="sub-title text-center text-black mb-4">{content.whyChoose.description}</h3>
              <div className="row g-3">
                {content.whyChoose.cards.map((card) => (
                  <div key={card.id} className="col-md-4">
                    <div className="card h-100 shadow-sm border-0 bg-body-secondary p-1">
                      <div className="card-body bg-white rounded-2">
                        <h5 className="sub-heading mb-3 fw-semibold ">{card.title}</h5>
                        <p>{card.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <section className="py-5 section-bg">
          <div className="container">
            {/* Expertise */}
            {content.expertise && (
              <div className="mt-5">
                <Titles text={content.expertise.title} />
                <h3 className="sub-title text-center mb-4">{content.expertise.description}</h3>
                <div className="row g-3">
                  {content.expertise.areas.map((area) => (
                    <div key={area.id} className="col-md-3 col-sm-6">
                      <div className="card h-100 p-1 bg-card-p rounded-3">
                        <div className="card-body text-center bg-darks rounded-3">
                          <h6 className="sub-heading mb-3 fw-semibold  text-white ">{area.title}</h6>
                          <p className="dark-card-text">{area.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </section>
    </section>
  );
};

export default ServicesPage;
