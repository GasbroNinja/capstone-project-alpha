import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Footer from "./Footer";
import NavbarMain from "./NavbarMain";
import "../App.css";
import { ToastContainer, toast } from "react-toastify";

export default function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");



    const showToastMessage = () => {
        toast.success("Registered successfully! Please Log-in again!", {
        position: toast.POSITION.TOP_CENTER,
        });
    };

    const showToastMessageError = () => {
      toast.error("Failed Registration", {
        position: toast.POSITION.TOP_CENTER,
      });
    };

    const IsValidate = () => {
      let isproceed = true;
      let errormessage = "Please enter the values correctly:"
      if(username.length <= 2){
        isproceed = false;
        errormessage += "Username";
      }
      if (email.length <= 6) {
        isproceed = false;
        errormessage += "E-mail";
      }
      if (password.length <= 2) {
        isproceed = false;
        errormessage += "Password";
      }
      if(!isproceed){
        toast.warning(errormessage,{
          position: toast.POSITION.TOP_CENTER,
        })
      }
      return isproceed
    }

    function validateForm() {
      return username.length > 1 && email.length > 1 && password.length > 1
    }

    function handleSubmit(event) {
    event.preventDefault();
    let regobj = { username, email, password};
    //console.log(regobj)
      if(IsValidate()) {
        fetch("http://localhost:3001/user",{
            method: "POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(regobj)
        }).then((resp)=>{
            showToastMessage();
            navigate('/login')
        }).catch((error)=>{
            showToastMessageError(error.message)
        });
      };
    }

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
              onSubmit={handleSubmit}
            >
              <Form.Group size="lg" controlId="username" className="py-2">
                <Form.Label className="FooterText bgFooterText fs-3 text-uppercase py-2">
                  Username
                </Form.Label>

                <Form.Control
                  autoFocus
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="formController"
                />
              </Form.Group>

              <Form.Group size="lg" controlId="email" className="py-2">
                <Form.Label className="FooterText bgFooterText fs-3 text-uppercase py-2">
                  Email
                </Form.Label>

                <Form.Control
                  autoFocus
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="formController"
                />
              </Form.Group>

              <Form.Group size="lg" controlId="password" className="py-2">
                <Form.Label className="FooterText bgFooterText fs-3 text-uppercase py-2">
                  Password
                </Form.Label>

                <Form.Control
                  className="formController mb-4"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <div className="d-flex align-items-center justify-content-center">
                <Button
                  className="py-2 px-2 "
                  size="lg"
                  type="submit"
                  variant="danger"
                  disabled={!validateForm()}
                >
                  Sign up
                </Button>
              </div>
            </Form>
          </div>
          {/*onClick={() => navigate("/login")}*/}
          <Footer />
        </Container>
      </Container>
    </>
  );
}
