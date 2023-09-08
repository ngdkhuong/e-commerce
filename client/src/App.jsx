import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/user/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/ProtectedRoute';
import ForgotPassword from './pages/Auth/ForgotPassword';
import ResetPassword from './pages/Auth/ResetPassword';
import DirectionPassword from './pages/Auth/DirectionPassword';

const App = () => {
    const LayoutClient = () => {
        return (
            <div className="app">
                <Header />
                <ToastContainer />
                <Outlet />
                <Footer />
            </div>
        );
    };

    const router = createBrowserRouter([
        {
            path: '/',
            element: <LayoutClient />,
            children: [
                { path: '/', element: <Home /> },
                { path: '/about', element: <About /> },
                { path: '/contact', element: <Contact /> },
                { path: '/policy', element: <Policy /> },
                {
                    path: '/dashboard',
                    element: (
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    ),
                },
                { path: '/register', element: <Register /> },
                { path: '/forgot-password', element: <ForgotPassword /> },
                { path: '/reset-password', element: <ResetPassword /> },
                { path: '/direction', element: <DirectionPassword /> },
                { path: '/login', element: <Login /> },
                { path: '*', element: <PageNotFound /> },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
};

export default App;
