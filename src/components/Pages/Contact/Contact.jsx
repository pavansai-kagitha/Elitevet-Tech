import { useState, useEffect } from "react";
import axios from "axios";
import heroImg from "../../../assets/Herobg.webp";
import { Titles } from "../../Common/Titles";
import Select from "react-select";
import { motion, AnimatePresence } from "framer-motion";
import "../Contact/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: null,
    contact_type: null,
    privacy_policy: false,
  });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  // const serviceOptions = [
  //   { value: "staffing", label: "IT Staffing" },
  //   { value: "consulting", label: "Consulting" },
  //   { value: "cloud", label: "Cloud Solutions" },
  //   { value: "sap", label: "SAP Services" },
  // ];
  const [serviceOptions, setServiceOptions] = useState([]); // from API
  const [loadingServices, setLoadingServices] = useState(true);

  // Fetch services from API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(
          "https://cloudifai.com/elitevet-tech/api/get_in_touch_service_interest"
        );

        if (res.data && Array.isArray(res.data.data)) {
          const options = res.data.data.map((item) => ({
            value: item.service_name,
            label: item.service_name,
          }));
          setServiceOptions(options);
        } else {
          console.error("Invalid API response", res.data);
        }
      } catch (err) {
        console.error("Error fetching services", err);
      } finally {
        setLoadingServices(false);
      }
    };

    fetchServices();
  }, []);


  const contactType = [
    { value: "Company", label: "Company" },
    { value: "individual", label: "Individual" },
  ];

  // ================== Handlers ==================

  const handleNameChange = (e) => {
    let value = e.target.value
      .replace(/https?:\/\/\S+/gi, "") // remove links
      .replace(/[^a-zA-Z0-9\s]/g, ""); // allow letters, numbers & spaces

    if (value.length > 50) value = value.slice(0, 50);

    setFormData({ ...formData, name: value });
    setErrors((prev) => ({
      ...prev,
      name: value.trim().length < 2 ? "Name must be at least 2 characters" : "",
    }));
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, email: value });

    setErrors((prev) => ({
      ...prev,
      email:
        !value
          ? "Email is required"
          : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
            ? ""
            : "Invalid email format",
    }));
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/[^0-9+]/g, "");

    // Only allow + at start
    if (value.includes("+") && value.indexOf("+") > 0) {
      value = value.replace(/\+/g, "");
    }

    // Limit digits to 15 (excluding +)
    const digitsOnly = value.replace(/\D/g, "");
    if (digitsOnly.length > 15) {
      value = value.slice(0, value.length - (digitsOnly.length - 15));
    }

    setFormData({ ...formData, phone: value });

    setErrors((prev) => ({
      ...prev,
      phone:
        digitsOnly.length < 7 || digitsOnly.length > 15
          ? "Enter a valid phone number (7–15 digits)"
          : "",
    }));
  };


  const handleMessageChange = (e) => {
    let value = e.target.value.replace(/https?:\/\/\S+/gi, "");
    if (value.length > 500) value = value.slice(0, 500);

    setFormData({ ...formData, message: value });

    setErrors((prev) => ({
      ...prev,
      message:
        value.trim().length < 5 ? "Message must be at least 5 characters" : "",
    }));
  };

  const handleSelectChange = (selectedOption) => {
    setFormData({ ...formData, service: selectedOption });
    setErrors({
      ...errors,
      service: selectedOption ? "" : "Please select a service",
    });
  };

  const handleContactType = (value) => {
    setFormData({ ...formData, contact_type: value });
    setErrors({
      ...errors,
      contact_type: value ? "" : "Please select a service",
    });
  };

  // const handlePrivacy = (checked) => {
  //   setFormData({ ...formData, privacy_policy: checked });

  //   setErrors({
  //     ...errors,
  //     privacy_policy: checked ? "" : "You must agree to the Privacy Notice",
  //   });
  // };
  const handlePrivacy = (checked) => {
    const value = checked
      ? "I understand that Elitevet Tech will protect my data as outlined in the Privacy Notice"
      : ""; // empty when unchecked

    setFormData({ ...formData, privacy_policy: value });

    setErrors({
      ...errors,
      privacy_policy: value ? "" : "You must agree to the Privacy Notice",
    });
  };



  // Validate all fields before submit
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim() || formData.name.length < 2)
      newErrors.name = "Name must be at least 2 characters";

    if (!formData.email)
      newErrors.email = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email))
      newErrors.email = "Invalid email format";

    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (!formData.phone)
      newErrors.phone = "Phone is required";
    else if (phoneDigits.length < 7 || phoneDigits.length > 15)
      newErrors.phone = "Enter a valid phone number (7–15 digits)";

    if (!formData.message.trim() || formData.message.length < 5)
      newErrors.message = "Message must be at least 5 characters";

    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.contact_type) newErrors.contact_type = "Please select a contact type";
    if (!formData.privacy_policy) newErrors.privacy_policy = "You must agree to the Privacy Notice";


    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ================== Submit ==================
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        service: formData.service?.value || null,
        contact_type: formData.contact_type || null,
        privacy_policy: formData.privacy_policy || false,
      };

      await axios.post(
        "https://cloudifai.com/elitevet-tech/api/store-contact-us",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

      setShowModal(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        service: null,
        contact_type: null,
        privacy_policy: false,
      });
      setErrors({});
    } catch (error) {
      setErrors({ api: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.classList.add("modal-open");
      document.body.style.overflow = "hidden";
    } else {
      document.body.classList.remove("modal-open");
      document.body.style.overflow = "auto";
    }
  }, [showModal]);

  // ================== JSX ==================
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
                    Get in Touch
                  </h1>
                  <p className="text-white">
                    We’re here to help you find exceptional talent and consulting solutions.
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
              <h2 className="sub-heading fw-semibold mb-4">Talk to us about:</h2>
              <ul className="ul_about nav d-flex flex-column gap-1 mb-3">
                <li><p>Cloud & Digital Platforms</p></li>
                <li><p>ERP & CRM Solutions (SAP, Salesforce, Microsoft)</p></li>
                <li><p>Business Process Consulting</p></li>
                <li><p>GIS & Data Analytics</p></li>
              </ul>
              <div className="card border-primary p-2 rounded-3">
                <div className="card-body card-body-clr rounded-3">
                  <h3 className="sub-heading mb-2 fw-semibold">Contact Information</h3>
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
                  {errors.api && <div className="alert alert-danger">{errors.api}</div>}
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="row g-3">
                      {/* Contact Type (Radio Buttons) */}
                      <div className="col-md-6">
                        <label className="form-label">
                          Contact Type <span className="text-danger">*</span>
                        </label>
                        <div
                          className={`p-2 rounded form-control  ${errors.contact_type ? "border-danger is-invalid" : "border-secondary"
                            }`}
                        >
                          {contactType.map((option) => (
                            <div className="form-check form-check-inline" key={option.value}>
                              <input
                                type="radio"
                                className="form-check-input"
                                id={`contact_type_${option.value}`}
                                name="contact_type"
                                value={option.value}
                                checked={formData.contact_type === option.value}
                                onChange={(e) => handleContactType(e.target.value)}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`contact_type_${option.value}`}
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                        {errors.contact_type && (
                          <div className="text-danger small mt-1">{errors.contact_type}</div>
                        )}
                      </div>
                    </div>
                    <div className="row g-3 mt-1">
                      <div className="col-md-6">
                        <label className="form-label">{formData.contact_type === "Company" ? "Company Name" : "Full Name"}
                        </label>
                        <input
                          type="text"
                          className={`form-control ${errors.name ? "is-invalid" : ""}`}
                          name="name"
                          value={formData.name}
                          onChange={handleNameChange}
                          placeholder="Enter your name"
                          required
                        />
                        <div className="invalid-feedback">{errors.name}</div>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label"> {formData.contact_type === "Company" ? "Company Email" : "Personal Email"}</label>
                        <input
                          type="email"
                          className={`form-control ${errors.email ? "is-invalid" : ""}`}
                          name="email"
                          value={formData.email}
                          onChange={handleEmailChange}
                          placeholder="Enter your email"
                          required
                        />
                        <div className="invalid-feedback">{errors.email}</div>
                      </div>
                    </div>
                    <div className="row g-3 mt-1">
                      <div className="col-md-6">
                        <label className="form-label">Phone</label>
                        <input
                          type="tel"
                          className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                          name="phone"
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          placeholder="Enter your phone number"
                          required
                        />
                        <div className="invalid-feedback">{errors.phone}</div>
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">Service Interested In <span className="text-danger">*</span></label>
                        <Select
                          options={serviceOptions}
                          isLoading={loadingServices}
                          value={formData.service}
                          onChange={handleSelectChange}
                          placeholder="Choose a service"
                          className={errors.service ? "is-invalid" : ""}
                        />
                        {errors.service && (
                          <div className="text-danger small mt-1">{errors.service}</div>
                        )}
                      </div>
                    </div>

                    <div className="mt-3">
                      <label className="form-label">Message <span className="text-danger">*</span></label>
                      <textarea
                        className={`form-control ${errors.message ? "is-invalid" : ""}`}
                        name="message"
                        value={formData.message}
                        onChange={handleMessageChange}
                        rows="4"
                        placeholder="Write your message..."
                        required
                      />
                      <div className="invalid-feedback">{errors.message}</div>
                    </div>
                    <div className="form-check mt-3">
                      <input
                        className={`form-check-input ${errors.privacy_policy ? "is-invalid" : ""}`}
                        type="checkbox"
                        id="checkDefault"
                        checked={!!formData.privacy_policy}
                        onChange={(e) => handlePrivacy(e.target.checked)}
                      />
                      <label className="form-check-label" htmlFor="checkDefault">
                        I understand that Elitevet Tech will protect my data as outlined in the Privacy Notice
                      </label>
                      {errors.privacy_policy && (
                        <div className="text-danger small mt-1">{errors.privacy_policy}</div>
                      )}
                    </div>



                    <div className="text-center mt-4">
                      <button
                        type="submit"
                        className="btn bg-pry border-0 text-white rounded-pill px-5 py-2 "
                        disabled={loading}
                      >
                        {loading ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="modal fade show d-block"
            style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <motion.div
                className="modal-content border-primary p-2 rounded-3 "
                initial={{ scale: 0.8, opacity: 0, y: -50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
              >
                <div className="modal-body text-center card-body-clr rounded-3">
                  <div className="icon_sc_outer display-3 text-success">
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                  <h2 className=" sub-title text-dark fs-3 fw-medium mb-4 lh-sm">
                    Thank you for contacting us. We’ll get back to you soon.
                  </h2>
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
