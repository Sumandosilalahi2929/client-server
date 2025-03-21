import React from "react";
import SButton from "../../component/Button";
import TextInputWithLabel from "../../component/TextInputWithLabel";
import { Form } from "react-bootstrap";

export default function SForm(form, handleChange, handleSubmit, isLoading) {
  return (
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

      <SButton
        loading={isLoading}
        disabled={isLoading}
        action={handleSubmit}
        variant="primary"
        className="w-100"
      >
        login
      </SButton>
    </Form>
  );
}
