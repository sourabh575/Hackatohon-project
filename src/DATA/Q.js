const allQuestions = [
  {
    question: 'What happens in the GUI if a lot of work is performed on the Event Dispatch Thread?',
    options: [
      { text: 'It speeds up the processing', isCorrect: true },
      { text: 'It allows for better memory usage', isCorrect: false },
      { text: 'It can become unresponsive', isCorrect: false },
      { text: 'It enhances event handling', isCorrect: false },
    ],
    explanation: 'Performing a lot of work on the Event Dispatch Thread (EDT) can lead to the GUI becoming unresponsive because the EDT is responsible for handling all user interactions and updates. Blocking it will freeze the GUI.'
  },
  {
    question: 'Why is background processing important in UI applications?',
    options: [
      { text: 'It reduces memory leaks', isCorrect: true },
      { text: 'It causes high CPU usage', isCorrect: false },
      { text: 'It disables caching', isCorrect: false },
      { text: 'It skips error handling', isCorrect: false }
    ],
    explanation: 'Background processing helps prevent blocking the main UI thread, allowing smoother performance and avoiding memory issues or freezing.'
  },
  {
    question: 'What does concurrent execution enable in JavaScript?',
    options: [
      { text: 'It enables smoother animations', isCorrect: true },
      { text: 'It blocks event propagation', isCorrect: false },
      { text: 'It disables async functions', isCorrect: false },
      { text: 'It increases memory leaks', isCorrect: false }
    ],
    explanation: 'Concurrent execution allows multiple tasks to run independently, enabling smoother animations and better user experience.'
  },
  {
    question: 'How does using Web Workers help JavaScript applications?',
    options: [
      { text: 'It allows background processing without freezing the UI', isCorrect: true },
      { text: 'It blocks the main thread', isCorrect: false },
      { text: 'It disables events', isCorrect: false },
      { text: 'It hides DOM elements', isCorrect: false }
    ],
    explanation: 'Web Workers allow scripts to run in background threads, freeing the main thread and improving performance without blocking the UI.'
  },
  {
    question: 'What is a benefit of asynchronous programming?',
    options: [
      { text: 'It prevents the UI from becoming unresponsive', isCorrect: true },
      { text: 'It makes code harder to maintain', isCorrect: false },
      { text: 'It reduces multithreading support', isCorrect: false },
      { text: 'It disables event loops', isCorrect: false }
    ],
    explanation: 'Asynchronous programming allows non-blocking operations, ensuring the UI remains responsive even during long-running tasks.'
  },
  {
    question: 'Why should long-running tasks be avoided on the main thread?',
    options: [
      { text: 'They block user interaction and can freeze the app', isCorrect: true },
      { text: 'They consume less memory', isCorrect: false },
      { text: 'They improve responsiveness', isCorrect: false },
      { text: 'They make animations smoother', isCorrect: false }
    ],
    explanation: 'Long-running tasks on the main thread block rendering and user interaction, leading to poor user experience and freezing.'
  },
  {
    question: 'What is the role of the Event Loop in JavaScript?',
    options: [
      { text: 'It manages asynchronous callbacks and keeps the UI responsive', isCorrect: true },
      { text: 'It compiles JavaScript code', isCorrect: false },
      { text: 'It runs tasks in parallel threads', isCorrect: false },
      { text: 'It blocks background processes', isCorrect: false }
    ],
    explanation: 'The Event Loop handles the execution of callbacks from asynchronous events, ensuring tasks don’t block the main thread.'
  },
  {
    question: 'Which of the following is true about asynchronous functions?',
    options: [
      { text: 'They allow non-blocking execution', isCorrect: true },
      { text: 'They prevent background tasks', isCorrect: false },
      { text: 'They run on the GPU', isCorrect: false },
      { text: 'They block UI updates', isCorrect: false }
    ],
    explanation: 'Asynchronous functions run without blocking the main thread, allowing other tasks like UI rendering to proceed simultaneously.'
  },
  {
    question: 'Why is setTimeout used in JavaScript?',
    options: [
      { text: 'To defer execution and avoid blocking the main thread', isCorrect: true },
      { text: 'To pause rendering', isCorrect: false },
      { text: 'To disable events', isCorrect: false },
      { text: 'To delete global variables', isCorrect: false }
    ],
    explanation: 'setTimeout is used to schedule tasks for future execution, helping keep the main thread responsive.'
  },
  {
    question: 'What advantage do Promises bring to JavaScript development?',
    options: [
      { text: 'They simplify handling of asynchronous operations', isCorrect: true },
      { text: 'They replace the event loop', isCorrect: false },
      { text: 'They increase memory usage', isCorrect: false },
      { text: 'They block synchronous code', isCorrect: false }
    ],
    explanation: 'Promises allow developers to write cleaner asynchronous code, improving readability and error handling.'
  }
];

export default allQuestions;