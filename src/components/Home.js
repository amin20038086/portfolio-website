import React from "react";
import profilePic from "../assets/profile.jpg";
import { Link } from "react-scroll";
import "./Home.css";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <div className="text">
          <h1>
            Hi, I'm <span className="highlight">Amin Shajahan</span>
          </h1>
          <h2>Machine Learning & Data Science Enthusiast</h2>
          <p>
            B.Tech Computer Science graduate skilled in <b>Machine Learning, Data
            Analysis, and Web Development</b>. I enjoy building intelligent systems,
            analyzing data-driven insights, and solving real-world challenges
            with AI-powered solutions.
          </p>

          {/* Smooth scroll button */}
          <Link to="projects" smooth={true} duration={600} className="btn">
            Explore My Projects
          </Link>
        </div>

        <div className="image">
          <img src={profilePic} alt="Amin Shajahan" />
        </div>
      </div>
    </section>
  );
}

export default Home;
