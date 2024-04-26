import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <>
            <div className="App">
                <Header />
                <main className="min-h-[calc(100vh-120px)] pt-16">
                    <Outlet />
                </main>
            </div>
        </>
    );
}

export default App;
