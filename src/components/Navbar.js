import React from "react";
import "../App.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">My Portfolio</h2>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
