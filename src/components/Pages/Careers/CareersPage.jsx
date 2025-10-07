import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import heroImg from "../../../assets/Herobg.webp";
import { Container, Row, Col, Form, Card, Button, Spinner, CardFooter } from "react-bootstrap";
import Select from "react-select";
import { AnimatePresence, motion } from "framer-motion";
import "../Careers/careers.css";
import { useNavigate } from "react-router-dom";

const CareersPage = () => {
    const navigate = useNavigate();
    const [jobData, setJobData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [locationFilter, setLocationFilter] = useState([]); //make it an array
    const [techFilter, setTechFilter] = useState([]); // make it an array

    // Fetch job data from API
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get("https://cloudifai.com/elitevet-tech/api/get_job_roles");
                setJobData(response.data.data);
            } catch (error) {
                console.error("Error fetching job roles:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchJobs();
    }, []);

    // Filter out expired jobs
    const activeJobs = useMemo(() => {
        const now = new Date();
        return jobData.filter((job) => !job.expires_at || new Date(job.expires_at) > now);
    }, [jobData]);

    // Unique options for dropdowns
    const locationOptions = useMemo(
        () => [...new Set(activeJobs.map((job) => job.location))].map((loc) => ({ value: loc, label: loc })),
        [activeJobs]
    );

    const techOptions = useMemo(
        () => [...new Set(activeJobs.map((job) => job.requirements))].map((tech) => ({ value: tech, label: tech })),
        [activeJobs]
    );

    // Apply filters
    const filteredJobs = useMemo(() => {
        return activeJobs.filter((job) => {
            const search = searchTerm.toLowerCase();
            const matchesSearch =
                job.job_title.toLowerCase().includes(search) ||
                job.requirements.toLowerCase().includes(search);
            // const matchesSearch = job.job_title.toLowerCase().includes(searchTerm.toLowerCase());

            //  multiple locations
            const matchesLocation =
                locationFilter.length === 0
                    ? true
                    : locationFilter.some((loc) => job.location === loc.value);

            // multiple techs
            const matchesTech =
                techFilter.length === 0
                    ? true
                    : techFilter.some((tech) =>
                        job.requirements.toLowerCase().includes(tech.value.toLowerCase())
                    );

            return matchesSearch && matchesLocation && matchesTech;
        });
    }, [activeJobs, searchTerm, locationFilter, techFilter]);

    const formatTitleForURL = (title) => title.toLowerCase().replace(/\s+/g, "-");

    return (
        <>
            {/* Hero Section */}
            <section className="bg-black position-relative d-flex align-items-center">
                <div className="w-100 h-100 position-absolute top-0 start-0 bg-grd-3">
                    {/* <img src={heroImg} alt="Hero" className="img-fluid w-100 h-100 object-fit-cover" /> */}
                </div>
                <div className="container position-relative z-3 pt-lg-8 pb-lg-1 pb-4">
                    <div className="pb-4">
                        <div className="row g-3 align-items-center justify-content-center">
                            <div className="col-12 col-lg-8 text-center my-4">
                                <h1 className="text-white display-5 fw-semibold font-primary">Explore Current <br className="d-none d-lg-block" /> Opportunities</h1>
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
                                    onChange={(selected) => setLocationFilter(selected || [])} // lways array
                                    isClearable
                                    isMulti // enable multiple select
                                    placeholder="Filter by Location"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Label>Technology</Form.Label>
                                <Select
                                    options={techOptions}
                                    value={techFilter}
                                    onChange={(selected) => setTechFilter(selected || [])} // always array
                                    isClearable
                                    isMulti //enable multiple select
                                    placeholder="Filter by Technology"
                                />
                            </Col>
                        </Row>
                    </div>

                    {/* Job Listings */}
                    {loading ? (
                        <div className="text-center py-5">
                            <Spinner animation="border" />
                        </div>
                    ) : (
                        <Row as={motion.div} layout className="g-3">
                            <AnimatePresence>
                                {filteredJobs.length > 0 ? (
                                    filteredJobs.map((job) => {
                                        const jobURL = `/careers/apply/${job.id}/${formatTitleForURL(job.job_title)}`;
                                        return (
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
                                                    <Card.Body className="pb-1">
                                                        <Card.Title className="sub-heading mb-2 fw-semibold ">
                                                            {job.job_title}
                                                        </Card.Title>
                                                        <Card.Subtitle className="mb-2 fs-14 fw-normal line-clamp-1 ">
                                                            {job.location} • {job.requirements}
                                                        </Card.Subtitle>
                                                        <p className="mb-3 line-clamp-2">{job.description}</p>
                                                    </Card.Body>
                                                    <CardFooter className="bg-white border-0 rounded-bottom-3">
                                                        <div className="d-flex align-items-center gap-2 mb-2 justify-content-end">
                                                            <i className="bi bi-buildings fs-5 text-secondary"></i>
                                                            <p>{job.company_name}</p>
                                                        </div>
                                                        <div className=" d-flex align-items-center justify-content-between">
                                                            <Button

                                                                className="rounded-pill px-3 bg-pry border-0"
                                                                onClick={() => navigate(jobURL)}
                                                            >
                                                                Apply Now
                                                            </Button>
                                                            <p>
                                                                <i className="bi bi-calendar4-range"></i> &nbsp;
                                                                {new Date(job.created_at).toLocaleDateString("en-GB", {
                                                                    day: "2-digit",
                                                                    month: "short",
                                                                })}
                                                                &nbsp; - &nbsp;
                                                                {new Date(job.expires_at).toLocaleDateString("en-GB", {
                                                                    day: "2-digit",
                                                                    month: "short",
                                                                })}
                                                            </p>
                                                        </div>
                                                    </CardFooter>
                                                </Card>
                                            </Col>
                                        );
                                    })
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
                    )}
                </Container>
            </section>
        </>
    );
};

export default CareersPage;
