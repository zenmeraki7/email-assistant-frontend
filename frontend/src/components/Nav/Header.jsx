import{Navbar,Container,Nav, Button} from 'react-bootstrap'
import './Nav.css'

function Header() {
  return (
    <>
         <Navbar expand="lg" className="head">
      <Container>
        <Navbar.Brand href="#home" className='text-light'>Email-Assistant</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler"/>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto ms-auto gap-3">
            <Nav.Link href="/" className='text-light'>Home</Nav.Link>
            <Nav.Link href="/about-us" className='text-light'>About Us</Nav.Link>
            <Nav.Link href="/contact-us" className='text-light'> Contact Us</Nav.Link>
            <Nav.Link href="/workwith-us" className='text-light'> Work with Us</Nav.Link>
          </Nav>
          <Nav className='justify-content-end'>
          <Nav.Link href="/log-in" className='text-light'><Button variant='light' >Login</Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header