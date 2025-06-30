#Hackathon Project
# EDU_GRAM - Personalized Learning Platform
> An AI-powered platform for personalized study, interactive quizzes, articles, and note-taking.


<div align="center">
  <img src="https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react" alt="React Version">
  <img src="https://img.shields.io/badge/Vite-6.3.3-purple?style=for-the-badge&logo=vite" alt="Vite Version">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License">
</div>

## 🎓 Overview

EDU_GRAM is a comprehensive personalized learning platform that combines AI-powered education with interactive tools to create an engaging learning experience. Built with React and powered by Ollama AI, this platform offers multiple learning modes, practice quizzes, article reading, and note-taking capabilities.


## 📸 Screenshots

### Main Dashboard
![Dashboard](https://github.com/sourabh575/Hackatohon-project/blob/f44c05cfa331b0f3c24eb456b593bbf6f7370506/Screenshot%202025-06-30%20101143.png?raw=true)

### Topic Mode - AI Learning
![Topic Mode](https://github.com/sourabh575/Hackatohon-project/blob/main/Screenshot%202025-06-30%20100947.png?raw=true)

### Therapy AI Assistant
![Therapy AI](https://github.com/sourabh575/Hackatohon-project/blob/main/Screenshot%202025-06-30%20101014.png?raw=true)

### Interactive Quiz
![Quiz](https://github.com/sourabh575/Hackatohon-project/blob/main/Screenshot%202025-06-30%20101031.png?raw=true)

### Article Library
![Articles](https://github.com/sourabh575/Hackatohon-project/blob/main/Screenshot%202025-06-30%20101052.png?raw=true)

### PDF Creator
![PDF Creator](https://github.com/sourabh575/Hackatohon-project/blob/main/Screenshot%202025-06-30%20101106.png?raw=true)

### Digital Notepad
![Notepad](https://raw.githubusercontent.com/sourabh575/Hackatohon-project/5bcf0fd2176dc7913c420fbead1d1563b9697318/Screenshot%202025-06-30%20101121.png)


## ✨ Features

### 🤖 AI-Powered Learning
- **Topic Mode**: Deep dive into specific subjects with customizable learning parameters
- **Therapy AI**: Friendly AI assistant for personalized guidance and support
- **Smart Content Generation**: AI-generated explanations with adjustable depth, tone, and format

### 📚 Learning Tools
- **Practice Quizzes**: Interactive quizzes to test your knowledge
- **Article Library**: Curated articles on various programming topics (C, JavaScript, Python)
- **PDF Creator**: Generate and download learning materials as PDFs
- **Digital Notepad**: Store and organize your study notes

### 🎯 Personalized Experience
- **Customizable Learning**: Adjust depth, tone, language, and content length
- **Multiple Formats**: Choose from text, bullet points, or summary formats
- **User Authentication**: Secure signup and signin system
- **Progress Tracking**: Monitor your learning journey

### 🛠 Technical Features
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI/UX**: Clean and intuitive interface built with Bootstrap
- **Real-time AI Integration**: Powered by Ollama for local AI processing
- **Fast Performance**: Built with Vite for optimal development experience

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Ollama installed and running locally

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/EDU_GRAM.git
   cd EDU_GRAM
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Ollama**
   ```bash
   # Install Ollama (if not already installed)
   # Visit: https://ollama.ai/download
   
   # Pull required models
   ollama pull samantha-mistral
   ollama pull deepseek-r1:1.5b
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to access the application.

## 📖 Usage Guide

### 🎯 Topic Mode
1. Navigate to the Topic Mode section
2. Enter the topic you want to study
3. Customize your learning preferences:
   - **Depth**: Brief, Detailed, or In-depth
   - **Format**: Text, Bullet Points, or Summary
   - **Tone**: Formal, Casual, or Academic
   - **Language**: Choose your preferred language
   - **Length**: Set character limit (100-2000)
   - **Options**: Include examples and related topics
4. Click "Generate" to create personalized content

### 🤖 Therapy AI
1. Access the Therapy AI section
2. Type your question or topic
3. Get instant AI-powered responses and guidance

### 📝 Other Features
- **Quizzes**: Test your knowledge with interactive practice questions
- **Articles**: Read curated content on programming languages
- **PDF Creator**: Generate downloadable learning materials
- **Notepad**: Store and organize your study notes

## 🏗 Project Structure

```
EDU_GRAM/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and static files
│   ├── CSS/               # Stylesheets
│   ├── DATA/              # Data files
│   ├── App.jsx            # Main application component
│   ├── Feature.jsx        # Feature showcase component
│   ├── Topic.jsx          # Topic learning mode
│   ├── Therapy.jsx        # AI therapy component
│   ├── Quiz.jsx           # Quiz functionality
│   ├── Articles.jsx       # Article library
│   ├── Pdf.jsx            # PDF generation
│   ├── Notepad.jsx        # Note-taking feature
│   ├── Signin.jsx         # Authentication
│   ├── Signup.jsx         # User registration
│   └── ...                # Other components
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## 🛠 Technologies Used

- **Frontend**: React 19.0.0, Vite 6.3.3
- **Styling**: Bootstrap 5.3.5, Custom CSS
- **AI Integration**: Ollama 0.5.15
- **HTTP Client**: Axios 1.8.4
- **PDF Generation**: jsPDF 3.0.1
- **Authentication**: js-cookie 3.0.5
- **Routing**: React Router DOM 7.5.1

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Ollama](https://ollama.ai/) for providing local AI capabilities
- [React](https://reactjs.org/) for the amazing frontend framework
- [Vite](https://vitejs.dev/) for the fast build tool
- [Bootstrap](https://getbootstrap.com/) for the UI components

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/EDU_GRAM/issues) page
2. Create a new issue with detailed information
3. Contact the development team

---

<div align="center">
  <p>Made with ❤️ for better education</p>
  <p>EDU_GRAM - Empowering Learning Through AI</p>
</div>
