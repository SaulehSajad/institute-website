import React from "react";
import { neoSoft, cardClass } from "../utils/styles";

function Courses({ courses }) {
  return (
    <section id="courses" className="max-w-6xl mx-auto px-4 py-12">
      <SectionHeader
        title="Our Courses"
        description="Courses curated for faith  and moral Guidence."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
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

const CourseCard = ({ course }) => (
  <article className={cardClass} style={{ ...neoSoft }}>
    <h3 className="font-semibold text-gray-900">{course.courseName}</h3>
    <p className="text-sm text-gray-600 mt-2">{course.summary}</p>
    <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
      <span>{course.duration}</span>
      <span>{course.level}</span>
    </div>
    <div className="mt-4">
      <a href="#admission" className="text-sm font-medium">
        Enroll
      </a>
    </div>
  </article>
);

export default Courses;
