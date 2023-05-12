import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import Footer from "./Footer";
import NavbarMain from "./NavbarMain";
import "../App.css";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
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
            <Form.Group size="lg" controlId="email">
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

            <Form.Group size="lg" controlId="password">
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
                className=" py-2"
                block
                size="lg"
                type="submit"
                variant="danger"
                disabled={!validateForm()}
                onClick={() => navigate("/home")}
              >
                Login
              </Button>
            </div>
          </Form>
        </div>

        <Footer />
      </Container>
    </Container>
  );
}

