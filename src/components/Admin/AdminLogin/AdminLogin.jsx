import React from "react";
import { Button, FormControl } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (props.authenticated) {
      navigate("/Admin/Dashboard");
    }
  }, [props.authenticated]);
  return (
    <Container className="text-center my-5 d-flex justify-content-center">
      <Form onSubmit={props.updateAuth} className="border bg-light p-2 ">
        <h1>התחברות מנהל</h1>
        <FormControl className="mt-3 " name="username" placeholder="שם משתמש" />
        <FormControl
          className="mt-3 "
          name="password"
          type="password"
          placeholder="סיסמא"
        />
        <Button type="submit" className="mt-3" variant="success">
          התחבר
        </Button>
      </Form>
    </Container>
  );
}

export default AdminLogin;
