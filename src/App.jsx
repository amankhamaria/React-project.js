
import React from "react";
import { Route, Routes } from "react-router";

import HomePage from "./pages/Home";
import ErrorPage from "./ErrorPage";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Navbar />
      <main className="flex">
        <Sidebar />

        <section className="min-h-screen">
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