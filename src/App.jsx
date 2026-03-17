import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Projects from "./pages/Projects";
import ProjectSupplyMeshGov from "./pages/ProjectSupplyMeshGov";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import ProjectAeroCorridor from "./pages/ProjectAeroCorridor";

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,rgba(45,168,216,0.12),transparent_24%),radial-gradient(circle_at_top_left,rgba(76,175,80,0.10),transparent_18%),linear-gradient(180deg,#020617,#0f172a)] text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/supplymesh-gov" element={<ProjectSupplyMeshGov />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects/aerocorridor-6g" element={<ProjectAeroCorridor />} />
      </Routes>
      <Footer />
    </div>
  );
}