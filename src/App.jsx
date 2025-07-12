// src/App.jsx
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import RightSidebar from "./components/RightSidebar";
import "../src/styles.css";

function App() {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAllLessons, setShowAllLessons] = useState(false);

  return (
    <main className="grid grid-cols-1 md:grid-cols-[1fr_300px] lg:grid-cols-[220px_1fr_300px] min-h-screen">
      <aside className="hidden lg:block">
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      </aside>

      <MainContent
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        showAllLessons={showAllLessons}
        setShowAllLessons={setShowAllLessons}
      />

      <aside>
        <RightSidebar />
      </aside>
    </main>
  );
}

export default App;
