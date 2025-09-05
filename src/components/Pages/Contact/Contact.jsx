import { useState,useEffect } from "react";
import heroImg from "../../../assets/Herobg.webp";
import { Titles } from "../../Common/Titles";
import Select from "react-select";
import { motion, AnimatePresence } from "framer-motion";
import "../Contact/contact.css"



const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: null,
  });
  const [showModal, setShowModal] = useState(false);

  const serviceOptions = [
    { value: "staffing", label: "IT Staffing" },
    { value: "consulting", label: "Consulting" },
    { value: "cloud", label: "Cloud Solutions" },
    { value: "sap", label: "SAP Services" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (selectedOption) => {
    setFormData({ ...formData, service: selectedOption });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    setShowModal(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      service: null,
    });
  };
 // ✅ Prevent background scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.classList.add("modal-open");
      document.body.style.overflow = "hidden";
    } else {
      document.body.classList.remove("modal-open");
      document.body.style.overflow = "auto";
    }
  }, [showModal]);
  return (
    <>
      {/* Hero Section */}
      <section className="bg-black position-relative d-flex align-items-center">
        <div className="w-100 h-100 position-absolute top-0 start-0">
          <img
            src={heroImg}
            alt="Hero"
            className="img-fluid w-100 h-100 object-fit-cover"
          />
        </div>
        <div className="container position-relative z-3 pt-lg-8 pb-lg-1 pb-4">
          <div className="pb-5">
            <div className="row g-3 align-items-center justify-content-center">
              <div className="col-12 col-lg-8">
                <div className="content_outer text-center my-4">
                  <h1 className="text-white display-5 fw-bold font-primary">
                    Get in Touch
                  </h1>
                  <p className="text-white">
                    We’re here to help you find exceptional talent and
                    consulting solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-5 bg-light-gray">
        <div className="container">
          <Titles text="Contact Us" />
          <h3 className="sub-title text-black mb-5 text-center">
           Fill out the form to connect with us.
          </h3>

          <div className="row g-3">
            {/* Left side contact info */}
            <div className="col-12 col-md-6">
              <h2 className=" sub-heading fw-semibold mb-4">Talk to us about:</h2>
              <ul className='ul_about nav d-flex flex-column  gap-1 mb-3'>
                      <li ><p >Cloud & Digital Platforms</p></li>
                      <li><p >ERP & CRM Solutions (SAP, Salesforce, Microsoft)</p></li>
                      <li><p >Business Process Consulting</p></li>
                      <li><p >GIS & Data Analytics</p></li>
                    </ul>
              <div className="card border-primary p-2 rounded-3">
                <div className="card-body card-body-clr rounded-3">
                  <h3 className="sub-heading mb-2 fw-semibold">
                    Contact Information
                  </h3>
                  <ul className="d-flex nav flex-column gap-2">
                    <li className="d-flex align-items-center gap-2">
                      <p className="text-black mb-0">General inquiries:</p>
                      <a
                        className="text-decoration-none"
                        style={{ color: "#525866" }}
                        href="mailto:info@elitevettech.com"
                      >
                        info@elitevettech.com
                      </a>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <p className="text-black mb-0">Mobile Number:</p>
                      <a
                        className="text-decoration-none"
                        style={{ color: "#525866" }}
                        href="tel:+11111111111"
                      >
                        +111111 11111
                      </a>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <p className="text-black mb-0">Address:</p>
                      <span style={{ color: "#525866" }}>USA, 209</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right side form */}
            <div className="col-12 col-md-6">
              <div className="card rounded-3">
                <div className="card-body p-4">
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="row g-3 mt-1">
                      <div className="col-md-6">
                        <label className="form-label">Phone</label>
                        <input
                          type="tel"
                          className="form-control"
                          name="phone"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">
                          Service Interested In
                        </label>
                        <Select
                          options={serviceOptions}
                          value={formData.service}
                          onChange={handleSelectChange}
                          placeholder="Choose a service"
                        />
                      </div>
                    </div>

                    <div className="mt-3">
                      <label className="form-label">Message</label>
                      <textarea
                        className="form-control"
                        rows="4"
                        name="message"
                        placeholder="Write your message..."
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <div className="text-center mt-4">
                      <button
                        type="submit"
                        className="btn btn-primary rounded-pill px-5 py-2 fw-semibold"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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

      {/* Success Modal (Bootstrap + Framer Motion) */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="modal fade show d-block"
            style={{
              backgroundColor: "rgba(0,0,0,0.6)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <motion.div
                className="modal-content"
                initial={{ scale: 0.8, opacity: 0, y: -50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
              >
                <div className="modal-body text-center">
                  <div className="icon_sc_outer display-3 text-success">
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                  
                  <p className="sub-heading fw-semibold">
                    Thank you for contacting us. We’ll get back to you soon.
                  </p>
                   <button
                    className="btn btn-primary px-4 py-2"
                    onClick={() => setShowModal(false)}
                  >
                    Ok
                  </button>
                </div>
               
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Contact;
