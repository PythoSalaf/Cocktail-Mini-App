import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home, CockDetails } from "./Pages";
import { Footer, Header } from "./component";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cockdetail/:id" element={<CockDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
