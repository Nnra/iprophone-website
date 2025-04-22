import React, { useState } from "react";
import repairData from "../data/repair-prices.json";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import emailjs from "emailjs-com";


const ContactForm = () => {
  const [reason, setReason] = useState("Repair Request");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [selectedRepairs, setSelectedRepairs] = useState([]);
  const [estimatedTotal, setEstimatedTotal] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [store, setStore] = useState("");


  const brands = [...new Set(repairData.map(item => item.brand))];
  const models = repairData.filter(item => item.brand === brand);
  const selectedModelData = models.find(item => item.model === model);

  const handleCheckboxChange = (item) => {
    setSelectedRepairs((prev) =>
      prev.includes(item) ? prev.filter(r => r !== item) : [...prev, item]
    );
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

    const templateParams = {
      reason,
      brand,
      model,
      color,
      selectedRepairs: selectedRepairs.join(", "),
      estimatedTotal,
      name,
      phone,
      email,
      message,
      store,
    };


    //console.log("Submitted:", formData);
    //alert("Thanks for contacting us!");


    emailjs.send(
        "service_m9tedfr",        // Service ID
        "template_b0tjqtf",       // Template ID
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY         // public key）
    )
    .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Thanks! Your message has been sent.");
    })
    .catch((err) => {
        console.error("FAILED...", err);
        alert("Oops! Something went wrong. Please try again.");
    });
  };

  return (
    <Card className="p-4 my-5 shadow">
      <h3 className="text-center mb-4">Contact Us</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Reason for Contact</Form.Label>
          <Form.Select value={reason} onChange={(e) => {
            setReason(e.target.value);
            if (e.target.value !== "Repair Request") {
              setBrand(""); setModel(""); setColor("");
              setSelectedRepairs([]); setEstimatedTotal(null);
            }
          }}>
            <option>Repair Request</option>
            <option>Customer Feedback</option>
            <option>Other</option>
          </Form.Select>
        </Form.Group>

        {reason === "Repair Request" && (
          <>
            <Row className="mb-3">
              <Col md={4}>
                <Form.Label>Phone Brand</Form.Label>
                <Form.Select value={brand} onChange={(e) => {
                  setBrand(e.target.value);
                  setModel(""); setColor(""); setSelectedRepairs([]); setEstimatedTotal(null);
                }}>
                  <option value="">-- Select Brand --</option>
                  {brands.map((b, i) => <option key={i} value={b}>{b}</option>)}
                </Form.Select>
              </Col>
              <Col md={4}>
                <Form.Label>Model</Form.Label>
                <Form.Select value={model} onChange={(e) => {
                  setModel(e.target.value); setColor(""); setSelectedRepairs([]); setEstimatedTotal(null);
                }}>
                  <option value="">-- Select Model --</option>
                  {models.map((m, i) => <option key={i} value={m.model}>{m.model}</option>)}
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

            <Form.Label>Repair Items</Form.Label>
            <Row className="mb-3">
              {selectedModelData && Object.keys(selectedModelData.repairs).map((item, i) => (
                <Col xs={6} md={4} key={i}>
                  <Form.Check
                    type="checkbox"
                    label={item}
                    checked={selectedRepairs.includes(item)}
                    onChange={() => handleCheckboxChange(item)}
                  />
                </Col>
              ))}
            </Row>

            <div className="text-center mb-3">
              <Button variant="outline-primary" onClick={handleEstimate}>Get Estimate</Button>
            </div>

            {estimatedTotal !== null && (
              <h5 className="text-center text-success mb-4">
                Estimated Repair Total: ${estimatedTotal} AUD
              </h5>
            )}
          </>
        )}

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-4">
            <Form.Label>Select Store</Form.Label>
            <Form.Select
                value={store}
                onChange={(e) => setStore(e.target.value)}
                required
            >
                <option value="">-- Select Store --</option>
                <option value="Armada Arndale Store">Armada Arndale Store</option>
                <option value="Harbour Town Store">Harbour Town Store</option>
                <option value="Hilton Plaza Store">Hilton Plaza Store</option>
            </Form.Select>
        </Form.Group>


        <Form.Group className="mb-4">
          <Form.Label>Message / Notes</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Write your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit">Submit</Button>
        </div>
      </Form>
    </Card>
  );
};

export default ContactForm;
