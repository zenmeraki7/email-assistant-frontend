import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "./Nav.css";

function Header() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home" className="text-light">
          Email-Assistant
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Navigation Links */}
          <Nav className="me-auto ms-auto gap-3">
            <Nav.Link href="/" className="text-light" aria-label="Navigate to Home">
              Home
            </Nav.Link>
            <Nav.Link href="/about-us" className="text-light" aria-label="Learn more About Us">
              About Us
            </Nav.Link>
            <Nav.Link href="/contact-us" className="text-light" aria-label="Contact Us">
              Contact Us
            </Nav.Link>
            <Nav.Link href="/workwith-us" className="text-light" aria-label="Work With Us">
              Work with Us
            </Nav.Link>
          </Nav>
          {/* Login Button */}
          <Nav>
            <Nav.Link href="/log-in" aria-label="Log in to your account">
              <Button variant="light">Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
