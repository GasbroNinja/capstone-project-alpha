import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import LandingPage from "./components/LandingPage";
import Tesseramento from "./components/Tesseramento/Tesseramento";
import Community from "./components/Community/Community";
import Events from "./components/Eventi/Events";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tesseramento" element={<Tesseramento />} />
        <Route path="/community" element={<Community />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
