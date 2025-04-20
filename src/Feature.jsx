import React from "react";
import "./CSS/Feature.css"; 

const Feature = () => {
  const features = [
    { title: "Topic Mode", description: "Dive deep into specific topics" },
    { title: "Writing Mode", description: "Create essays, articles, and notes" },
    { title: "Practice Quiz", description: "Test your knowledge with quick quizzes" },
    { title: "Read Articles", description: "Stay updated with curated articles" },
  ];

  return (
    <div className="feature-page">
      <div className="feature-header">Explore Modes</div>
      <div className="feature-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-title">{feature.title}</div>
            <div className="feature-desc">{feature.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
