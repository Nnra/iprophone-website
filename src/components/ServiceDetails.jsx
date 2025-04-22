import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaTools,
  FaShoppingBag,
  FaDatabase,
  FaFileAlt,
} from "react-icons/fa";

const serviceData = [
  {
    title: "Screen & Battery Repair",
    icon: <FaTools size={40} />,
    description:
      "We offer professional screen and battery repair services. Whether it's a cracked screen or a weak battery, we’ll have your phone working like new with high-quality parts and warranty coverage.",
  },
  {
    title: "Phone Accessories",
    icon: <FaShoppingBag size={40} />,
    description:
      "Stylish phone cases, screen protectors, chargers, and more. Our accessories protect your phone and match your lifestyle, available for all major phone models.",
  },
  {
    title: "Data Backup & Transfer",
    icon: <FaDatabase size={40} />,
    description:
      "Securely transfer or back up your contacts, photos, and app data. We ensure safe migration to your new device or cloud storage.",
  },
  {
    title: "Damage Report",
    icon: <FaFileAlt size={40} />,
    description:
      "Filing an insurance claim? We provide certified damage reports to support your process and help you get the compensation you deserve.",
  },
];

const ServiceDetails = () => {
  return (
    <Container className="my-5" id="service-details">
      <h2 className="text-center mb-4">Service Details</h2>
      <Row>
        {serviceData.map((service, idx) => (
          <Col md={6} className="mb-4" key={idx}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <div className="text-primary mb-3">{service.icon}</div>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServiceDetails;
