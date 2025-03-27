import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

// Section Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-mono w-full">
      <Header />
      <NavBar />

      {/* Main Sections */}
      <div className="w-full px-4 md:px-10 lg:px-20 space-y-40">
        {/* About Me */}
        <motion.section
          id="about"
          className="min-h-screen flex flex-col items-center justify-center text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        > 
          <p className="mt-4 text-gray-300 max-w-2xl text-center text-lg md:text-xl lg:text-2xl">
            Hi, I'm <span className="text-green-400 font-semibold">Pramit Kumar Naik</span>, currently pursuing my B.Tech at CV Raman Global University.  
            I have always been passionate about technology, exploring various fields from development to cloud computing.  
            My journey started in childhood when I used to dismantle remote-controlled cars and build something new out of them.  
            Those small steps fueled my curiosity and led me to pursue a career in tech, where I aim to contribute as a tech enthusiast.  
          </p>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="flex flex-col items-center justify-center text-center px-6 pt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2 className="text-5xl font-extrabold text-blue-400 mb-6">My Skills</h2>
          <div className="bg-[#1e293b] p-8 md:p-12 rounded-2xl shadow-lg border border-gray-600 max-w-3xl">
            <p className="text-gray-300 text-xl font-medium">  
              ⚡ JavaScript | ⚡ React.js | ⚡ Node.js | ⚡ Java | ⚡ Data Structures & Algorithms (DSA) |⚡ Linux |  
            </p>
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          id="projects"
          className="flex flex-col items-center justify-center text-center pt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2 className="text-5xl font-extrabold text-blue-400">Projects</h2>
          <p className="mt-4 text-gray-300 max-w-2xl text-xl">
            🚀 Check out my awesome projects showcasing backend & DevOps expertise.
          </p>
          
          {/* InstaCaption AI Project */}
          <div className="bg-[#1e293b] p-8 md:p-12 rounded-2xl shadow-lg border border-gray-600 max-w-3xl mt-6 text-left">
            <h3 className="text-3xl font-bold text-yellow-400">📌 InstaCaption AI</h3>
            <p className="text-gray-300 mt-2 text-lg">
              <strong>InstaCaption AI</strong> is a React-based web application that generates creative <strong>Instagram captions and hashtags</strong> using the <strong>Ollama AI model</strong>. The app allows users to enter a topic or description, and it quickly provides engaging captions with relevant hashtags.
            </p>
            <ul className="text-gray-300 mt-4 list-disc pl-6 text-lg">
              <li>✅ <strong>AI-Powered Captions</strong> – Uses Ollama's local AI model to generate catchy Instagram captions.</li>
              <li>✅ <strong>Hashtag Suggestions</strong> – Provides 5 relevant hashtags to boost engagement.</li>
              <li>✅ <strong>Clipboard Copy</strong> – Easily copy captions and hashtags with a single click.</li>
              <li>✅ <strong>Fully Responsive UI</strong> – Works seamlessly on mobile, tablet, and desktop.</li>
              <li>✅ <strong>Fast & Secure</strong> – Runs locally with no third-party API calls.</li>
            </ul>
            <h4 className="text-2xl font-semibold text-green-400 mt-4">🛠️ Tech Stack</h4>
            <p className="text-gray-300 text-lg">Frontend: React.js, TailwindCSS | Backend: Ollama AI (Local Model) | API Handling: Fetch API</p>
            <h4 className="text-2xl font-semibold text-green-400 mt-4">🚀 How It Works</h4>
            <ol className="text-gray-300 list-decimal pl-6 text-lg">
              <li>Enter a topic (e.g., "Sunset beach vibes").</li>
              <li>Click "Generate Caption".</li>
              <li>AI generates a caption & hashtags instantly.</li>
              <li>Copy and use them in your Instagram post.</li>
            </ol>
          </div>
        </motion.section>

        {/* Contact Me */}
        <motion.section
          id="contact"
          className="flex flex-col items-center justify-center text-center mb-40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2 className="text-5xl font-extrabold text-green-400">Contact Me</h2>
          <p className="mt-4 text-gray-300 max-w-2xl text-xl">
            📧 Email: <span className="text-blue-400">pramitkumarnaikwork@gmail.com</span>
            <br />
            🔗 GitHub: {" "}
            <a
              href="https://github.com/PRAMITKN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline text-xl"
            >
              PRAMITKN
            </a>
          </p>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
