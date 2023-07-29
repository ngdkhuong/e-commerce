import { Outlet } from 'react-router-dom';
import newRequest from '../utils/newRequest';
import { useState, useEffect } from 'react';
import Loading from './Loading';
import { toast } from 'react-toastify';
import getCurrentUser from '../utils/getCurrentUser';

const ProtectedRoute = () => {
    const [success, setSuccess] = useState(false);
    const currentUser = getCurrentUser();

    useEffect(() => {
        const authCheck = async () => {
            const res = await newRequest.get('/auth/admin-auth');
            try {
                if (res.data.success) {
                    localStorage.setItem('currentUser', JSON.stringify(res.data));
                    toast.success(res.data && res.data.message);
                    setSuccess(true);
                }
            } catch (error) {
                setSuccess(false);
            }
        };

        if (currentUser) authCheck();
    }, [currentUser]);

    return success ? <Outlet /> : <Loading />;
};

export default ProtectedRoute;
