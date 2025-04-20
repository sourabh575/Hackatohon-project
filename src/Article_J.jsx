import { useState } from "react";
import "./CSS/Article.css";
import topicsInfo from "./DATA/J"
function Article() { 
  const [selectedTopic, setSelectedTopic] = useState("datatype");

  const selectedTopicInfo = topicsInfo.find((topic) => topic.topic === selectedTopic);

  return (
    <div className="article-container">
      {/* side content yaha dikhega*/}
      <div className="contents">
        <h2>Contents</h2>
        <ul>
          {topicsInfo.map((topic) => (
            <li
              key={topic.topic}
              className={selectedTopic === topic.topic ? "active" : ""}
              onClick={() => setSelectedTopic(topic.topic)}
            >
              {topic.topic}
            </li>
          ))}
        </ul>
      </div>

      <div className="content-display">
        <h1>{selectedTopicInfo.topic}</h1>
        <p>{selectedTopicInfo.info}</p>
      </div>
    </div>
  );
}

export default Article;
