import styled from 'styled-components';
import { Send } from '@mui/icons-material';

const Container = styled.div`
    height: 60vh;
    background: rgb(63, 94, 251);
    background: linear-gradient(52deg, rgba(63, 94, 251, 1) 0%, rgba(66, 75, 115, 1) 83%);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const StyledTitle = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`;

const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin: 20px;
`;

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    // border: 1px solid lightgray;
`;

const Input = styled.input`
    border: none;
    outline: none;
    flex: 8;
    padding-left: 20px;
`;

const StyledButton = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: #fff;
`;

const Newsletter = () => {
    return (
        <Container>
            <StyledTitle>Email</StyledTitle>
            <Desc>Inspired by Cristiano. Designed to meet the needs of the fastest players on earth.</Desc>
            <InputContainer>
                <Input placeholder="Your email" />
                <StyledButton>
                    <Send />
                </StyledButton>
            </InputContainer>
        </Container>
    );
};

export default Newsletter;
