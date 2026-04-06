import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Historical from "./pages/Historical";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/historical" element={<Historical />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
