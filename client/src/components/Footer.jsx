import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer bg-dark text-light p-5">
            <h4 className="text-center">All Right Reserved &copy; Khuong Nguyen Dang</h4>
            <div className="d-flex text-center justify-content-center my-4">
                <Nav.Link className="link mx-3" as={Link} to="/contact">
                    Contact
                </Nav.Link>
                <Nav.Link className="link mx-3" as={Link} to="/about">
                    About
                </Nav.Link>
                <Nav.Link className="link mx-3" as={Link} to="/policy">
                    Privacy Policy
                </Nav.Link>
            </div>
        </div>
    );
};

export default Footer;
