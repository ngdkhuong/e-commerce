import { Email, Facebook, Instagram, Language, LinkedIn, Phone, Room, Twitter } from '@mui/icons-material';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    color: #fff;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
    display: inline-block;
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    gap: 10px;
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
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55acee">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="3a7bd5">
                        <LinkedIn />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Order Status</ListItem>
                    <ListItem>Delivery</ListItem>
                    <ListItem>Returns</ListItem>
                    <ListItem>Payment Options</ListItem>
                    <ListItem>Contact Us</ListItem>
                    <ListItem>News</ListItem>
                    <ListItem>Careers</ListItem>
                    <ListItem>Investors</ListItem>
                    <ListItem>Sustainability</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room />
                    District 12, Ho Chi Minh City, Viet Nam
                </ContactItem>
                <ContactItem>
                    <Phone />
                    +1 234 56 789
                </ContactItem>
                <ContactItem>
                    <Email />
                    Email: ryannguyen@gmail.com
                </ContactItem>
                <ContactItem>
                    <Language />
                    Website: https://kuondev.com
                </ContactItem>
            </Right>
        </Container>
    );
};

export default Footer;
