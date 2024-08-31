import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./index.css"; // Ensure this file includes Tailwind CSS imports
import Sidebar from "./components/Sidebar";
import Certificate from "./components/Certificate";
import Photo from "./components/Photo";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Certificate" element={<Certificate />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
