import { useState } from 'react';
import { Button, Container, FloatingLabel, Form } from 'react-bootstrap';
import Layout from './../../components/Layout/Layout';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, password, phone, address });
    };

    return (
        <Layout title={'Register'}>
            <Container
                className="d-flex justify-content-center align-items-center flex-column"
                style={{ maxWidth: '1200px', height: '70vh' }}
            >
                <h1>Register</h1>
                <Form onSubmit={handleSubmit}>
                    <FloatingLabel controlId="floatingName" label="Username" className="mb-3">
                        <Form.Control
                            required
                            type="text"
                            placeholder="Username"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </FloatingLabel>
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
                    <FloatingLabel controlId="floatingPhone" label="Phone" className="mb-3">
                        <Form.Control
                            required
                            type="text"
                            placeholder="0123456789"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingAddress" label="Address" className="mb-3">
                        <Form.Control
                            required
                            type="text"
                            placeholder="Vietnam"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </FloatingLabel>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </Layout>
    );
};

export default Register;
