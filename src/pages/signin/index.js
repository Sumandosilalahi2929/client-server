import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import axios from "axios";
import SAlert from "../../component/Alert";
import { useNavigate } from "react-router-dom";
import SForm from "./form";

import { config } from "../../configs";

export default function PageSingnin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [alert, setAlert] = useState({
    message: "",
    type: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post(`${config.api_host_dev}/cms/auth/signin`, {
        form,
      });

      setAlert({ message: "Login berhasil!", type: "success" });
      console.log(res.data.data.token);
      setIsLoading(false);
      navigate("/");
    } catch (err) {
      setIsLoading(false);
      setAlert({
        status: true,
        message: err?.response?.data?.msg ?? "internal server error",
        type: "danger",
      });
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "22rem", padding: "1 rem" }}>
        <Card.Body>
          {alert.message && (
            <SAlert message={alert.message} type={alert.type} />
          )}
          <Card.Title>Login</Card.Title>
          <SForm
            form={form}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </Card.Body>
      </Card>
    </Container>
  );
}
