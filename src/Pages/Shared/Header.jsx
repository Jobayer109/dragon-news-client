import React, { useContext } from "react";
import { Button, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="mb-2">
      <Container>
        <Navbar.Brand>
          {" "}
          <Link className="text-decoration-none fs-3 fw-bold" to="/">
            Dragon News
          </Link>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {user && user?.uid ? (
              <>
                <Nav.Link eventKey={2} href="#memes" className="d-flex justify-content-center">
                  <div>
                    <img
                      style={{
                        borderRadius: "50%",
                        height: "35px",
                        marginRight: "10px",
                        marginTop: "1px",
                        border: "2px solid white",
                        padding: "3px"
                      }}
                      src={user?.photoURL}
                      alt=""
                    />
                  </div>
                  <Link className="text-decoration-none me-2 text-warning mt-1 fw-bold" to="/profile">
                    {user?.displayName}
                  </Link>

                  <Button onClick={handleSignOut} variant="outline-warning">
                    Sign out
                  </Button>
                </Nav.Link>
              </>
            ) : (
              <>
                <Button variant="outline-info">
                  <Link className="text-decoration-none fw-bold text-warning" to="/login">
                    Sign in
                  </Link>
                </Button>
                <Button variant="outline-success" className="ms-3">
                  <Link className="text-decoration-none fw-bold text-warning" to="/register">
                    Register
                  </Link>
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
