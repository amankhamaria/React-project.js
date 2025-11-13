import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";

import HomePage from "./pages/Home";
import ErrorPage from "./ErrorPage";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import VideoDetails from "./pages/VideoDetails";
import SearchResults from "./pages/SearchResults";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  useEffect(() => {
    function handleSidebar() {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    }

    if (window !== undefined) {
      handleSidebar();
    }

    window.addEventListener("resize", handleSidebar);
  }, []);

  return (
    <div>
      <Navbar onMenuBtnClick={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <main className="flex mt-16">
        <div
          className={`transition-all duration-1000 fixed top-16 bottom-0 left-0 ${
            isSidebarOpen
              ? "min-w-[220px] w-[220px] overflow-auto"
              : "w-0 overflow-hidden"
          }`}
        >
          <Sidebar />
        </div>

        <section
          className={`transition-all duration-1000 min-h-screen w-full  ${
            isSidebarOpen ? "ml-[220px]" : "ml-0"
          }`}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/videos/:vid" element={<VideoDetails />} />
            <Route path="/results" element={<SearchResults />} />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </section>
      </main>
    </div>
  );
}

export default App;