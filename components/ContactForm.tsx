import { useState } from "react";
import {StyledContactForm, Input, Textarea, Label } from "@/styles/ContactFormStyle";
import { GetStartedButton } from "@/styles/HomePageStyles";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setIsSubmitting(false);
      setResponseMessage(data.message || "Thank you for your message!");
    } catch {
      setIsSubmitting(false);
      setResponseMessage("Failed to send your message. Please try again later.");
    }
  };

  return (
    <StyledContactForm onSubmit={handleSubmit} className="contact-form">
      
      <h1 style={{ color: "white", marginBottom: "50px", marginTop: "-90px", fontSize: "3rem", fontWeight: "600" }}>Contact Us</h1>


      <div>
        <Label>Name *</Label>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Label>Subject *</Label>
        <Input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Label>Email *</Label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Label>Message *</Label>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        />
      </div>
      <GetStartedButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </GetStartedButton>

      {responseMessage && <p>{responseMessage}</p>}
    </StyledContactForm>
  );
};

export default ContactForm;
