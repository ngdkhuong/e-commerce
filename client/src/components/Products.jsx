import styled from 'styled-components';
import Product from './Product';
import Title from './Title';
import { popularProduct } from './../data';

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
`;

const Products = () => {
    return (
        <Container>
            <Title>Products</Title>
            {popularProduct.map((item) => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
    );
};

export default Products;
