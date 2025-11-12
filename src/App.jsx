import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";

import HomePage from "./pages/Home";
import ErrorPage from "./ErrorPage";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

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
          className={`transition-all fixed top-16 left-0 bottom-0 duration-1000 ${
            isSidebarOpen ? "w-[200px] overflow-auto" : "w-0 overflow-hidden"
          }`}
        >
          <Sidebar />
        </div>

        <section className={`min-h-screen w-full transition-all duration-1000 ${isSidebarOpen ? "ml-[200px]" :"ml-0"}`}>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </section>
      </main>
    </div>
  );
}

export default App;