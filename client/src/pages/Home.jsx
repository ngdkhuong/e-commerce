import React from 'react';
import styled from 'styled-components';
import Announcement from './../components/Announcement';
import Navbar from './../components/Navbar';
import Slider from './../components/Slider';
import Categories from './../components/Categories';
import Products from './../components/Products';
import Newsletter from './../components/Newsletter';
import Footer from './../components/Footer';

const Container = styled.div`
    background: rgb(63, 94, 251);
    background: linear-gradient(52deg, rgba(63, 94, 251, 1) 0%, rgba(55, 182, 119, 1) 67%);
`;

const Home = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default Home;
