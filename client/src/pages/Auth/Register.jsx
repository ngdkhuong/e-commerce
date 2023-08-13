import { useState } from 'react';
import { Button, Container, FloatingLabel, Form } from 'react-bootstrap';
import Layout from './../../components/Layout/Layout';
import newRequest from './../../utils/newRequest';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await newRequest.post('/auth/register', {
                name,
                email,
                password,
                phone,
                address,
            });
            if (res && res.data.success) {
                if (res.status === 200) {
                    toast.warning(res.data && res.data.message);
                }
                if (res.status === 201) {
                    toast.success(res.data && res.data.message);
                }
                navigate('/login');
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };

    return (
        <Layout title={'Register'}>
            <Container
                className="d-flex justify-content-center align-items-center flex-column my-5"
                style={{ maxWidth: '1200px', height: '80vh' }}
            >
                <h4 className="mb-3">BECOME A MEMBER</h4>
                <Form onSubmit={handleSubmit} style={{ width: '400px' }}>
                    <FloatingLabel controlId="floatingName" label="Username" className="mb-3">
                        <Form.Control
                            required
                            type="text"
                            placeholder=""
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            autoFocus
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingEmail" label="Email address" className="mb-3">
                        <Form.Control
                            required
                            type="email"
                            placeholder=""
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                        <Form.Control
                            required
                            type="password"
                            placeholder=""
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPhone" label="Phone" className="mb-3">
                        <Form.Control
                            required
                            type="text"
                            placeholder=""
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingAddress" label="Address" className="mb-3">
                        <Form.Control
                            required
                            type="text"
                            placeholder=""
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </FloatingLabel>
                    <div className="text-center my-3" style={{ fontSize: '14px', color: 'gray' }}>
                        By creating an account, you agree to Nice{"'"}s{' '}
                        <Link to="/policy" style={{ color: '#000' }}>
                            Privacy Policy
                        </Link>
                    </div>
                    <Button variant="dark" type="submit" className="w-100 mb-3">
                        REGISTER
                    </Button>
                    <div className="text-center" style={{ fontSize: '14px', color: 'gray' }}>
                        Already a Member?{' '}
                        <Link to="/login" style={{ color: '#000' }}>
                            Login
                        </Link>
                    </div>
                </Form>
            </Container>
        </Layout>
    );
};

export default Register;
