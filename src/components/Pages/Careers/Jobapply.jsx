// Jobapply.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Container, Form, Row, Col, Button, Spinner } from "react-bootstrap";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import heroImg from "../../../assets/Herobg.webp";
import "../Careers/jobapply.css";

const Jobapply = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // file key to reset file input
  const [fileKey, setFileKey] = useState(Date.now());

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    experience: "",
    cover_letter: "",
    resume: null,
  });

  const [errors, setErrors] = useState({});

  // Fetch job details
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axios.get(
          `https://cloudifai.com/elitevet-tech/api/get_job_roles`
        );
        const foundJob = response.data.data.find(
          (j) => j.id === parseInt(jobId)
        );
        setJob(foundJob || null);
      } catch (error) {
        console.error("Error fetching job:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [jobId]);

  // ================= Handlers =================
  const handleChange = (e) => {
    const { id, value, files } = e.target;

    if (id === "resume") {
      const file = files[0];
      if (file && file.size > 2 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, resume: "File size must not exceed 2MB" }));
        setFormData((prev) => ({ ...prev, resume: null }));
      } else {
        setFormData((prev) => ({ ...prev, resume: file }));
        setErrors((prev) => ({ ...prev, resume: "" }));
      }
    } else if (id === "full_name") {
      let val = value.replace(/[^a-zA-Z\s]/g, "");
      if (val.length > 50) val = val.slice(0, 50);
      setFormData((prev) => ({ ...prev, full_name: val }));
      setErrors((prev) => ({
        ...prev,
        full_name: val.trim().length < 2 ? "Name must be at least 2 characters" : "",
      }));
    } else if (id === "email") {
      setFormData((prev) => ({ ...prev, email: value }));
      setErrors((prev) => ({
        ...prev,
        email: !value
          ? "Email is required"
          : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
          ? ""
          : "Invalid email format",
      }));
    } else if (id === "phone_number") {
      const val = value.replace(/[^0-9]/g, "").slice(0, 15);
      setFormData((prev) => ({ ...prev, phone_number: val }));
      setErrors((prev) => ({
        ...prev,
        phone_number:
          val.length < 7 || val.length > 15 ? "Enter a valid phone number (7–15 digits)" : "",
      }));
    } else if (id === "experience") {
      const val = value.replace(/[^0-9]/g, "");
      setFormData((prev) => ({ ...prev, experience: val }));
      setErrors((prev) => ({
        ...prev,
        experience: !val ? "Experience is required" : "",
      }));
    } else if (id === "cover_letter") {
      let val = value.slice(0, 300);
      setFormData((prev) => ({ ...prev, cover_letter: val }));
      setErrors((prev) => ({
        ...prev,
        cover_letter:
          val.trim().length < 5 ? "Cover letter must be at least 5 characters" : "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.full_name.trim() || formData.full_name.length < 2)
      newErrors.full_name = "Name must be at least 2 characters";

    if (!formData.email)
      newErrors.email = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.phone_number)
      newErrors.phone_number = "Phone is required";
    else if (formData.phone_number.length < 7 || formData.phone_number.length > 15)
      newErrors.phone_number = "Enter a valid phone number (7–15 digits)";

    if (!formData.experience) newErrors.experience = "Experience is required";

    if (!formData.cover_letter || formData.cover_letter.length < 5)
      newErrors.cover_letter = "Cover letter must be at least 5 characters";

    if (!formData.resume) newErrors.resume = "Resume is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (!job) return;
  if (!validateForm()) return;

  setSubmitting(true);

  const form = new FormData();
  form.append("job_post_id", job.id); 
  // form.append("role_name", job.job_title);
  form.append("full_name", formData.full_name);
  form.append("email", formData.email);
  form.append("phone_number", formData.phone_number);
  form.append("experience", formData.experience);
  form.append("cover_letter", formData.cover_letter);
  form.append("resume", formData.resume);
  try {
    const response = await axios.post(
      "https://cloudifai.com/elitevet-tech/api/post_job_application",
      form,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    if (response.status === 201) {
      //  Success
      setShowSuccess(true);

      // reset form and resume input
      setFormData({
        full_name: "",
        email: "",
        phone_number: "",
        experience: "",
        cover_letter: "",
        resume: null,
      });
      setErrors({});
      setFileKey(Date.now()); // reset file input

      setTimeout(() => navigate("/careers"), 2000);
    }
  }  catch (error) {
  if (error.response?.status === 409) {
    // Duplicate email/job application
    setErrors({ ...errors, api: error.response.data.message || "You have already applied for this job." });
  } else {
    setErrors({ ...errors, api: "Submission failed. Please try again." });
  }
  console.error("Submission Error:", error.response?.data || error.message);
} finally {
  setSubmitting(false);
}

};


  if (loading)
    return <Spinner animation="border" className="d-block mx-auto my-5" />;

  if (!job) return <p className="text-center py-5">Job not found!</p>;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-black position-relative d-flex align-items-center">
        <div className="w-100 h-100 position-absolute top-0 start-0">
          <img src={heroImg} alt="Hero" className="img-fluid w-100 h-100 object-fit-cover" />
        </div>
        <div className="container position-relative z-3 pt-lg-8 pb-lg-1 pb-4">
            <div className="pb-5">
          <div className="row g-3 align-items-center justify-content-center">
            <div className="col-12 col-lg-8 text-center">
             <div className="content_outer text-center my-4 "><h1 className="text-white display-5 fw-bold font-primary">Join Our Team &amp; Build the Future with Us</h1></div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="g-3">
            <Col md={6}>
              <Link to="/careers" id="back_link">
                <i className="bi bi-arrow-left-short fs-3"></i> Back to Careers
              </Link>
              <div className="job_details mt-4">
                <h2 className="mb-3 sub-heading fw-semibold fs-2">
                  Apply for {job.job_title} 
                </h2>
                <p className="mb-1">{job.description}</p>
                <p>{job.requirements}</p>
              </div>
            </Col>

            <Col md={6}>
              <div className="card">
                <div className="card-body">
                  {errors.api && <div className="alert alert-danger">{errors.api}</div>}
                  <Form onSubmit={handleSubmit} noValidate>
                    {/* Role */}
                    <Form.Group className="mb-3">
                      <Form.Label>Role</Form.Label>
                      <Form.Control value={job.job_title} disabled />
                    </Form.Group>

                    {/* Full Name / Email */}
                    <Row className="mb-3 g-3">
                      <Col md={6}>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                          type="text"
                          id="full_name"
                          value={formData.full_name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className={errors.full_name ? "is-invalid" : ""}
                          required
                        />
                        <div className="invalid-feedback">{errors.full_name}</div>
                      </Col>
                      <Col md={6}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          className={errors.email ? "is-invalid" : ""}
                          required
                        />
                        <div className="invalid-feedback">{errors.email}</div>
                      </Col>
                    </Row>

                    {/* Phone / Experience */}
                    <Row className="mb-3 g-3">
                      <Col md={6}>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          type="tel"
                          id="phone_number"
                          value={formData.phone_number}
                          onChange={handleChange}
                          placeholder="Enter your phone"
                          className={errors.phone_number ? "is-invalid" : ""}
                          required
                        />
                        <div className="invalid-feedback">{errors.phone_number}</div>
                      </Col>
                      <Col md={6}>
                        <Form.Label>Experience (years)</Form.Label>
                        <Form.Control
                          type="number"
                          id="experience"
                          value={formData.experience}
                          onChange={handleChange}
                          placeholder="Years of experience"
                          className={errors.experience ? "is-invalid" : ""}
                          required
                        />
                        <div className="invalid-feedback">{errors.experience}</div>
                      </Col>
                    </Row>

                    {/* Resume */}
                    <Form.Group className="mb-3">
                      <Form.Label>
                        Resume <span className="fs-14 fw-medium text-danger">(Max 2MB, .pdf, .doc, .docx)</span>
                      </Form.Label>
                      <Form.Control
                        key={fileKey} // <-- reset input after submit
                        type="file"
                        id="resume"
                        onChange={handleChange}
                        className={errors.resume ? "is-invalid" : ""}
                        required
                      />
                      <div className="invalid-feedback">{errors.resume}</div>
                    </Form.Group>

                    {/* Cover Letter */}
                    <Form.Group className="mb-3">
                      <Form.Label>Cover Letter</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        id="cover_letter"
                        value={formData.cover_letter}
                        onChange={handleChange}
                        placeholder="Max 300 characters"
                        className={errors.cover_letter ? "is-invalid" : ""}
                        required
                      />
                      <div className="invalid-feedback">{errors.cover_letter}</div>
                    </Form.Group>

                    {/* Buttons */}
                    <div className="text-end">
                      <Button
                        variant="secondary"
                        className="me-2"
                        onClick={() => navigate(-1)}
                        disabled={submitting}
                      >
                        Back
                      </Button>
                      <Button type="submit" variant="primary" disabled={submitting}>
                        {submitting ? "Submitting..." : "Submit"}
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>

          {/* Success Toast */}
          <AnimatePresence>
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.3 }}
                className="position-fixed bottom-0 end-0 p-3"
                style={{ zIndex: 9999 }}
              >
                <div className="toast show text-white bg-success border-0 shadow-lg">
                  <div className="d-flex">
                    <div className="toast-body">🎉 Application submitted successfully!</div>
                    <button
                      type="button"
                      className="btn-close btn-close-white me-2 m-auto"
                      onClick={() => setShowSuccess(false)}
                    ></button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </section>
    </>
  );
};

export default Jobapply;
