import { onAuthStateChanged } from 'firebase/auth';
import { Suspense, lazy, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/header';
import Loader from './components/loader';
import ProtectedRoute from './components/protected-route';
import { auth } from './firebase';
import { getUser } from './redux/api/userAPI';
import { userExist, userNotExist } from './redux/reducer/userReducer';
import { RootState } from './redux/store';

const Home = lazy(() => import('./pages/home'));

const App = () => {
    const { user, loading } = useSelector((state: RootState) => state.userReducer);

    return loading ? (
        <Loader />
    ) : (
        <Router>
            <Header user={user} />
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Suspense>
            <Toaster position="bottom-center" />
        </Router>
    );
};

export default App;
