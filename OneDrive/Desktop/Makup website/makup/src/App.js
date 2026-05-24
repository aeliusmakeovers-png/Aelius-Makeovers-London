import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/nav";
import Home from "./components/Home/home";
import Footer from "./components/Footer/foot";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <Home />
      </main>
      <Footer />
    </div>
  );
}


