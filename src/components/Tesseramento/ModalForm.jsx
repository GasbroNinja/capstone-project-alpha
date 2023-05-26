import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Animator, MoveOut, batch } from 'react-scroll-motion';
import "../Tesseramento/tesseramento.css"

const ModalForm = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    
    const [surname, setSurname] = useState("");

    const [numberPhone, setNumberPhone] = useState("");
    
    const [username, setUsername] = useState("");

    const [road, setRoad] = useState("");

    const [fiscalCode, setFiscalCode] = useState("");

    const [dateBorn, setDateBorn] = useState("");


    const [email, setEmail] = useState("");


    function validateForm() {
      return (
        name.length > 0 &&
        surname.length > 0 &&
        username.length > 0 &&
        road.length > 0 &&
        fiscalCode.length > 15 &&
        dateBorn.length > 0 &&
        email.length > 0 &&
        numberPhone.length > 9
      );
    }

    function handleSubmit(event) {
      event.preventDefault();
    }

  return (
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <Animator animation={batch(MoveOut(0, -1000))}>
          <div className="welcomePage backgroundText py-2">
            <div className="d-inline-flex flex-column justify-content-center">
              <h2 className="d-flex fst-italic d-flex justify-content-center">
                Tesserati !
              </h2>
            </div>
          </div>
        </Animator>

        <div className="tesseramentoCard d-flex align-items-center justify-content-center overflow-y-scroll">
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
                type="text"
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
                type="text"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </Form.Group>

            <Form.Group size="lg" controlId="cellnumber">
              <Form.Label className="FooterText bgFooterText fs-3 text-uppercase py-2">
                Cellphone
              </Form.Label>

              <Form.Control
                className="formController mb-4"
                type="text"
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
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group size="lg" controlId="username">
              <Form.Label className="FooterText bgFooterText fs-3 text-uppercase py-2">
                Via Residenza / Resident in
              </Form.Label>

              <Form.Control
                className="formController mb-4"
                type="text"
                value={road}
                onChange={(e) => setRoad(e.target.value)}
              />
            </Form.Group>

            <Form.Group size="lg" controlId="codiceFiscale">
              <Form.Label className="FooterText bgFooterText fs-3 text-uppercase py-2">
                Codice Fiscale / ID
              </Form.Label>

              <Form.Control
                className="formController mb-4"
                type="text"
                value={fiscalCode}
                onChange={(e) => setFiscalCode(e.target.value)}
              />
            </Form.Group>

            <Form.Group size="lg" controlId="dateBorn">
              <Form.Label className="FooterText bgFooterText fs-3 text-uppercase py-2">
                Nato il / Born
              </Form.Label>

              <Form.Control
                className="formController mb-4"
                type="date"
                value={dateBorn}
                onChange={(e) => setDateBorn(e.target.value)}
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

            <div className="d-flex align-items-center justify-content-center pt-4">
              <Button
                className="formController py-2"
                block
                size="lg"
                type="submit"
                variant="danger"
                disabled={!validateForm()}
                onClick={() => navigate("/home")}
              >
                Register
              </Button>
            </div>
          </Form>
        </div>
      </Container>
  );
}

export default ModalForm;