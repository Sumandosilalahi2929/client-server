import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageSingnin from "./pages/signin";
import DashboardPage from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/signin" element={<PageSingnin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
