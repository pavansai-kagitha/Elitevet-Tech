import React, { useState, useMemo } from "react";
import heroImg from "../../../assets/Herobg.webp";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import Select from "react-select";
import { AnimatePresence, motion } from "framer-motion";
import "../Careers/careers.css";
import { useNavigate } from "react-router-dom";


const jobData = [
    { id: 1, title: "AWS Cloud Engineer", location: "India", technology: "AWS", description: "Design, implement, and optimize secure, scalable AWS solutions." },
    { id: 2, title: "Full Stack Developer", location: "US", technology: "React, Node.js", description: "Build modern web applications with React and Node.js." },
    { id: 3, title: "Azure DevOps Engineer", location: "Dubai", technology: "Azure", description: "Manage CI/CD pipelines and hybrid cloud deployments on Azure." },
    { id: 4, title: "Data Engineer", location: "Singapore", technology: "Google Cloud", description: "Develop data pipelines and analytics solutions on GCP." },
    { id: 5, title: "Salesforce Consultant", location: "Philippines", technology: "Salesforce", description: "Implement, integrate, and optimize Salesforce CRM solutions." },
];

const CareersPage = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [locationFilter, setLocationFilter] = useState(null);
    const [techFilter, setTechFilter] = useState(null);

    const locationOptions = useMemo(
        () => [...new Set(jobData.map((job) => job.location))].map((loc) => ({ value: loc, label: loc })),
        []
    );

    const techOptions = useMemo(
        () => [...new Set(jobData.map((job) => job.technology))].map((tech) => ({ value: tech, label: tech })),
        []
    );

    const filteredJobs = jobData.filter((job) => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!locationFilter || job.location === locationFilter.value) &&
        (!techFilter || job.technology.toLowerCase().includes(techFilter.value.toLowerCase()))
    );

    return (
        <>
            {/* Hero Section */}
            <section className="bg-black position-relative d-flex align-items-center">
                <div className="w-100 h-100 position-absolute top-0 start-0">
                    <img src={heroImg} alt="Hero" className="img-fluid w-100 h-100 object-fit-cover" />
                </div>
                <div className="container position-relative z-3 pt-lg-8 pb-lg-1 pb-4">
                    <div className="pb-4">
                    <div className="row g-3 align-items-center justify-content-center">
                        <div className="col-12 col-lg-8 text-center my-4">
                            <h1 className="text-white display-5 fw-bold font-primary">Explore Current Opportunities</h1>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            {/* Job Filters + Listings */}
            <section className="bg-white py-5">
                <Container>
                    {/* Filters */}
                    <div className="bg-light-gray p-3 rounded-2 mb-3">
                        <Row className="g-3">
                            <Col md={4}>
                                <Form.Group controlId="search_job">
                                    <Form.Label>Search Job Title</Form.Label>
                                    <Form.Control
                                        type="search"
                                        placeholder="Search by job title..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Label>Location</Form.Label>
                                <Select
                                    options={locationOptions}
                                    value={locationFilter}
                                    onChange={setLocationFilter}
                                    isClearable
                                    placeholder="Filter by Location"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Label>Technology</Form.Label>
                                <Select
                                    options={techOptions}
                                    value={techFilter}
                                    onChange={setTechFilter}
                                    isClearable
                                    placeholder="Filter by Technology"
                                />
                            </Col>
                        </Row>
                    </div>

                    {/* Job Listings */}
                    <Row as={motion.div} layout className="g-3">
                        <AnimatePresence>
                            {filteredJobs.length > 0 ? (
                                filteredJobs.map((job) => (
                                    <Col
                                        md={6}
                                        lg={4}
                                        key={job.id}
                                        as={motion.div}
                                        layout
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 30 }}
                                        transition={{ duration: 0.35, ease: "easeInOut" }}
                                    >
                                        <Card className="h-100 shadow-sm rounded-3">
                                            <Card.Body>
                                                <Card.Title className="sub-heading mb-2 fw-semibold">{job.title}</Card.Title>
                                                <Card.Subtitle className="mb-2 fs-14 fw-normal">
                                                    {job.location} • {job.technology}
                                                </Card.Subtitle>
                                                <p className="mb-3">{job.description}</p>
                                                <Button
                                                    variant="primary"
                                                    className="rounded-pill px-3"
                                                    onClick={() => navigate(`/careers/apply/${job.id}`)}
                                                >
                                                    Apply Now
                                                </Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                            ) : (
                                <Col>
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-center sub-heading fw-semibold"
                                    >
                                        No jobs found.
                                    </motion.p>
                                </Col>
                            )}
                        </AnimatePresence>
                    </Row>
                </Container>
            </section>

        
        </>
    );
};

export default CareersPage;
