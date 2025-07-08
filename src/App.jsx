// src/App.jsx
import React from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import RightSidebar from "./components/RightSidebar";
import "../src/styles.css";

function App() {
  return (
    <main className=" grid grid-cols-1 md:grid-cols-[1fr_300px] lg:grid-cols-[220px_1fr_300px] min-h-screen ">
      <aside className="hidden lg:block">
        <Sidebar />
      </aside>

      <MainContent />

      <aside>
        <RightSidebar />
      </aside>
    </main>
  );
}

export default App;
