import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";import "./index.css";
// import App from "./App.jsx"; 
// import Temp from "./Temp.jsx";
import Simple from "./Simple.jsx";
import Engineering from "./pages/Eng.jsx";
import Misc from "./pages/Misc.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <App /> */}
        {/* <Temp /> */}
        <Route path="/" element={<Simple />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/other" element={<Misc />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);