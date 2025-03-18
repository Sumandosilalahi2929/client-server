import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageSingnin from "./pages/signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/signin" element={<PageSingnin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
