import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { AnimatePresence, motion } from "framer-motion";
import heroImg from "../../../assets/Herobg.webp";
import "../Careers/jobapply.css"

const jobData = [
    {
        id: 1,
        title: "AWS Cloud Engineer",
        location: "India",
        technology: "AWS",
        description: "Design, implement, and optimize secure, scalable AWS solutions.",
        files: ["Resume", "Certificates"],
    },
    {
        id: 2,
        title: "Full Stack Developer",
        location: "US",
        technology: "React, Node.js",
        description: "Build modern web applications with React and Node.js.",
        files: ["Resume",],
    },
    {
        id: 3,
        title: "Azure DevOps Engineer",
        location: "Dubai",
        technology: "Azure",
        description: "Manage CI/CD pipelines and hybrid cloud deployments on Azure.",
        files: ["Resume", "Certificates"],
    },
    {
        id: 4,
        title: "Data Engineer",
        location: "Singapore",
        technology: "Google Cloud",
        description: "Develop data pipelines and analytics solutions on GCP.",
        files: ["Resume", "Certificates"],
    },
    {
        id: 5,
        title: "Salesforce Consultant",
        location: "Philippines",
        technology: "Salesforce",
        description: "Implement, integrate, and optimize Salesforce CRM solutions.",
        files: ["Resume", "Certificates"],
    },
];


const Jobapply = () => {

    const { jobId } = useParams();
    const navigate = useNavigate();
    const job = jobData.find((j) => j.id === parseInt(jobId));

    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccess(true);
        e.target.reset();

        // Redirect after 2 seconds
        setTimeout(() => {
            navigate("/careers");
        }, 2000);
    };

    if (!job) return <p>Job not found!</p>;

    const formVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

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
                                        Join Our Team & Build the Future with Us
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 bg-white">
                <div className=" container">
                    <div className="row g-3">
                        <div className="col-12 col-md-6">
                            <Link to="/careers" id="back_link"><i className="bi bi-arrow-left-short fs-3"></i>Back to Careers</Link>

                            <div className="job_details  mt-4">
                                <h2
                                    className="mb-3 sub-heading fw-semibold fs-2">
                                    Apply for {job.title}
                                </h2>

                                <p className="mb-1">
                                    {job.description}
                                </p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet molestiae laborum odio placeat ipsam, consequuntur repellendus nobis nisi voluptates ducimus mollitia natus aut iure optio consequatur esse, explicabo dignissimos. Quam.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="card">
                                <div className="card-body">
                            <Form onSubmit={handleSubmit}>
                                {/* Role */}
                                <Form.Group controlId="role" className="mb-3">
                                    <Form.Label>Role</Form.Label>
                                    <Form.Select value={job.title} disabled>
                                        <option>{job.title}</option>
                                    </Form.Select>
                                </Form.Group>

                                {/* Full Name / Email */}
                                <Row className="mb-3 g-3">
                                    <Col md={6}>
                                        <Form.Group controlId="name">
                                            <Form.Label>Full Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter your full name" required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="email">
                                            <Form.Label>Email Address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter your email" required />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                {/* Phone / Experience */}
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group controlId="phone">
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control type="tel" placeholder="Enter your phone number" required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="experience">
                                            <Form.Label>Years of Experience</Form.Label>
                                            <Form.Control type="number" placeholder="Enter experience in years" min={0} required />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                {/* File Uploads */}
                                {job.files.map((file, index) => (
                                    <Form.Group key={index} controlId={`file-${index}`} className="mb-3">
                                        <Form.Label>{file}</Form.Label>
                                        <Form.Control type="file" required />
                                    </Form.Group>
                                ))}

                                {/* Cover Letter */}
                                <Form.Group controlId="coverLetter" className="mb-3">
                                    <Form.Label>Cover Letter</Form.Label>
                                    <Form.Control as="textarea" rows={4} placeholder="Write a short cover letter..." />
                                </Form.Group>

                                {/* Buttons */}
                                <div className="text-end">
                                    <Button variant="secondary" className="me-2" onClick={() => navigate(-1)}>
                                        Back
                                    </Button>
                                    <Button type="submit" variant="primary">
                                        Submit Application
                                    </Button>
                                </div>
                            </Form>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Container className="py-5">




                            {/* new tosta */}
                            <AnimatePresence>
                                {showSuccess && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                                        transition={{ duration: 0.4 }}
                                        className="position-fixed bottom-0 end-0 p-3"
                                        style={{ zIndex: 9999 }}
                                    >
                                        <div className="toast show align-items-center text-white bg-success border-0 shadow-lg">
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
                    </div>

                </div>
            </section>

        </>
    );
};

export default Jobapply;
