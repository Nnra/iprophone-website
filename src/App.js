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

      {/* Banner */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "400px", objectFit: "cover" }}
            src="/images/banner1.jpg"
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
            src="/images/banner2.jpg"
            alt="Repair Services"
          />
          <Carousel.Caption>
            <h3>Professional Phone Repairs</h3>
            <p>Quick fixes for screens, batteries, and more!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* About */}
      <Container className="my-5" id="about">
        <h2 className="text-center">About I PRO PHONE</h2>
        <p className="text-center">
          We provide high-quality phone repair services, accessories, and expert tech support across three convenient locations.
        </p>
      </Container>

      {/* Services */}
      <Container className="my-5" id="services">
        <h2 className="text-center mb-4">Our Services</h2>
        <Row>
          {/* Repair Category */}
          <Col md={3} className="mb-4">
            <Card className="text-center p-3">
              <FaTools size={40} className="mx-auto mb-2" />
              <Card.Body>
                <Card.Title>Screen & Battery Repair</Card.Title>
                <Card.Text>Fix broken screens and replace old batteries.</Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Accessories */}
          <Col md={3} className="mb-4">
            <Card className="text-center p-3">
              <FaShoppingBag size={40} className="mx-auto mb-2" />
              <Card.Body>
                <Card.Title>Phone Accessories</Card.Title>
                <Card.Text>Cases, screen protectors, chargers & more.</Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Data Backup */}
          <Col md={3} className="mb-4">
            <Card className="text-center p-3">
              <FaDatabase size={40} className="mx-auto mb-2" />
              <Card.Body>
                <Card.Title>Data Backup & Transfer</Card.Title>
                <Card.Text>Securely move or back up your phone data.</Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Damage Report */}
          <Col md={3} className="mb-4">
            <Card className="text-center p-3">
              <FaPhone size={40} className="mx-auto mb-2" />
              <Card.Body>
                <Card.Title>Damage Report</Card.Title>
                <Card.Text>We help provide reports for insurance claims.</Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Service Details Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Service Details</h2>
        <Row>
          <Col md={6} className="mb-4">
            <h4>Screen & Battery Repair</h4>
            <img
              src="/images/screen-repair.jpg"
              alt="Screen Repair"
              className="w-100 mb-3"
              style={{ height: "250px", objectFit: "cover" }}
            />
            <p>
              We offer professional screen repair services for all types of
              phones. Whether it's a cracked screen or a malfunctioning battery,
              our experts will have your phone working like new again in no time.
              We use high-quality parts and provide a warranty for peace of mind.
            </p>
          </Col>
          <Col md={6} className="mb-4">
            <h4>Phone Accessories</h4>
            <img
              src="/images/accessories.jpg"
              alt="Phone Accessories"
              className="w-100 mb-3"
              style={{ height: "250px", objectFit: "cover" }}
            />
            <p>
              We offer a wide range of phone accessories, from stylish phone
              cases and screen protectors to chargers and more. Our accessories
              are designed to keep your phone safe and stylish, with a variety of
              options to choose from for all phone models.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-4">
            <h4>Data Backup & Transfer</h4>
            <img
              src="/images/data-backup.jpg"
              alt="Data Backup"
              className="w-100 mb-3"
              style={{ height: "250px", objectFit: "cover" }}
            />
            <p>
              Protect your important data with our backup and transfer services.
              Whether you need to move your photos, contacts, or app data, our
              secure services will ensure that all your information is safely
              transferred to a new device or backed up to cloud storage.
            </p>
          </Col>
          <Col md={6} className="mb-4">
            <h4>Damage Report</h4>
            <img
              src="/images/damage-report.jpg"
              alt="Damage Report"
              className="w-100 mb-3"
              style={{ height: "250px", objectFit: "cover" }}
            />
            <p>
              If your phone is damaged and you're filing an insurance claim, we
              can provide you with a detailed damage report. This report will
              help ensure that your claim is processed quickly and accurately, so
              you can get the compensation you deserve.
            </p>
          </Col>
        </Row>
      </Container>

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

      {/* Contact Us */}
      <Container className="my-5" id="contact">
        <h2 className="text-center mb-4">Contact Us</h2>
        <Form className="mx-auto" style={{ maxWidth: "600px" }}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Write a message..." />
          </Form.Group>

          <Button variant="primary" type="submit">
            Send Message
          </Button>
        </Form>
      </Container>

      {/* Footer */}
      <footer className="bg-primary text-white text-center p-3">
        <p className="mb-0">© 2025 I PRO PHONE. All rights reserved.</p>
      </footer>
    </>
  );
};

export default App;
