import React, { useState } from "react";
import repairData from "../data/repair-prices.json";
import { Form, Button, Card, Row, Col } from "react-bootstrap";

// 產生未來兩週日期
const getNext14Days = () => {
  const today = new Date();
  return Array.from({ length: 14 }, (_, i) => {
    const d = new Date(today);
    d.setDate(d.getDate() + i + 1);
    return d.toISOString().split("T")[0];
  });
};

const RepairInquiryForm = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [selectedRepairs, setSelectedRepairs] = useState([]);
  const [estimatedTotal, setEstimatedTotal] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [preferredDate, setPreferredDate] = useState("");

  const brands = [...new Set(repairData.map(item => item.brand))];
  const models = repairData.filter(item => item.brand === brand);
  const selectedModelData = models.find(item => item.model === model);
  const dateOptions = getNext14Days();

  const handleCheckboxChange = (item) => {
    if (selectedRepairs.includes(item)) {
      setSelectedRepairs(selectedRepairs.filter(r => r !== item));
    } else {
      setSelectedRepairs([...selectedRepairs, item]);
    }
  };

  const handleEstimate = () => {
    if (!selectedModelData || selectedRepairs.length === 0) {
      setEstimatedTotal(null);
      return;
    }
    const total = selectedRepairs.reduce((sum, item) => {
      return sum + (selectedModelData.repairs[item] || 0);
    }, 0);
    setEstimatedTotal(total);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      brand,
      model,
      color,
      selectedRepairs,
      estimatedTotal,
      name,
      phone,
      preferredDate,
      message
    };
    console.log("Submitted Data:", formData);
    alert("Thanks! We received your inquiry!");
  };

  return (
    <Card className="p-4 my-5 shadow">
      <h3 className="text-center mb-4">Quick Repair Quote</h3>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={4}>
            <Form.Label>Phone Brand</Form.Label>
            <Form.Select value={brand} onChange={(e) => {
              setBrand(e.target.value);
              setModel("");
              setColor("");
              setSelectedRepairs([]);
              setEstimatedTotal(null);
            }}>
              <option value="">-- Select Brand --</option>
              {brands.map((b, i) => (
                <option key={i} value={b}>{b}</option>
              ))}
            </Form.Select>
          </Col>
          <Col md={4}>
            <Form.Label>Model</Form.Label>
            <Form.Select value={model} onChange={(e) => {
              setModel(e.target.value);
              setColor("");
              setSelectedRepairs([]);
              setEstimatedTotal(null);
            }}>
              <option value="">-- Select Model --</option>
              {models.map((m, i) => (
                <option key={i} value={m.model}>{m.model}</option>
              ))}
            </Form.Select>
          </Col>
          <Col md={4}>
            <Form.Label>Color</Form.Label>
            <Form.Select value={color} onChange={(e) => setColor(e.target.value)}>
              <option value="">-- Select Color --</option>
              {selectedModelData?.colors?.map((c, i) => (
                <option key={i} value={c}>{c}</option>
              ))}
            </Form.Select>
          </Col>
        </Row>

        {selectedModelData && (
          <>
            <Form.Label>Repair Items</Form.Label>
            <Row className="mb-3">
              {Object.keys(selectedModelData.repairs).map((item, i) => (
                <Col xs={6} md={4} key={i}>
                  <Form.Check
                    type="checkbox"
                    id={`repair-${item}`}
                    label={item}
                    checked={selectedRepairs.includes(item)}
                    onChange={() => handleCheckboxChange(item)}
                  />
                </Col>
              ))}
            </Row>
          </>
        )}

        <div className="text-center mb-4">
          <Button variant="outline-primary" onClick={handleEstimate}>
            Get Estimate
          </Button>
        </div>

        {estimatedTotal !== null && (
          <h5 className="text-center text-success mb-4">
            Estimated Repair Total: ${estimatedTotal} AUD
          </h5>
        )}

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter phone number"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
            <Form.Label>Preferred Repair Date</Form.Label>
            <Form.Control
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]} // 今天
                max={new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]} // 14 天內
                required
            />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Message / Notes</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Any special request or note..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit">
            Submit Repair Request
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default RepairInquiryForm;
