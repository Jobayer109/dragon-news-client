import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Login = () => {
  const { resetPassword, userSignIn } = useContext(AuthContext)
  const [error, setError] = useState(null)
  
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)


    userSignIn(email, password)
      .then(result => {
        form.reset('')
        console.log(result.user);
        navigate('/')
      })
    .catch(error => setError(error.message))

  }
  
  const forgetPassword = (email) => {
    resetPassword(email)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
      console.log(error.message)
    })
  }



  return (
    <div>
      <h2 className="text-center fw-bold mt-5">Sign in</h2>
      <Form onSubmit={handleSubmit} className="w-75 mx-auto shadow mt-4 p-5 rounded">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" placeholder="email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="password"  required/>
          <Form.Text className="text-muted">
            <Link onClick={forgetPassword}>
              <small>Foret your password ?</small>
            </Link>{" "}
            <br />
          </Form.Text>
          <Form.Text className="text-muted">
            <small className="text-danger">{ error}</small>
          </Form.Text>
        </Form.Group>
        <div className="ms-5">
        <Button variant="primary" type="submit" className="fw-bold w-75 ">
          Sign in
          </Button>
          <p className="mt-2"> <small>Didn't have any account ?</small> <Link to='/register'>Register</Link></p>
       </div>
      </Form>
    </div>
  );
};

export default Login;
