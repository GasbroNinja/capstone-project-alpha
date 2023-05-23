import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import LandingPage from "./components/LandingPage";
import Tesseramento from "./components/Tesseramento/Tesseramento";
import Community from "./components/Community/Community";
import Events from "./components/Eventi/Events";
import Login from "./components/LoginForm";
import EventDetail from "./components/Eventi/EventDetail";
import Register from "./components/Register";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tesseramento" element={<Tesseramento />} />
          <Route path="/community" element={<Community />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event-detail/:id" element={<EventDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
