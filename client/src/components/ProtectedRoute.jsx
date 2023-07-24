import { Outlet } from 'react-router-dom';
import newRequest from '../utils/newRequest';
import { useState } from 'react';
import Loading from './Loading';

const ProtectedRoute = () => {
    const [success, setSuccess] = useState(false);

    async () => {
        try {
            const res = await newRequest.get('/auth/admin-auth');
            if (res && res.data.success) {
                localStorage.setItem('currentUser', JSON.stringify(res.data));
                if (res.data.user.role === 1) return setSuccess(true);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return success ? <Outlet /> : <Loading />;
};

export default ProtectedRoute;
