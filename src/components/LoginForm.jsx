import React, { useEffect, useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Footer from "./Footer";
import NavbarMain from "./NavbarMain";
import "../App.css";
import { toast, ToastContainer } from "react-toastify";

export default function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

    const ProceedLogin = (e) => {
      e.preventDefault();
      if (validate()) {
        //console.log('proceed');
        fetch(
          "http://localhost:3001/user?username=" + username + "&password=" + password)
          .then((res) => {
            return res.json();
          })
          .then((resp) => {
            console.log(resp)
            if (resp.length === 0) {
              toast.error("Please Enter valid credentials");
            } else {
              //dispatch dati user
              if (resp[0].password === password) {
                toast.success("Success!",{
                    position: toast.POSITION.TOP_CENTER,
                });
                sessionStorage.setItem("username", username);
                navigate("/home");
              }
            }
          })
          .catch((err) => {
            toast.error("Login Failed due to :" + err.message, {
              position: toast.POSITION.TOP_CENTER,
            });
          });
      }
    };

    const validate = () => {
      let result = true;
      if (username === "" || username === null) {
        result = false;
        toast.warning("Please Enter Username", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
      if (password === "" || password === null) {
        result = false;
        toast.warning("Please Enter Password", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
      return result;
    };


  return (
    <>
      <ToastContainer theme="colored"></ToastContainer>
      <Container fluid className="backGroundNeon1 p-0">
        <Container fluid className="homeBase1 p-0">
          <Container
            fluid
            className=" d-flex align-items-center justify-content-start p-3"
          >
            <NavbarMain />
          </Container>

          <div className="Login d-flex align-items-center justify-content-center">
            <Form
              className="bg-dark p-3 rounded rounded-4 bgFormsStyle"
              onSubmit={ProceedLogin}
            >
              <Form.Group size="lg" controlId="username">
                <Form.Label className="FooterText bgFooterText fs-3 text-uppercase py-2">
                  Username
                </Form.Label>

                <Form.Control
                  autoFocus
                  type="text"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  className="formController"
                />
              </Form.Group>

              <Form.Group size="lg" controlId="password">
                <Form.Label className="FooterText bgFooterText fs-3 text-uppercase py-2">
                  Password
                </Form.Label>

                <Form.Control
                  className="formController mb-4"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </Form.Group>
              <div className="d-flex align-items-center justify-content-center">
                <Button
                  className="py-2"
                  size="lg"
                  type="submit"
                  variant="danger"
                  disabled={!validateForm()}
                >
                  Login
                </Button>
                <Button
                  className="py-2 px-2 ms-3"
                  size="lg"
                  type="submit"
                  variant="danger"
                  onClick={() => navigate("/register")}
                >
                  Sign up
                </Button>
              </div>
            </Form>
          </div>

          <Footer />
        </Container>
      </Container>
    </>
  );
}

