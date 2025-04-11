import { Route, Routes } from "react-router-dom";

import Talents from "../pages/talents";
// import Create from "../pages/categories/create";
// import Edit from "../pages/categories/edit";

export function TalentsRoute() {
  return (
    <Routes>
      <Route path="/" element={<Talents />} />
      {/* <Route path="/create" element={<Create />} />
      <Route path="/edit/:categoryId" element={<Edit />} /> */}
    </Routes>
  );
}
