import React from 'react';
import heroImg from "../../../assets/Herobg.webp";
import { Titles } from '../../Common/Titles';
import { Link, useNavigate } from "react-router-dom";
import servicesContent from "../Services/datasr";
import Button from '../../Common/Buttons/Button';
const benefits = [
  {
    id: crypto.randomUUID(),
    icon: "fa-solid fa-handshake",
    service: "Strategic Collaboration",
    description: "Work together on complex client solutions",
  },
  {
    id: crypto.randomUUID(),
    icon: "bi bi-shop",
    service: "Market Expansion",
    description: "Access to our global client network",

  },
  {
    id: crypto.randomUUID(),
    icon: "fa-solid fa-user-tag",
    service: "Certified Expertise",
    description: "Our professionals maintain latest certifications",

  },
  {
    id: crypto.randomUUID(),
    icon: "fa-solid fa-users",
    service: "Joint Marketing",
    description: "Co-marketing opportunities and events",

  },

];

const Partners = () => {
  const navigate = useNavigate();

  // Only include these services
  const partnerKeys = [
    { category: "cloud-technologies", services: ["aws", "azure", "gcp"] },
    { category: "sap", services: ["sap"] }, // SAP is top-level
  ];

  const partnerItems = [];

  partnerKeys.forEach(({ category, services }) => {
    const categoryObj = servicesContent[category];
    if (!categoryObj) return;

    services.forEach((serviceKey) => {
      const serviceObj =
        category === "cloud-technologies" ? categoryObj[serviceKey] : categoryObj;
      if (serviceObj) {
        partnerItems.push({
          categoryKey: category,
          serviceKey,
          ...serviceObj,
        });
      }
    });
  });

  // Navigate with nested check
  const handleClick = (categoryKey, serviceKey) => {
    const categoryObj = servicesContent[categoryKey];
    const isNested = categoryObj && categoryObj[serviceKey]; // true for AWS/Azure/GCP
    const path = isNested ? `/services/${categoryKey}/${serviceKey}` : `/services/${categoryKey}`;
    navigate(path);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-black position-relative d-flex align-items-center">
        <div className="w-100 h-100 position-absolute top-0 start-0 bg-grd-3">
          {/* <img
            src={heroImg}
            alt="Hero"
            className="img-fluid w-100 h-100 object-fit-cover"
          /> */}
        </div>
        <div className="container position-relative z-3 pt-lg-8 pb-lg-1 pb-4">
          <div className="pb-5">
            <div className="row g-3 align-items-center justify-content-center">
              <div className="col-12 col-lg-8">
                <div className="content_outer text-center my-4">
                  <h1 className="text-white display-5 fw-semibold font-primary">
                    Our Trusted Partners
                  </h1>
                  <p className="text-white">
                    Collaborating with industry leaders to deliver exceptional IT staffing and consulting solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-5">
        <div className="container">
          <Titles text="Technology Partners" />
          <h3 className="sub-title text-center text-black mb-4">
            Trusted partners driving <br className="d-none d-lg-block" /> innovative IT solutions.
          </h3>
          <div className="row g-3 justify-content-center">
            {partnerItems.map((item) => (
              <div key={item.serviceKey} className="col-6 col-md-3 text-center">
                <div
                  className="card h-100 rounded shadow-sm bg-white hover-shadow"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleClick(item.categoryKey, item.serviceKey)}
                >
                  <div className='card-body'>
                    <img
                      src={item.imgs}
                      alt={item.title}
                      className="img-fluid"
                      style={{ height: "80px" }}
                    />
                    <p className="mt-2 fw-bold">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* partner logo */}
      {/* Become a Partner */}
      <section className='py-5 bg-white'>
        <div className=' container'>
          <div className='row'>
            <div className='col-12'>
              <div className='bec_partner_outer text-center'>
                <Titles text="Become a Partner" />
                <h2 className='sub-title text-black mb-4'>Join our network of technology <br className='d-none d-lg-block' /> partners and expand your reach</h2>
                <Button text="Partner with Us" classname="bg-pry text-white" to="/contact"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Become a Partner */}
      {/* partnership benefits */}
      <section className='py-5 section-bg'>
        <div className=' container'>
          <Titles text="Partnership Benefits" />
          <h3 className='sub-title text-center mb-4'>Grow together with trusted IT solutions.</h3>
          <div className='row g-3'>
            {benefits.map(({ id, icon, service, description }) => (
              <div className='col-12 col-lg-6 col-xl-3 ' key={id}>
                <div className='card h-100 p-1 bg-card-p rounded-3' >
                  <div className='card-body text-center bg-darks rounded-3'>
                    <div className='card-icon mb-4 display-4'>
                      <i className={` ${icon} text-white`}></i>
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
      {/* partnership benefits */}
    </>
  );
};

export default Partners;
