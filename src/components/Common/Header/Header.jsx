import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Navbar,
  Offcanvas,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../Header/header.css";
import Button from "../Buttons/Button";


const Header = () => {
  const [open, setOpen] = useState(false);

  const [openDropdowns, setOpenDropdowns] = useState({}); // ONE STATE only!

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky)
    }
  }, [])

  // sticky Header 
  const isSticky = (e) => {
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    scrollTop >= 120 ? header.classList.add('is-sticky') :
      header.classList.remove('is-sticky')
  }

  // toggle dropdown (parent + sub dropdowns)
  const handleToggle = (id, isOpen) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [id]: isOpen,
    }));
  };

  const handleNavClick = () => {
    setOpen(false);       // close the offcanvas
    setOpenDropdowns({}); // optionally close all dropdowns
  };


  return (

    <header className="header-section">
      <Container>

        <Navbar expand="lg" className="p-0">
          {/* Logo Section  */}
          <Navbar.Brand>
            <NavLink to="/"> EliteVet Tech</NavLink>
          </Navbar.Brand>
          {/* End Logo Section  */}

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="start"
            show={open}
          >
            {/*mobile Logo Section  */}
            <Offcanvas.Header>
              <h1 className="logo">EliteVet Tech</h1>
              <span className="navbar-toggler ms-auto" onClick={toggleMenu}>
                <i className="bi bi-x-lg"></i>
              </span>
            </Offcanvas.Header>
            {/*end mobile Logo Section  */}

            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink className="nav-link" to="/" onClick={handleNavClick}>
                  Home
                </NavLink>
                <NavDropdown
                  title={<>
                    Service{" "}
                    <i
                      className={`fa-solid ${openDropdowns["services"] ? "fa-angle-up" : "fa-angle-down"
                        }`}
                    ></i>
                  </>}
                  id={`offcanvasNavbarDropdown-expand-lg`} show={!!openDropdowns["services"]}
                  onToggle={(isOpen) => handleToggle("services", isOpen)}>

                  {/* Nested Dropdown */}
                  <NavDropdown className="ps-2" drop="end" title={<>
                    Cloud Technologies{" "}
                    <i
                      className={`fa-solid ${openDropdowns["cloud"] ? "fa-angle-up" : "fa-angle-down"
                        }`}
                    ></i>
                  </>} id="web-submenu" show={!!openDropdowns["cloud"]}
                    onToggle={(isOpen) => handleToggle("cloud", isOpen)}>
                    <NavDropdown.Item as={NavLink} to="/services/cloud-technologies/aws" onClick={handleNavClick}>AWS</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/services/cloud-technologies/gcp" onClick={handleNavClick}>GCP</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/services/cloud-technologies/azure" onClick={handleNavClick}>Azure</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown.Item as={NavLink} to="/services/microsoft" onClick={handleNavClick}>Microsoft suite</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/services/gis" onClick={handleNavClick}>GIS</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/services/palantir" onClick={handleNavClick}>Palantair</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/services/salesforce" onClick={handleNavClick}>Salesforce</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/services/sap" onClick={handleNavClick}>SAP</NavDropdown.Item>
                  {/* Nested Dropdown */}
                  <NavDropdown className="ps-2" drop="end" title={<>
                    Process{" "}
                    <i
                      className={`fa-solid ${openDropdowns["process"] ? "fa-angle-up" : "fa-angle-down"
                        }`}
                    ></i>
                  </>} id="web-submenu" show={!!openDropdowns["process"]}
                    onToggle={(isOpen) => handleToggle("process", isOpen)}>
                    <NavDropdown.Item as={NavLink} to="/services/process/project-managers-progra-managers" onClick={handleNavClick}>Project managers & Program Managers</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/services/process/functional-consultants" onClick={handleNavClick}>Functional consultants</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/services/process/stratergic-consultants" onClick={handleNavClick}>Stratergic consultants</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/services/process/business-analysts-scrum-masters" onClick={handleNavClick}>Business Analysts & Scrum Masters</NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>
                {/* company */}
                <NavDropdown
                  title={<>
                    Company{" "}
                    <i
                      className={`fa-solid ${openDropdowns["company"] ? "fa-angle-up" : "fa-angle-down"
                        }`}
                    ></i>
                  </>}
                  id="company-dropdown" show={!!openDropdowns["company"]}
                  onToggle={(isOpen) => handleToggle("company", isOpen)}>

                  <NavDropdown.Item
                    as={NavLink}
                    to="/about"
                    onClick={handleNavClick}
                  >
                    About Us
                  </NavDropdown.Item>

                   <NavDropdown.Item
                    as={NavLink}
                    to="/operations"
                    onClick={handleNavClick}
                  >
                    Operations
                  </NavDropdown.Item>
                   <NavDropdown.Item
                    as={NavLink}
                    to="/careers"
                    onClick={handleNavClick}
                  >
                    Careers
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={NavLink}
                    to="/partners"
                    onClick={handleNavClick}
                  >
                    Partners
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={NavLink}
                    to="/testimonials"
                    onClick={handleNavClick}
                  >
                    Testimonials
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={NavLink}
                    to="/contact"
                    onClick={handleNavClick}
                  >
                    Contact
                  </NavDropdown.Item>
                 
                  
                </NavDropdown>
                {/* company */}
                {/* resources */}
                 <NavDropdown
                  title={<>
                    Resources{" "}
                    <i
                      className={`fa-solid ${openDropdowns["resources"] ? "fa-angle-up" : "fa-angle-down"
                        }`}
                    ></i>
                  </>}
                  id="resources-dropdown" show={!!openDropdowns["resources"]}
                  onToggle={(isOpen) => handleToggle("resources", isOpen)}>

                   <NavDropdown.Item
                    as={NavLink}
                    to="/IndustryInsights"
                    onClick={handleNavClick}
                  >
                    Industry Insignts
                  </NavDropdown.Item>
                </NavDropdown>
                {/* resources */}

               
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <div className="ms-md-4 ms-2">
            <NavLink className="d-none d-sm-inline-block text-decoration-none" to="/contact">
              <Button text="Get in Touch" classname="bg-primary text-white" />
            </NavLink>
            <li className="d-inline-block d-lg-none ms-3 toggle_btn">
              <i className={open ? "bi bi-x-lg" : "bi bi-list"} onClick={toggleMenu}></i>
            </li>
          </div>
        </Navbar>

      </Container>
    </header>
  );
};

export default Header;