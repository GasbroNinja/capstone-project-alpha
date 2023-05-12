import React from 'react'
import { Container } from 'react-bootstrap';
import { Animator, MoveOut, batch } from 'react-scroll-motion';

const ModalForm = () => {

    const { firstName, lastName, age, email, telephone, state, country, address, address1, address2, interests, subscribenewsletter } = this.state.user;
    const { submitted } = this.state;
    const listState = stateList.listStates.map((item, key) =>
      <option key={key} value={item.name}>{item.name}</option>
    );


  return (
    <>
      <Animator animation={batch(MoveOut(0, -1000))}>
        <Container className="d-flex flex-column justify-content-center align-items-center overflow-hidden">
          <div className="welcomePage backgroundText py-5">
            <div className="d-inline-flex flex-column justify-content-center my-2">
              <h2 className="d-flex fst-italic d-flex justify-content-center">
                Tessarati ! <br />
              </h2>
            </div>
          </div>

          <div className="rightPanel">
            <div className="row">
              <label className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-3 mb-2">
                <input
                  type="text"
                  value={firstName}
                  name="firstName"
                  onChange={(e) => {
                    this.inputChange(e);
                  }}
                  className="form-control"
                  placeholder="First Name"
                />
                {submitted && this.state.errors.user.firstName.length > 0 && (
                  <span className="error">
                    {this.state.errors.user.firstName}
                  </span>
                )}
              </div>
              <div className="col-sm-3 mb-2">
                <input
                  type="text"
                  value={lastName}
                  name="lastName"
                  onChange={(e) => {
                    this.inputChange(e);
                  }}
                  className="form-control"
                  placeholder="Last Name"
                />
              </div>
              <div className="col-sm-4"></div>
            </div>
            <div className="row">
              <label
                htmlFor="formControlAgeRange"
                className="col-sm-2 col-form-label"
              >
                Age
              </label>
              <div className="col-sm-6 mb-2">
                <InputRange
                  min={1}
                  max={100}
                  step={1}
                  value={age}
                  onChangeInputRange={this.onChangeInputRange}
                />
              </div>
              <div className="col-sm-4"></div>
            </div>
            <div className="row">
              <label htmlFor="email" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-6 mb-2">
                <input
                  type="email"
                  value={email}
                  name="email"
                  onChange={(e) => {
                    this.inputChange(e);
                  }}
                  className="form-control"
                  id="email"
                  placeholder="itjebasuthan@gmail.com"
                />
                {submitted && this.state.errors.user.email.length > 0 && (
                  <span className="error">{this.state.errors.user.email}</span>
                )}
              </div>
              <div className="col-sm-4"></div>
            </div>
            <div className="row">
              <label htmlFor="telephone" className="col-sm-2 col-form-label">
                Tel
              </label>
              <div className="col-sm-6 mb-2">
                <input
                  type="text"
                  pattern="[0-9]"
                  maxLength="14"
                  value={telephone}
                  name="telephone"
                  onChange={(e) => {
                    this.inputChange(e);
                  }}
                  className="form-control"
                  id="telephone"
                  placeholder="(212)477-1000"
                />
                {submitted && this.state.errors.user.telephone.length > 0 && (
                  <span className="error">
                    {this.state.errors.user.telephone}
                  </span>
                )}
              </div>
              <div className="col-sm-4"></div>
            </div>
            <div className="row">
              <label htmlFor="staticEmail1" className="col-sm-2 col-form-label">
                State
              </label>
              <div className="col-sm-6 mb-2">
                <select
                  className="custom-select"
                  value={state}
                  name="state"
                  id="inlineFormCustomSelect"
                  onChange={this.inputChange}
                >
                  {listState}
                </select>
              </div>
              <div className="col-sm-4"></div>
            </div>
            <div className="row">
              <label htmlFor="staticEmail1" className="col-sm-2 col-form-label">
                Country
              </label>
              <div className="col-sm-6 mb-2">
                <select
                  className="custom-select"
                  value={country}
                  name="country"
                  id="inlineFormCustomSelect"
                  onChange={this.inputChange}
                >
                  <option value="US">United States</option>
                  <option value="IN">India</option>
                </select>
              </div>
              <div className="col-sm-4"></div>
            </div>
            <div className="row">
              <label htmlFor="staticEmail1" className="col-sm-2 col-form-label">
                Address
              </label>
              <div className="col-sm-6 mb-2">
                <select
                  className="custom-select mb-2"
                  value={address}
                  id="inlineFormCustomSelect"
                  onChange={this.onChangeAddress}
                >
                  <option value="Home">Home</option>
                  <option value="Company">Company</option>
                </select>
                <div className="row col-sm-12">
                  <div className="col-sm-5 mr-sm-1 mb-2">
                    <textarea
                      className="form-control"
                      name="address1"
                      rows="3"
                      placeholder={address + " Address1"}
                      value={address1}
                      onChange={this.inputChange}
                    ></textarea>
                    {submitted &&
                      this.state.errors.user.address1.length > 0 && (
                        <span className="error">
                          {this.state.errors.user.address1}
                        </span>
                      )}
                  </div>
                  <div className="col-sm-5 mr-sm-1 mb-2">
                    <textarea
                      className="form-control"
                      name="address2"
                      rows="3"
                      placeholder={address + " Address2"}
                      value={address2}
                      onChange={this.inputChange}
                    ></textarea>
                    {submitted &&
                      this.state.errors.user.address2.length > 0 && (
                        <span className="error">
                          {this.state.errors.user.address2}
                        </span>
                      )}
                  </div>
                </div>
              </div>
              <div className="col-sm-4"></div>
            </div>
            <div className="row">
              <label htmlFor="staticEmail1" className="col-sm-2 col-form-label">
                Interests
              </label>
              <div className="col-sm-6 mb-2">
                <MultiSelect
                  className="form-control"
                  searchPlaceholder="Interests"
                  selected={interests}
                  onSelect={this.onSelectedInterest}
                />
                {submitted && this.state.errors.user.interests.length > 0 && (
                  <span className="error">
                    {this.state.errors.user.interests}
                  </span>
                )}
              </div>
              <div className="col-sm-4"></div>
            </div>
            <div className="row">
              <div className="col-sm-2"></div>
              <div className="col-sm-6 mb-2">
                <label htmlFor="subscribenewsletter">
                  <input
                    type="checkbox"
                    checked={subscribenewsletter}
                    name="subscribenewsletter"
                    onChange={this.checkboxChange}
                    id="subscribenewsletter"
                    style={{ margin: "10px" }}
                  />
                  Subscribe to the news letter
                </label>
              </div>
              <div className="col-sm-4"></div>
            </div>
            <div className="row">
              <div className="col-sm-5 mb-2"></div>
              <div className="col-sm-4">
                <button
                  type="button"
                  className="button"
                  onClick={this.submitForm}
                >
                  Submit
                </button>
              </div>
              <div className="col-sm-3"></div>
            </div>
          </div>
        </Container>
      </Animator>
    </>
  );
}

export default ModalForm;