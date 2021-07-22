import React from "react";
import About from "./about";
import Education from "./education";
import Experience from "./experience";
import Projects from "./projects";
import Card from "../../components/card";

const Home = () => {
  return (
    <div>
      <About></About>
      <hr className="section-divider"></hr>
      <Experience></Experience>
      <hr className="section-divider"></hr>
      <Projects></Projects>
      <hr className="section-divider"></hr>
      <Education></Education>
    </div>

  )
}
export default Home;