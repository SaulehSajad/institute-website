import React from "react";
import { neoSoft, cardClass } from "../utils/styles";
import QR from "../assets/QR.jpg";

function Admission() {
  return (
    <section id="admission" className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AdmissionMain />
        <SupportSidebar />
      </div>
    </section>
  );
}

const AdmissionMain = () => (
  <div className={cardClass} style={{ gridColumn: "span 2", ...neoSoft }}>
    <h3 className="text-xl font-semibold">Admissions Open</h3>
    <p className="text-gray-600 mt-2">Join our next islah class.</p>
    <ul className="mt-4 text-sm text-gray-600 list-disc list-inside">
      <li>one on one student interaction</li>
      <li>Conversation with a faculty mentor</li>
      <li>doubt solving</li>
    </ul>
    <div className="mt-6">
      <a
        href="#contact"
        className="px-4 py-2 rounded-xl font-medium"
        style={{
          background: "linear-gradient(120deg,#F5F5DC,#FFFDD0)",
          boxShadow: "6px 6px 18px rgba(72,60,50,0.06)",
        }}
      >
        Start Application
      </a>
    </div>
  </div>
);

const SupportSidebar = () => (
  <aside className={cardClass} style={{ ...neoSoft }}>
    <h4 className="font-semibold">Support us</h4>
    <img
      src={QR}
      alt={"QRcode"}
      className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
    />

    <div className="mt-4 text-sm text-gray-700">
      <div>UPI: support@DarulUloomAlamdar.edu</div>
      <div className="mt-2">Phone: +91 90000 00000</div>
    </div>
  </aside>
);

export default Admission;
