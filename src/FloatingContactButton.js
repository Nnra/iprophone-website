import React from "react";
import { FaEnvelope } from "react-icons/fa";
import "./FloatingContactButton.css"; // 自己加樣式

const FloatingContactButton = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button className="floating-contact-button" onClick={scrollToContact}>
      <FaEnvelope size={24} />
    </button>
  );
};

export default FloatingContactButton;
