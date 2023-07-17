import { Badge, Button, Container, Dropdown, Form, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { BsFillBagFill } from 'react-icons/bs';
import newRequest from '../utils/newRequest';
import { toast } from 'react-toastify';
import getCurrentUser from '../utils/getCurrentUser';

const Header = () => {
    const navigate = useNavigate();

    const currentUser = getCurrentUser();

    const handleLogout = async () => {
        const res = await newRequest.post('/auth/logout');
        try {
            localStorage.setItem('currentUser', null);
            toast.success(res.data.message);
            navigate('/');
        } catch (error) {
            toast.error(res.data.message);
        }
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary navbar">
            <Container fluid style={{ position: 'sticky', maxWidth: '1200px' }}>
                <Navbar.Brand as={Link} to="/">
                    NICE
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" id="" />
                <Navbar.Collapse id="navbarScroll dropdown-autoclose-true">
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
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                        <Button variant="outline-success" className="me-2">
                            Search
                        </Button>
                    </Form>

                    {!currentUser ? (
                        <div className="my-2">
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
                    ) : (
                        <div className="my-2">
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-autoclose-true" variant="light">
                                    <Image
                                        src={currentUser.user.img || '/images/noavatar.jpg'}
                                        roundedCircle
                                        style={{ width: '32px', height: '32px' }}
                                    />
                                    <span className="mx-2">{currentUser.user.name}</span>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item as={Link} onClick={handleLogout} className="link" to="/logout">
                                        Logout
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    )}
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
