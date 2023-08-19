import { Button, Container, FloatingLabel, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import { useState } from 'react';
import newRequest from '../../utils/newRequest';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const navigate = useNavigate();
    // const location = useLocation();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await newRequest.post('/auth/forgot-password', { email });
            if (res.data.success) {
                toast.success(res.data.message);
                navigate('/reset-password');
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Layout title={'Login'}>
            <Container
                className="d-flex justify-content-center align-items-center flex-column"
                style={{ maxWidth: '1200px', height: '70vh' }}
            >
                <h4 className="mb-3">RESET PASSWORD</h4>
                <Form onSubmit={handleSubmit} className="text-center" style={{ width: '400px' }}>
                    <p>Enter your email to receive instructions on how to reset your password.</p>
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
                </Form>
                <div className="text-center" style={{ fontSize: '14px', color: 'gray' }}>
                    Or return to{' '}
                    <Link to="/login" style={{ color: '#000' }}>
                        Login
                    </Link>
                </div>
            </Container>
        </Layout>
    );
};

export default ForgotPassword;
