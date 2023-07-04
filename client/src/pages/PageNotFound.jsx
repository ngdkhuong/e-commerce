import { Button, Container } from 'react-bootstrap';
import { TbError404 } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const PageNotFound = () => {
    return (
        <Layout title={'Page not found'}>
            <Container className="m-auto" style={{ maxWidth: 'xl' }}>
                <div className="d-flex flex-column text-center justify-content-center" style={{ minHeight: '65vh' }}>
                    <div>
                        <TbError404 style={{ fontSize: '10rem', fontWeight: '700' }} />
                    </div>
                    <h2>Oops! Page Not Found</h2>
                    <Link to="/">
                        <Button variant="outline-dark">Go Back</Button>
                    </Link>
                </div>
            </Container>
        </Layout>
    );
};

export default PageNotFound;
