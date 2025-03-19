import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import TextInputWithLabel from "../../component/TextInputWithLabel";
import SButton from "../../component/Button";
import axios from "axios";
import SAlert from "../../component/Alert";

export default function PageSingnin() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [alert, setAlert] = useState({
    message: "",
    type: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:9000/api/v1/cms/auth/signin",
        {
          email: form.email,
          password: form.password,
        }
      );

      setAlert({ message: "Login berhasil!", type: "success" });
      console.log(res);
    } catch (err) {
      setAlert({
        message: err.response?.data?.message || "Terjadi kesalahan!",
        type: "danger",
      });
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "22rem", padding: "1 rem" }}>
        <Card.Body>
          {/* Tampilkan Alert Jika Ada */}
          {alert.message && (
            <SAlert message={alert.message} type={alert.type} />
          )}
          <Card.Title>Login</Card.Title>
          <Form>
            <TextInputWithLabel
              label="Email"
              name="email"
              value={form.email}
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
            />

            <TextInputWithLabel
              label="Password"
              name="password"
              value={form.password}
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </Form>
          <SButton action={handleSubmit} variant="primary" className="w-100">
            login
          </SButton>
        </Card.Body>
      </Card>
    </Container>
  );
}
