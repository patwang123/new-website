import React from "react";
import About from "./about";
import Education from "./education";
import Projects from "./projects";

const Home = () => {
  return (
    <div>
      <About></About>
      <hr className="section-divider"></hr>
      <Projects></Projects>
      <hr className="section-divider"></hr>
      <Education></Education>
    </div>
  )
}
export default Home;