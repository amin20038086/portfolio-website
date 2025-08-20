import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        <div className="skill-card">
          <h3>Programming Languages</h3>
          <ul>
            <li>Python</li>
            <li>Java</li>
            <li>SQL (Postgres, MySQL)</li>
            <li>HTML</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Libraries & Frameworks</h3>
          <ul>
            <li>NumPy, Pandas, Matplotlib, Seaborn</li>
            <li>Scikit-learn</li>
            <li>TensorFlow</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Developer Tools</h3>
          <ul>
            <li>Jupyter Notebook</li>
            <li>Google Colab</li>
            <li>VS Code</li>
            <li>Docker</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Soft Skills</h3>
          <ul>
            <li>Analytical Thinking</li>
            <li>Team Collaboration</li>
            <li>Problem-Solving</li>
            <li>Time Management</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
