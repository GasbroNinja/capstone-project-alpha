import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Animator, MoveOut, batch } from 'react-scroll-motion';

const ModalForm = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    
    const [surname, setSurname] = useState("");

    const [numberPhone, setNumberPhone] = useState("");
    
    const [username, setUsername] = useState("");

   // via, comune diresidenza , cod fiscale, data di nascita

    const [age, setAge] = useState("");

    const [email, setEmail] = useState("");


    function validateForm() {
      return (
        name.length > 0 &&
        surname.length > 0 &&
        username.length > 0 &&
        age.length > 0 &&
        email.length > 0 &&
        numberPhone.length > 0
      );
    }

    function handleSubmit(event) {
      event.preventDefault();
    }

  return (
    <>
      <Container className="d-flex flex-column justify-content-center align-items-center overflow-hidden">
        <Animator animation={batch(MoveOut(0, -1000))}>
          <div className="welcomePage backgroundText py-2">
            <div className="d-inline-flex flex-column justify-content-center">
              <h2 className="d-flex fst-italic d-flex justify-content-center">
                Tessarati ! <br />
              </h2>
            </div>
          </div>

          <div className="Login d-flex align-items-center justify-content-center">
            <Form
              className="bg-dark p-3 rounded rounded-4 bgFormsStyle"
              onSubmit={handleSubmit}
            >
              <Form.Group size="lg" controlId="name">
                <Form.Label className="FooterText bgFooterText fs-3 text-uppercase py-2">
                  Nome / name
                </Form.Label>

                <Form.Control
                  className="formController mb-4"
                  type="password"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group size="lg" controlId="surname">
                <Form.Label className="FooterText bgFooterText fs-3 text-uppercase py-2">
                  Cognome / Surname
                </Form.Label>

                <Form.Control
                  className="formController mb-4"
                  type="Cognome / Surname"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </Form.Group>

              <Form.Group size="lg" controlId="cellnumber">
                <Form.Label className="FooterText bgFooterText fs-3 text-uppercase py-2">
                  Numero di Telefono
                </Form.Label>

                <Form.Control
                  className="formController mb-4"
                  type="Numero di Telefono / Cellphone Number"
                  value={numberPhone}
                  onChange={(e) => setNumberPhone(e.target.value)}
                />
              </Form.Group>

              <Form.Group size="lg" controlId="username">
                <Form.Label className="FooterText bgFooterText fs-3 text-uppercase py-2">
                  Username
                </Form.Label>

                <Form.Control
                  className="formController mb-4"
                  type="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>

              <Form.Group size="lg" controlId="age">
                <Form.Label className="FooterText bgFooterText fs-3 text-uppercase py-2">
                  Età / Age
                </Form.Label>

                <Form.Control
                  className="formController mb-4"
                  type="Età / Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </Form.Group>

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

              <div className="d-flex align-items-center justify-content-center">
                <Button
                  className="formController py-2"
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
        </Animator>
      </Container>
    </>
  );
}

export default ModalForm;