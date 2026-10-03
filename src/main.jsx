import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";import "./index.css";
// import App from "./App.jsx"; 
// import Temp from "./Temp.jsx";
import Simple from "./Simple.jsx";
import Engineering from "./pages/Eng.jsx";
import Misc from "./pages/Misc.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        {/* <App /> */}
        {/* <Temp /> */}
        <Route path="/" element={<Simple />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/misc" element={<Misc />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);