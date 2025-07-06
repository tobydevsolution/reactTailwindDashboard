// src/App.jsx
import React from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import RightSidebar from "./components/RightSidebar";
import "../src/styles.css";

function App() {
  return (
    <main className=" grid grid-cols-[220px_1fr] ">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <MainContent />

      {/* Right Sidebar / Statistic */}
      <RightSidebar />
    </main>
  );
}

export default App;
