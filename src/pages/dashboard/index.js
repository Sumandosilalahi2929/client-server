import React from "react";
import { Container } from "react-bootstrap";
import SBreadCrumb from "../../component/Breadcrumb";

export default function DashboardPage() {
  return (
    <Container className="mt-4">
      <SBreadCrumb />

      <h1>Dashboard</h1>
    </Container>
  );
}
