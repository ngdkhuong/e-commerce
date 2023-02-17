import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 14px;
`;

const Announcement = () => {
    return <Container>Free Delivery</Container>;
};

export default Announcement;
