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
    background: #0f2027; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
        to right,
        #2c5364,
        #203a43,
        #0f2027
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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
