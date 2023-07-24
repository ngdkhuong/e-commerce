import { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const Loading = ({ path = 'login' }) => {
    const [count, setCount] = useState(3);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevValue) => --prevValue);
        }, 1000);
        count === 0 &&
            navigate(`/${path}`, {
                state: location.pathname,
            });
        return () => clearInterval(interval);
    }, [count, navigate, location, path]);

    return (
        <Container
            className="d-flex justify-content-center align-items-center flex-column"
            style={{ maxWidth: '1200px', height: '100vh' }}
        >
            <h1 className="Text-center">redirecting to you in {count} second </h1>
            <Spinner animation="border" role="status" />
        </Container>
    );
};

export default Loading;
