import { useState } from "react";
import "./Article.css";

const topicsInfo = [
  {
    topic: 'datatype',
    info: 'In this article, we will introduce the concept of the knapsack 0/1 problem, a classic problem in computer science and operations research.'
  },
  {
    topic: 'Defining the Knapsack 0/1 Problem',
    info: 'The knapsack 0/1 problem is a variation of the traditional knapsack problem. Given a set of items, each with a weight and value, determine the subset of items to include in a knapsack such that the total weight does not exceed a given capacity.'
  },
  {
    topic: 'Understanding 0/1 Constraints',
    info: 'The key feature of the knapsack 0/1 problem is the 0/1 constraint, which means each item can either be included (1) or excluded (0) from the knapsack. This constraint simplifies the problem but makes it still challenging to solve.'
  },
  {
    topic: 'Importance of Knapsack 0/1 Problem',
    info: 'The knapsack 0/1 problem has significant practical applications, such as resource allocation and scheduling. Understanding how to solve this problem efficiently is crucial in various fields like logistics, finance, and computer science.'
  },
  {
    topic: 'Dynamic Programming Approach',
    info: 'One of the most efficient ways to solve the knapsack 0/1 problem is by using dynamic programming. This approach involves breaking down the problem into smaller sub-problems, solving each one only once, and storing the solutions to sub-problems to avoid redundant computation.'
  },
  {
    topic: 'Implementing Knapsack 0/1 Algorithm in C',
    info: 'In this article, we will delve into how to implement the knapsack 0/1 algorithm using dynamic programming in C. We will write a simple program that takes as input a set of items with weights and values and outputs the optimal subset of items to include in the knapsack.'
  },
  {
    topic: 'Optimization Techniques for Knapsack 0/1 Problem',
    info: 'To optimize the solution for the knapsack 0/1 problem, we can use various techniques such as memoization and branch and bound. These methods help reduce the computational time by avoiding unnecessary calculations.'
  },
  {
    topic: 'Real-World Applications of Knapsack 0/1 Problem',
    info: 'The knapsack 0/1 problem has numerous practical applications, including portfolio optimization in finance, resource allocation in logistics, and even scheduling tasks in operating systems. Understanding how to solve this problem efficiently can lead to significant improvements in performance.'
  }
];

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
