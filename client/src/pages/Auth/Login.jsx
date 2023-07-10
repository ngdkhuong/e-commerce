import { useState } from 'react';
import { Button, Container, FloatingLabel, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import Layout from './../../components/Layout/Layout';
import newRequest from './../../utils/newRequest';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [answer, setAnswer] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await newRequest.post('/v1/auth/login', {
                email,
                password,
                // answer,
            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                navigate('/');
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong!');
        }
    };

    return (
        <Layout title={'Login'}>
            <Container
                className="d-flex justify-content-center align-items-center flex-column"
                style={{ maxWidth: '1200px', height: '70vh' }}
            >
                <h4 className="mb-3">YOUR ACCOUNT FOR EVERYTHING</h4>
                <Form onSubmit={handleSubmit} style={{ width: '400px' }}>
                    <FloatingLabel controlId="floatingEmail" label="Email address" className="mb-3">
                        <Form.Control
                            required
                            type="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                        <Form.Control
                            required
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FloatingLabel>
                    <div className="text-center my-3" style={{ fontSize: '14px', color: 'gray' }}>
                        By logging in, you agree to Nice{"'"}s{' '}
                        <Link to="/policy" style={{ color: '#000' }}>
                            Privacy Policy
                        </Link>
                    </div>
                    <Button variant="dark" type="submit" className="w-100 mb-3">
                        SIGN IN
                    </Button>
                    <div className="text-center" style={{ fontSize: '14px', color: 'gray' }}>
                        Not a Member?{' '}
                        <Link to="/register" style={{ color: '#000' }}>
                            Join us
                        </Link>
                    </div>
                </Form>
            </Container>
        </Layout>
    );
};

export default Login;
