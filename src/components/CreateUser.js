import React, { useState } from "react";
import { db } from "../firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [Amount, setAmount] = useState(0);
  const Push = (e) => {
    e.preventDefault();
    db.collection("students-list")
      .add({
        name: name,
        email: email,
        mobile: mobile,
        Amount: Amount
      })
      .then(() => {
        alert("Details have been saved");
      })
      .catch((error) => {
        alert(error.message);
      });
    setName("");
    setEmail("");
    setMobile("");
    setAmount(0);
  };
  return (
    <div className="MainDiv" style={{ marginBottom: "5em", marginTop: "0" }}>
      <div className="container">
        <h1 style={Styles.hea}>Create Account</h1>
        <br></br>
        <Form onSubmit={Push}>
          <Form.Group className="mb-4" controlId="formBasicMobile">
            <Form.Label style={Styles.inh}>UserName</Form.Label>
            <Form.Control
              type="username"
              placeholder="Enter username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicMobile">
            <Form.Label></Form.Label>
            <Form.Label style={Styles.inh}>Mobile Number</Form.Label>
            <Form.Control
              type="mobile"
              placeholder="Enter Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <Form.Text className="text-muted">
              Enter your 10 digit Mobile Number.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label style={Styles.inh}>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              Enter your mail address in @website.com format.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label style={Styles.inh}>Amount of money </Form.Label>
            <Form.Control
              type="money"
              placeholder="Enter Money"
              value={Amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Form.Group>

          <button
            type="submit"
            style={Styles.btun}
            disabled={
              email.length === 0 || name.length === 0 || mobile.length < 10
            }
          >
            Save Details
          </button>
        </Form>
      </div>
    </div>
  );
}
const Styles = {
  btun: {
    background: `#7DEDFF`,
    color: "#7C83FD",

    borderRadius: `10`
  },
  hea: {
    color: "#5C527F"
  },
  inh: {
    color: "#5C527F"
  }
};
export default CreateUser;
