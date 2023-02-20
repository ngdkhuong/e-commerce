import styled from 'styled-components';

const Container = styled.div`
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
        url('https://archziner.com/wp-content/uploads/2021/01/neymar-jr-turning-to-the-camera-wearing-black-nike-t-shirt-nike-wallpaper-nike-boots-around-his-shoulder-tied-together-black-background.jpg');
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
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
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0 ;
    padding: 10px;
    outline none;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: #fff;
    margin: 20px 0;
`;

const Link = styled.a`
    margin: 5px 0;
    font-size: 14px;
    cursor: pointer;
    color: white;
`;

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Button>LOGIN</Button>
                    <Link>Forgotten your password ?</Link>
                    <Link>Create a new account</Link>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Login;
