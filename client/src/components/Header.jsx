import { Badge, Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsFillBagFill } from 'react-icons/bs';

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary navbar">
            <Container fluid style={{ position: 'sticky', maxWidth: '1200px' }}>
                <Navbar.Brand as={Link} to="/">
                    Ryan
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '200px' }} navbarScroll>
                        <Nav.Link className="link" as={Link} to="/">
                            Home
                        </Nav.Link>

                        <NavDropdown title="Categories" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to="/shop">
                                Shop
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/shop1">
                                Shop1
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/shop2">
                                Shop2
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Form className="d-flex">
                            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                            <Button variant="outline-success" className="me-2">
                                Search
                            </Button>
                        </Form>
                    </Nav>

                    <div>
                        <Link className="link" to="/login">
                            <Button className="me-2" variant="primary">
                                Login
                            </Button>
                        </Link>
                        <Link className="link" to="/register">
                            <Button className="me-2" variant="secondary">
                                Register
                            </Button>
                        </Link>
                    </div>
                    <Link className="link " to="/cart" style={{ position: 'relative' }}>
                        <BsFillBagFill style={{ color: 'gray', fontSize: '24px', lineHeight: '26px' }} />
                        <Badge bg="primary" style={{ position: 'absolute', borderRadius: '50%', left: '50%' }}>
                            0
                        </Badge>
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
