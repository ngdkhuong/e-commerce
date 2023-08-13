import { Button, Container, FloatingLabel, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import { useState } from 'react';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    };
    return (
        <Layout title={'Login'}>
            <Container
                className="d-flex justify-content-center align-items-center flex-column"
                style={{ maxWidth: '1200px', height: '70vh' }}
            >
                <h4 className="mb-3">RESET PASSWORD</h4>
                <span>Enter your email to receive instructions on how to reset your password.</span>
                <Form onSubmit={handleSubmit} style={{ width: '400px' }}>
                    <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
                        <Form.Control
                            required
                            type="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FloatingLabel>
                    <Button variant="dark" type="submit" className="w-100 mb-3">
                        SEND
                    </Button>
                    <div className="text-center" style={{ fontSize: '14px', color: 'gray' }}>
                        Or return to{' '}
                        <Link to="/login" style={{ color: '#000' }}>
                            Login
                        </Link>
                    </div>
                </Form>
            </Container>
        </Layout>
    );
};

export default ForgotPassword;
