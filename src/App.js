import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import { Navbar } from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies.jsx/Technologies";
import { motion } from "framer-motion";
import "./App.css";

function App() {

  return (
    <motion.div
      className="spined-bg"
      initial="hidden"
      animate="visible"
    >
      <div className="spined-bg">
        <Navbar />
        <Profile />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </motion.div>
  );
}

export default App;
