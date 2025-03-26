import { useState } from "react";
import { Menu, X, Mail, Github, Linkedin } from "lucide-react";
import htmlLogo from "./assets/html.svg";
import cssLogo from "./assets/css.svg";
import jsLogo from "./assets/javascript.png";
import reactLogo from "./assets/react.svg";
import tailwindLogo from "./assets/tailwind.svg";
import firebaseLogo from "./assets/firebase.svg";
import SplitText from "./componsnts/SplitText.jsx";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
 
  return (
    <div className="bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-800 shadow-lg z-50">
        <div className="flex items-center justify-between px-6 py-4">
        {/* <SplitText
  text="Hello, Tailwind!"
  className="text-2xl font-semibold text-center"
  delay={150}
  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
  easing="easeOutCubic"
  threshold={0.2}
  rootMargin="-50px"
  onLetterAnimationComplete={handleAnimationComplete}
/> */}
          <h1 className="text-2xl font-semibold">Muhammad Anas</h1>
          <button onClick={() => setIsOpen(true)} className="md:hidden focus:outline-none">
            <Menu size={32} />
          </button>
          <ul className="hidden md:flex space-x-8">
            {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-gray-400">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} 
        onClick={() => setIsOpen(false)}
      >
        <div className={`fixed top-0 left-0 h-full w-64 bg-gray-800 shadow-lg transform transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
            <h2 className="text-xl font-bold">Menu</h2>
            <button onClick={() => setIsOpen(false)} className="focus:outline-none">
              <X size={32} />
            </button>
          </div>
          <ul className="mt-6 space-y-4 px-6">
            {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="block p-2 text-lg hover:bg-gray-700 rounded">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="h-screen flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-4xl font-bold">Hi, I'm Muhammad Anas</h1>
        <p className="text-lg text-gray-400 mt-2">Front-End Developer | React.js Enthusiast</p>
        <a href="#contact" className="mt-4 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">Hire Me</a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          I'm a front-end developer passionate about building interactive and visually appealing web applications using modern technologies.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-800">
        <h2 className="text-3xl font-semibold text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
          {["E-Commerce Website", "Portfolio Website", "React Admin Dashboard"].map((project, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">{project}</h3>
              <p className="text-gray-400">Built with React.js & Tailwind CSS</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <h2 className="text-3xl font-semibold text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {[{ name: "HTML", logo: htmlLogo }, { name: "CSS", logo: cssLogo }, { name: "JavaScript", logo: jsLogo }, { name: "React.js", logo: reactLogo }, { name: "Tailwind CSS", logo: tailwindLogo }, { name: "Firebase", logo: firebaseLogo }].map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <img src={skill.logo} alt={skill.name} className="w-16 h-16" />
              <span className="mt-2">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-800">
        <h2 className="text-3xl font-semibold text-center">Contact Me</h2>
        <div className="flex justify-center gap-6 mt-6">
          <a href="mailto:your@email.com" className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600">
            <Mail size={28} />
          </a>
          <a href="https://github.com/yourgithub" className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600">
            <Github size={28} />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600">
            <Linkedin size={28} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-400">
        © 2025 Muhammad Anas. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
