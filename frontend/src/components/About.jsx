import React from "react";
import { neoSoft, cardClass } from "../utils/styles";

function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-12">
      <div className={cardClass} style={{ ...neoSoft }}>
        <h3 className="text-xl font-semibold">About Us</h3>
        <p className="text-gray-600 mt-3">
          We are an institute grounded in humane values and practical craft. Our
          teaching mixes philosophy with hands-on practice.
        </p>
        <div className="mt-4 text-sm text-gray-500">
          Our approach: small cohorts, mentor-led learning, and project-first
          education.
        </div>
      </div>
    </section>
  );
}

export default About;
