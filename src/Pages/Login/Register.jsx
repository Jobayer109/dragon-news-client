import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Register = () => {
    const {createUser, profile,verify} = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                profile(name)
                verify()
                form.reset('')
            })
            .catch(error => {
            console.log(error.message)
        })



}








  return (
    <div>
      <h2 className="text-center fw-bold mt-5">Register</h2>
      <Form onSubmit={handleSubmit} className="w-75 mx-auto shadow mt-4 p-5 rounded">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your name</Form.Label>
          <Form.Control type="text" name="name" placeholder="name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" placeholder="email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="password" required />
          <Form.Text className="text-muted">
          </Form.Text>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <div className="ms-5">
          <Button variant="primary" type="submit" className="fw-bold w-75 ">
            Sign in
          </Button>
          <p className="mt-2">
            {" "}
            <small>Already have an account ?</small> <Link to="/login">Sign in</Link>
          </p>
        </div>
      </Form>
    </div>
  );
};

export default Register;
