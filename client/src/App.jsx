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
                { path: '/dashboard', element: <Dashboard /> },
                { path: '/register', element: <Register /> },
                { path: '/login', element: <Login /> },
                { path: '*', element: <PageNotFound /> },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
};

export default App;
