import { Navigate } from 'react-router-dom';
import getCurrentUser from '../utils/getCurrentUser';

const ProtectedRoute = ({ children }) => {
    const currentUser = getCurrentUser();
    if (currentUser.user.role === 1 && currentUser) {
        return <Navigate to="" replace />;
    }
};

export default ProtectedRoute;
