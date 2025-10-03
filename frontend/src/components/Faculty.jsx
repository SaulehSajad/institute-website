import React from "react";
import { neoSoft, cardClass } from "../utils/styles";

function Faculty({ faculty }) {
  return (
    <section id="faculty" className="max-w-6xl mx-auto px-4 py-12">
      <SectionHeader
        title="Faculty"
        description="Experienced people who care about ethics and knowledge."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faculty.map((member) => (
          <FacultyCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}

const SectionHeader = ({ title, description }) => (
  <>
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h2>
    <p className="text-gray-600 mb-6">{description}</p>
  </>
);

const FacultyCard = ({ member }) => (
  <div
    className={cardClass}
    style={{ display: "flex", gap: 16, alignItems: "center", ...neoSoft }}
  >
    <img
      src={member.avatar}
      alt={member.name}
      className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
    />
    <div>
      <div className="font-semibold text-gray-900">{member.name}</div>
      <p className="text-sm text-gray-500 ">{member.bio}</p> <hr />
      <div className="text-sm text-gray-600">{member.title}</div>
    </div>
  </div>
);

export default Faculty;
