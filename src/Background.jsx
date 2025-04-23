import React from "react";
import { Link } from "react-router-dom"; 
import "./CSS/Background.css";
import Navbar from "./navbar.jsx";
function Background() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="cover-page">
      
            <Navbar/>
      <main className="main-content">
        <h2
          className="title"
          style={{
            background: "linear-gradient(90deg, #3b82f6, #ec4899, #f97316)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "3rem",
            fontWeight: "bold",
          }}
        >
          Start Your Coding Journey.
        </h2>

        <p className="description">
          Learn Python, JavaScript, and more — with interactive lessons, real
          projects, and guided support. No experience needed.
        </p>
        <button
          className="learn-button"
          onClick={scrollToBottom}
          style={{ fontFamily: "sans-serif" }}
        >
          Start Learning
        </button>
      </main>
    </div>
  );
}

export default Background;
