import { Col, Container, Image, Row } from 'react-bootstrap';
import Layout from '../components/Layout/Layout';

const About = () => {
    return (
        <Layout title={'About us'}>
            <Container
                className="d-flex justify-content-center align-items-center"
                style={{ maxWidth: '1200px', height: '70vh' }}
            >
                <Row>
                    <Col xs={6}>
                        <Image src="/images/about.jpeg" fluid />
                    </Col>
                    <Col xs={6}>
                        <p className="mt-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus officiis obcaecati esse
                            tempore unde ratione, eveniet mollitia, perferendis eius temporibus dicta blanditiis
                            doloremque explicabo quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
                            accusantium atque, excepturi sapiente amet! Tenetur ducimus aut commodi illum quidem neque
                            tempora nam.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default About;
