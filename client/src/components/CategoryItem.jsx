import styled from 'styled-components';
import Button from './Button/Button';

const Container = styled.div`
    flex: 1;
    height: 50vh;
    margin: 5px;
    position: relative;
    /* From https://css.glass */
    background: rgba(228, 228, 228, 0.12);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3.4px);
    -webkit-backdrop-filter: blur(3.4px);
    border: 1px solid rgba(228, 228, 228, 0.25);
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Info = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Title = styled.h1`
    color: white;
`;

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    );
};

export default CategoryItem;
