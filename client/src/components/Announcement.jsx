import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    background: rgb(63, 94, 251);
    background: linear-gradient(52deg, rgba(63, 94, 251, 1) 0%, rgba(55, 182, 119, 1) 67%);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
`;

const Announcement = () => {
    return <Container>Free Delivery</Container>;
};

export default Announcement;
