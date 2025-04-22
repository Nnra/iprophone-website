//import React from "react";
//import { Container, Navbar, Nav, Carousel, Card, Row, Col, Button } from "react-bootstrap";
//import { FaTools, FaBatteryFull, FaShoppingBag, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
//import "bootstrap/dist/css/bootstrap.min.css";
//import './custom.css';  // Add this import at the top of your App.js file.

import './custom.css';  // Add this import at the top of your App.js file.
import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Carousel,
  Card,
  Row,
  Col,
  Button,
  Form,
} from "react-bootstrap";
import {
  FaTools,
  FaBatteryFull,
  FaShoppingBag,
  FaDatabase,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HeroZoomImage from './HeroZoomImage';
import FloatingContactButton from './FloatingContactButton';
import BackToTopButton from "./BackToTopButton";
import RepairInquiryForm from "./components/RepairInquiryForm";
import ContactForm from "./components/ContactForm";
import ServiceDetails from "./components/ServiceDetails";

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {isHome && <HeroZoomImage />} {/* 只在首頁顯示 Hero 圖 */}
      {/* 這裡放你的內容區塊，例如 Nav、Banner、Services、Footer 等 */}
    </>
  );
};

const App = () => {
  return (
    <>
      {/* Navigation */}
      <Navbar bg="primary" variant="dark" expand="lg" className="p-3">
        <Container>
          <Navbar.Brand href="#home">I PRO PHONE</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#locations">Locations</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <BrowserRouter>
      <Routes>
        <Route path="*" element={<Layout />} />
      </Routes>
    </BrowserRouter>

      {/* Banner */}
      {/*
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "400px", objectFit: "cover" }}
            src="/iprophone-website/images/banner1.jpg"
            alt="Phone Accessories"
          />
          <Carousel.Caption>
            <h3>Premium Phone Accessories</h3>
            <p>Stylish and durable options for all devices</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "400px", objectFit: "cover" }}
            src="/iprophone-website/images/banner2.jpg"
            alt="Repair Services"
          />
          <Carousel.Caption>
            <h3>Professional Phone Repairs</h3>
            <p>Quick fixes for screens, batteries, and more!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      */}


      {/* About */}
      <Container className="my-5" id="about">
        <h2 className="text-center">About I PRO PHONE</h2>
        <p className="text-center">
          We provide high-quality phone repair services, accessories, and expert tech support across three convenient locations.
        </p>
      </Container>

      {/* Services */}

      <ServiceDetails />


      {/* Locations */}
      <Container className="my-5" id="locations">
        <h2 className="text-center mb-4">Our Stores</h2>
        <Row className="text-center">
          <Col md={4} className="mb-4">
            <FaMapMarkerAlt size={30} />
            <h5 className="mt-2">Armada Arndale Store</h5>
            <p>Phone: 0481 300 121</p>
            <Button
              variant="outline-primary"
              href="https://www.google.com/maps/dir/?api=1&destination=Armada+Arndale"
              target="_blank"
            >
              Get Directions
            </Button>
          </Col>
          <Col md={4} className="mb-4">
            <FaMapMarkerAlt size={30} />
            <h5 className="mt-2">Harbour Town Store</h5>
            <p>Phone: 0478 914 598</p>
            <Button
              variant="outline-primary"
              href="https://www.google.com/maps/dir/?api=1&destination=Harbour+Town+Adelaide"
              target="_blank"
            >
              Get Directions
            </Button>
          </Col>
          <Col md={4} className="mb-4">
            <FaMapMarkerAlt size={30} />
            <h5 className="mt-2">Hilton Plaza Store</h5>
            <p>Phone: 0481 616 218</p>
            <Button
              variant="outline-primary"
              href="https://www.google.com/maps/dir/?api=1&destination=Hilton+Plaza+Adelaide"
              target="_blank"
            >
              Get Directions
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Contact Us & Repair Query Form*/}
      <Container id="contact">
        <ContactForm />
      </Container>

      <>
      {/* HeroVideoScroll 其他內容 */}
      <FloatingContactButton />
    </>
      <BackToTopButton />

      {/* Footer */}
      <footer className="bg-primary text-white text-center p-3">
        <p className="mb-0">© 2025 I PRO PHONE. All rights reserved.</p>
      </footer>
    </>
  );
};

export default App;