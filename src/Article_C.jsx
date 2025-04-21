import { useState } from "react";
import "./CSS/Article.css";
import topicsInfo from "./DATA/C";

function Article() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedTopicInfo = topicsInfo[selectedIndex];

  const handleNext = () => {
    if (selectedIndex < topicsInfo.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  return (
    <div className="article-container">
      {/* Side content */}
      <div className="contents">
        <h2>Contents</h2>
        <ul>
          {topicsInfo.map((topic, index) => (
            <li
              key={topic.topic}
              className={selectedIndex === index ? "active" : ""}
              onClick={() => setSelectedIndex(index)}
            >
              {topic.topic}
            </li>
          ))}
        </ul>
      </div>

      {/* Main content */}
      <div className="content-display">
        <h1>{selectedTopicInfo.topic}</h1>
        <p>{selectedTopicInfo.info}</p>

        {/* Next Button */}
        <button
          className="next-button"
          onClick={handleNext}
          disabled={selectedIndex === topicsInfo.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Article;
