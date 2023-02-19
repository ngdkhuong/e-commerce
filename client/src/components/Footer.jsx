import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p``;

const SocialContainer = styled.div``;

const SocialIcon = styled.div``;

const Center = styled.div`
    flex: 1;
`;

const Right = styled.div`
    flex: 1;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>KuonDev</Logo>
                <Desc>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo amet, velit doloribus enim fugit
                    inventore et rerum recusandae modi libero dolor mollitia sunt deserunt voluptas ullam soluta saepe
                    voluptatum consequuntur!
                </Desc>
                <SocialContainer>
                    <SocialIcon>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon>
                        <LinkedIn />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center></Center>

            <Right />
        </Container>
    );
};

export default Footer;
