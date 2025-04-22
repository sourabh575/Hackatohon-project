import React, { useState } from 'react';
import ollama from 'ollama';
import './CSS/therapy.css';

const Therapy = () => {
  const [topic, setTopic] = useState('');
  const [output, setOutput] = useState([]);

  async function generateArticle(customPrompt, parameter) {
    try {
      const response = await ollama.chat({
        model: `samantha-mistral`,
        messages: [{ role: 'user', content: customPrompt }],
      });
      const content = response.message.content;
      setOutput((prevOutput) => [content,...prevOutput]);
    } catch (error) {
      setOutput((prevOutput) => ['Error: ' + error.message,...prevOutput]);
    }
  }

  const handleGenerate = () => {
    generateArticle(topic, 'latest');
  };

  return (
    <div className="topic-container">
      <div className="topic-card">
        <h2 className="topic-title">Therapy AI</h2>
        <p className="topic-subtitle">Your Friendly Ai</p>

        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter topic you want to study"
          className="topic-input"
        />

        <button onClick={handleGenerate} className="topic-button">
          Generate
        </button>
        <div id='outputBox'>

        {output.map((item, index) => (
            <div className="topic-output-box" key={index}>
            {item ? (
                <p>{item}</p>
            ) : (
                <p className="topic-placeholder">Generated text will appear here...</p>
            )}
          </div>
        ))}
      </div>
    </div>
        </div>
  );
};

export default Therapy;