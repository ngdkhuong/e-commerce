import styled from 'styled-components';
import { categories } from '../data';
import CategoryItem from './CategoryItem';
import Title from './Title';

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
`;

const Categories = () => {
    return (
        <Container>
            <Title>Categories</Title>
            {categories.map((item) => (
                <CategoryItem item={item} />
            ))}
        </Container>
    );
};

export default Categories;
