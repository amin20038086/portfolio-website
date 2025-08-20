import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My Projects</h2>

      <div className="projects-grid">
        {/* Project 1 */}
        <div className="project-card">
          <h3>ML Model for Password Security</h3>
          <p>
            Built a machine learning model to assess password strength and detect 
            vulnerable patterns. Optimized with feature engineering and cross-validation.
          </p>
          <p><strong>Tech:</strong> Python, Scikit-learn, Pandas, NumPy</p>
          <div className="project-links">
            <a
              href="https://github.com/yourusername/password-security-ml"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h3>Intelligent Gait Analysis & Anomaly Detection</h3>
          <p>
            Developed CNN-LSTM models to analyze gait patterns using IMU sensors, 
            providing a cost-effective telehealth solution for anomaly detection.
          </p>
          <p><strong>Tech:</strong> Python, Mediapipe, TensorFlow</p>
          <div className="project-links">
            <a
              href="https://github.com/yourusername/gait-analysis"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
