import React from "react";
import { Container, Table } from "react-bootstrap";
import SButton from "../../component/Button";
import SBreadCrumb from "../../component/Breadcrumb";
import SNavbar from "../../component/Navbar";

export default function DashboardPage() {
  return (
    <>
      <SNavbar />

      <Container className="mt-4">
        <SBreadCrumb />

        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="m-0">Daftar Pengguna</h3>
          <SButton>Tambah</SButton>
        </div>

        {/* Tabel Data */}
        <Table striped bordered hover variant="dark" className="text-center">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}
