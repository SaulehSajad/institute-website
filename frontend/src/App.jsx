import React from "react";
import { instituteData } from "./data/instituteData";
import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import Courses from "./components/Courses";
import Faculty from "./components/Faculty";
import Admission from "./components/Admission";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const { institute, heroImages, courses, faculty } = instituteData;

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#FFFFFF_0%,#F5F5F5_100%)] text-gray-800">
      <Navbar instituteName={institute.name} />
      <main>
        <HeroCarousel
          images={heroImages}
          title={institute.name}
          tagline={institute.tagline}
          description={institute.description}
        />
        <Courses courses={courses} />
        <Faculty faculty={faculty} />
        <Admission />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
