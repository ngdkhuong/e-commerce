import { Col, Container, Image, Row } from 'react-bootstrap';
import Layout from '../components/Layout/Layout';
import { BiMailSend, BiPhoneCall, BiSupport } from 'react-icons/bi';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Contact = () => {
    return (
        <Layout title={'Contact to me'}>
            <Container
                className="d-flex justify-content-center align-items-center"
                style={{ maxWidth: '1200px', height: '70vh' }}
            >
                <Row>
                    <Col xs={6}>
                        <Image src="/images/contactus.jpeg" fluid />
                    </Col>
                    <Col xs={6}>
                        <h1 className="bg-dark p-2 text-white text-center">CONTACT ME</h1>
                        <h4 className="text-justify mt-2">My socials that you can contact me for work</h4>
                        <p className="mt-3">
                            <BiMailSend /> : www.help@ecommerceapp.com
                        </p>
                        <p className="mt-3">
                            <BiPhoneCall /> : 012-3456789
                        </p>
                        <p className="mt-3">
                            <AiFillLinkedin /> : linkedin.com
                        </p>
                        <p className="mt-3">
                            <AiFillGithub /> : github.com
                        </p>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default Contact;
