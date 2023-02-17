import styled from 'styled-components';
import './button.css';

const StyledButton = styled.button`
    font-size: ${(props) => (props.size === 'lg' ? '20px' : props.size === 'md' ? '18px' : '16px')};
`;

const Button = ({ type, variant, className, id, onClick, children, size }) => {
    return (
        <StyledButton
            type={type ? type : 'button'}
            variant={variant}
            className={className ? `btn-component ${className}` : 'btn-component'}
            id={id}
            onClick={onClick}
            size={size}
        >
            {children}
        </StyledButton>
    );
};

export default Button;
