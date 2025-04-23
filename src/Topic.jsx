import React, { useState } from 'react';
import ollama from 'ollama';
import './CSS/Topic.css';
import Navbar from "./navbar.jsx";
const Topic = () => {
  const [topic, setTopic] = useState('');
  const [output, setOutput] = useState([]);
  const [format, setFormat] = useState('text');
  const [examples, setExamples] = useState(true);
  const [tone, setTone] = useState('formal');
  const [language, setLanguage] = useState('English');
  const [maxLength, setMaxLength] = useState(50);
  const [relatedTopics, setRelatedTopics] = useState(false);
  const [depth, setDepth] = useState('detailed');
  const [loading, setLoading] = useState(false); 

  async function generateArticle(customPrompt, parameter) {
    try {
      setLoading(true);
      const response = await ollama.chat({
        model: 'deepseek-r1:1.5b',
        messages: [{ role: 'user', content: customPrompt }],
      });
      const content = response.message.content;
  
      const cleanedContent = content.replace(/<think>.*?<\/think>/gs, '').trim();
      const result = cleanedContent.replace(/\*\*(.*?)\*\*/g, '');
      setOutput((prevOutput) => [result, ...prevOutput]);
    } catch (error) {
      setOutput((prevOutput) => ['Error: ' + error.message, ...prevOutput]);
    } finally {
      setLoading(false);
    }
  }
  

  const handleGenerate = () => {
    const customPrompt = `
Please generate a ${depth} explanation about the topic "${topic}".
- Format: ${format}
- Tone: ${tone}
- Language: ${language}
- Include examples: ${examples ? 'Yes' : 'No'}
- Include related topics: ${relatedTopics ? 'Yes' : 'No'}
- Response length: strictly should be around ${maxLength} characters.
Start your explanation below:
`;
    generateArticle(customPrompt, 'latest');
  };

  return (
    <div>
      <Navbar/>
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
        <div className="topic-options">
          <label>
            Depth:
            <select value={depth} onChange={(e) => setDepth(e.target.value)}>
              <option value="brief">Brief</option>
              <option value="detailed">Detailed</option>
              <option value="in-depth">In-depth</option>
            </select>
          </label>

          <label>
            Format:
            <select value={format} onChange={(e) => setFormat(e.target.value)}>
              <option value="text">Text</option>
              <option value="bullet">Bullet Points</option>
              <option value="summary">Summary</option>
            </select>
          </label>

          <label>
            Tone:
            <select value={tone} onChange={(e) => setTone(e.target.value)}>
              <option value="formal">Formal</option>
              <option value="casual">Casual</option>
              <option value="academic">Academic</option>
            </select>
          </label>

          <label>
            Language:
            <input
              type="text"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            />
          </label>

          <label>
            Max Length:
            <input
              type="number"
              value={maxLength}
              onChange={(e) => setMaxLength(Number(e.target.value))}
              min={100}
              max={2000}
            />
          </label>

          <label>
            <input
              type="checkbox"
              checked={examples}
              onChange={() => setExamples(!examples)}
            />
            Include Examples
          </label>

          <label>
            <input
              type="checkbox"
              checked={relatedTopics}
              onChange={() => setRelatedTopics(!relatedTopics)}
            />
            Show Related Topics
          </label>
        </div>
        <button onClick={handleGenerate} className="topic-button">
          Generate
        </button>

        {loading ? (
          <div className="loading-text">Generating...</div>
        ) : (
          <div id="outputBox">
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
        )}
      </div>
    </div>
    </div>
  );
};

export default Topic;
