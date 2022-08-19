
//import { ThreeDRotation } from '@mui/icons-material';

import { Routes, Route } from "react-router-dom";
// import "./App.css";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Layout from "./routes/Layout";
import Portfolio from "./routes/Portfolio";
import Skills from "./routes/Skills";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="Portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  );
}
