import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, CockDetails } from "./Pages";
import { Header } from "./component";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cockdetail/:id" element={<CockDetails />} />
      </Routes>
    </div>
  );
}

export default App;
