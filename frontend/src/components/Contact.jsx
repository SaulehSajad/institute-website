import React, { useState } from "react";
import { neoSoft, cardClass } from "../utils/styles";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted (demo). In production, send this to an API.");
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ContactForm form={form} onChange={onChange} onSubmit={onSubmit} />
        <ContactInfo />
      </div>
    </section>
  );
}

const ContactForm = ({ form, onChange, onSubmit }) => (
  <div className={cardClass} style={{ ...neoSoft }}>
    <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <input
        name="name"
        value={form.name}
        onChange={onChange}
        placeholder="Your name"
        className="p-3 rounded-lg border border-gray-100"
      />
      <input
        name="email"
        value={form.email}
        onChange={onChange}
        placeholder="Email"
        className="p-3 rounded-lg border border-gray-100"
      />
      <textarea
        name="message"
        value={form.message}
        onChange={onChange}
        rows={5}
        placeholder="Message"
        className="p-3 rounded-lg border border-gray-100"
      />
      <button
        type="submit"
        className="px-4 py-2 rounded-xl font-medium"
        style={{
          background: "linear-gradient(90deg,#FFFFFF,#F5F5F5)",
          boxShadow: "6px 6px 18px rgba(0,0,0,0.05)",
        }}
      >
        Send Message
      </button>
    </form>
  </div>
);

const ContactInfo = () => (
  <div className={cardClass} style={{ ...neoSoft }}>
    <h4 className="font-semibold">Visit</h4>

    <div className="w-full h-96">
      <iframe
        title="google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.4719318449866!2d74.89971187540195!3d33.87749762693774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1f5da2ee03945%3A0xb2e8581c53ef306e!2sDarul%20Uloom%20Alamdar%20(ra)%20Main%20town%20Pulwama(Malik%20pora)!5e0!3m2!1sen!2sin!4v1759297762087!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div className="mt-2 text-sm text-gray-600">
      VWG2+XWV, Pulwama-Srinagar Rd, Malikpora, Chandgam, Pulwama, Jammu and
      Kashmir 192301
    </div>
    <div className="mt-4 text-sm text-gray-600">
      Opening: Mon — sat, 9:00 — 18:00
    </div>
  </div>
);

export default Contact;
