import React, { useState } from 'react';
import './CSS/Topic.css';

const Topic = () => {
  const [topic, setTopic] = useState('');
  const [output, setOutput] = useState('');

  const handleGenerate = () => {
    if (topic.trim() !== '') {
      setOutput(`Here is a detailed explanation about "${topic}".\n\n${'Lorem ipsum dolor sit amet, '.repeat(100)}`);
    }
  };

  return (
    <div className="topic-container">
      <div className="topic-card">
        <h2 className="topic-title">Topic Mode</h2>
        <p className="topic-subtitle">Dive deep into specific topics</p>

        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter topic you want to study"
          className="topic-input"
        />

        <button
          onClick={handleGenerate}
          className="topic-button"
        >
          Generate
        </button>

        <div className="topic-output-box">
          {output ? (
            <p>{output}</p>
          ) : (
            <p className="topic-placeholder">Generated text will appear here...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topic;