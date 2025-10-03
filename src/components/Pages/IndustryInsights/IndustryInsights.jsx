import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroImg from "../../../assets/Herobg.webp";
import { Titles } from "../../Common/Titles";


const insightsData = [
    { id: 1, title: "The Future of IT Staffing", description: "Explore emerging trends in IT staffing, including remote hiring, AI-driven recruitment, and specialized skill sourcing.", category: "Staffing" },
    { id: 2, title: "Cloud Adoption in Enterprises", description: "How enterprises are leveraging cloud technologies for agility, scalability, and cost-efficiency in IT operations.", category: "IT Consulting" },
    { id: 3, title: "AI & Automation in Recruitment", description: "The role of AI-powered tools in simplifying recruitment, improving candidate experience, and reducing hiring timelines.", category: "Staffing" },
    { id: 4, title: "Digital Transformation Challenges", description: "Key challenges organizations face while implementing IT consulting solutions for digital transformation.", category: "IT Consulting" },
    { id: 5, title: "Skill Shortages in Tech Industry", description: "Addressing skill gaps in emerging technologies and strategies staffing agencies use to meet demand.", category: "Staffing" },
];

const IndustryInsights = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* Hero Section */}
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
                                        Industry Insights in Staffing & IT Consulting
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Insights Cards */}
            <section className="bg-white py-5">
                <Container>
                    {/* Title changed */}

                    <Titles text=" industry insignts" />
                    <h3 className='sub-title text-black mb-4 text-center'>Insights that bridge talent, technology, and business strategy</h3>
                    <Row className="g-3">
                        <AnimatePresence>
                            {insightsData.map((insight) => (
                                <Col key={insight.id} md={6} lg={4} as={motion.div} layout
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 30 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                >
                                    <Card className="h-100 shadow-sm rounded-3">
                                        <Card.Body>
                                            <Card.Title className="sub-heading mb-2 fw-semibold ">{insight.title}</Card.Title>
                                            <Card.Subtitle className="mb-2 badge bg-grd-3">{insight.category}</Card.Subtitle>
                                            <p>{insight.description}</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </AnimatePresence>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default IndustryInsights;
