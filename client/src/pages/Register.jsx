import styled from 'styled-components';

const Container = styled.div`
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
        url('https://c4.wallpaperflare.com/wallpaper/803/729/214/karlie-kloss-dark-nike-wallpaper-preview.jpg');
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background: rgb(63, 94, 251);
    background: linear-gradient(52deg, rgba(63, 94, 251, 1) 0%, rgba(66, 75, 115, 1) 83%);
    border-radius: 20px;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 500;
    color: #fff;
`;

const Form = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: #fff;
    margin: 20px 0;
    cursor: pointer;
`;

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name" />
                    <Input placeholder="last name" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                </Form>
                <Button>CREATE</Button>
            </Wrapper>
        </Container>
    );
};

export default Register;
