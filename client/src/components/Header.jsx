import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
    // Search initial
    const navigate = useNavigate();
    const searchInput = useLocation();
    const URLSearch = new URLSearchParams(searchInput?.search);
    const searchQuery = URLSearch.getAll('q');
    const [search, setSearch] = useState(searchQuery);

    const handleSearch = (e) => {
        const { value } = e.target;
        setSearch(value);

        if (value) {
            navigate(`/search?q=${value}`);
        } else {
            navigate('/search');
        }
    };

    return (
        <header className="h-16 shadow-md bg-white fixed w-full z-40">
            <div className="h-full container mx-auto flex items-center px-4 justify-between">
                <div className="">
                    <Link to={'/'}>
                        <Logo w={90} h={50} />
                    </Link>
                </div>
                <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2">
                    <input
                        type="text"
                        placeholder="Search product here..."
                        className="w-full outline-none"
                        onChange={handleSearch}
                        value={search}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
