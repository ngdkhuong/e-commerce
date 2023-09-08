import { Button, Container, FloatingLabel, Form } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import { useState } from 'react';
import newRequest from '../../utils/newRequest';
import { toast } from 'react-toastify';
import axios from 'axios';
import useForm from 'react-hook-form';

const ResetPassword = () => {
    const { register, errors, watch } = useForm({});
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const { id, token } = useParams();

    axios.defaults.withCredentials = true;
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            return toast('Passwords do not match');
        }

        try {
            const res = await newRequest.post(`/auth/reset-password/${token}`, { password });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                localStorage.setItem('currentUser', JSON.stringify(res.data));
            }
        } catch (error) {
            console.log(error);
            if (error.response.status === 401) {
                toast.warning(error.response.data.message);
            }
            if (error.response.status === 404) {
                toast.info(error.response.data.message);
            }
        }
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
                    <FloatingLabel controlId="floatingEmail" label="Password" className="mb-3">
                        <Form.Control
                            required
                            type="password"
                            placeholder="name@example.com"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            ref={register({
                                required: 'You must specify a password',
                                minLength: {
                                    value: 8,
                                    message: 'Password must have at least 8 characters',
                                },
                            })}
                        />
                        {errors.password && <p>{errors.password.message}</p>}
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingEmail" label="Confirm Password" className="mb-3">
                        <Form.Control
                            required
                            type="password"
                            placeholder="name@example.com"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            ref={register({
                                validate: (value) => value === password || 'The passwords do not match',
                            })}
                        />
                        {errors.password_repeat && <p>{errors.password_repeat.message}</p>}
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

export default ResetPassword;
