import styled from 'styled-components';
const StyledTitle = styled.h1`
    color: white;
    font-size: 20px;
    font-weight: 500;
    position: absolute;
    top: -10px;
`;

const Title = ({ className, children }) => {
    return <StyledTitle className={className}>{children}</StyledTitle>;
};

export default Title;
