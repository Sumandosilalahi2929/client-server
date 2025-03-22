import React from "react";
import { Navigate } from "react-router-dom";
import { Container, Nav, Navbar, Breadcrumb } from "react-bootstrap";

export default function DashboardPage() {
  const token = localStorage.getItem("token");

  if (!token) return <Navigate to="/signin" replace={true} />;
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Nanskuyy</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Category</Nav.Link>
            <Nav.Link href="#pricing">Talent</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Breadcrumb className="m-5">
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
}
