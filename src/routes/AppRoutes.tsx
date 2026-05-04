import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Home         from "../pages/Home";
import About        from "../pages/About";
import Projects     from "../pages/Projects";
import Skills       from "../pages/Skills";
import Achievements from "../pages/Achievements";
import Contact      from "../pages/Contact";

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/"             element={<Home />}         />
        <Route path="/about"        element={<About />}        />
        <Route path="/projects"     element={<Projects />}     />
        <Route path="/skills"       element={<Skills />}       />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact"      element={<Contact />}      />
      </Routes>
    </>
  );
}