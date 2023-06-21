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
import CookieConsent from "react-cookie-consent";
import Cookies from "universal-cookie";
import jwt from "jwt-decode";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { ToastContainer } from "react-toastify";


function App() {
  //initialize cookies
  const cookies = new Cookies()

  //initialize user state for cookies
  const [userCookie, setUserCookie] = useState(null)

  const logOutCookie = () => {
    setUserCookie(null)
    cookies.remove("jwt_essential_cookie");
  }

  const logInCookie = (jwt_token) => {
    //Decode Jwt Token
    const decoded = jwt(jwt_token)

    //set userCookie
    setUserCookie(decoded)

    //set cookie
    cookies.set("jwt_essential_cookie", jwt_token,{expires: new Date(decoded.exp * 1000),});
  };

  return (
    <>
      <ToastContainer theme="colored"></ToastContainer>
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
      <div className="styleCookieCont m-0">
        {/*userCookie ? (
          <Button variant="dark" className="btnNavOffcanv text-uppercase fs-4" onClick={logOutCookie}>
            Log-out 🍪
          </Button>
        ) : (
          <Button variant="dark" className="btnNavOffcanv text-uppercase fs-4" onClick={() => logInCookie(
            "eyJhbGci0iJIUZI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjMONTY30DkwIiwibmFtZSI6IkpvaG4gRG91IiwiaXNTb2NpYWwiOnRydWV9.4pcPyMD0901PSyXnrXCjTwXyr4BsezdI1AVTmud2fU4"
          )}>
            Log-in 🍪
          </Button>
          )*/}

        <CookieConsent
          debug={true}
          location="bottom"
          style={{
            backgroundColor: "#292a2d",
            boxShadow: " 3px 3px 30px #ff6a6a",
            color: "#cc1f16",
            fontSize: "18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          buttonStyle={{
            color: "#cc1f16",
            background: "#ffc7bf",
            fontSize: "26px",
            borderRadius: "50px",
            padding: "10px 20px",
          }}
          buttonText="Accept 🍪"
          expires={365}
        >
          This site uses cookies: Essential cookies or strictly necessary
          cookies are cookies that are essential for a website to function
          correctly. These are cookies are necessary to provide an online
          service on a website or used solely to carry out or facilitate the
          transmission of communications over a network.
        </CookieConsent>
      </div>
    </>
  );
}

export default App;
