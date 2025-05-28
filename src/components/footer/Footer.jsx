import styled from "styled-components";
import {
  Phone,
  MapPin,
  ChevronUp,
  Facebook,
  Video,
  Palette,
  Dribbble,
  ChevronRight,
  Pointer,
} from "lucide-react";
import img1 from "../../assets/image/c1.jpg";
import img2 from "../../assets/image/c2.jpg";
import img3 from "../../assets/image/c3.jpg";
import img4 from "../../assets/image/mariah-dalusong.jpg";

const FooterWrapper = styled.footer`
  background-color: #4a5a71;
  color: #fff;
  padding: 2rem 15rem 2rem 15rem;
  min-height: 70vh;
`;

const NewsletterSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: start;
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 4rem;
  margin-bottom: 2.5rem;
`;

const Description = styled.p`
  color: #d1d1d1;
`;

const SubscribeForm = styled.div`
  display: flex;
  gap: 1rem;

  input {
    padding: 2rem 1rem;
    border: none;
    border-radius: 4px;
    width: 35rem;
  }

  button {
    background-color: #f9a825;
    border: none;
    color: white;
    padding: 0.8rem 1.2rem;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }

  margin-bottom: 10rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const Section = styled.div``;

const SectionTitle = styled.h4`
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    display: block;
    margin-top: 2rem;
    width: 30%;
    border-bottom: 2px dashed #f9a825;
  }
`;

const ContactBox = styled.div`
  font-size: 1.2rem;
  color: #94a3b8;
  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.3rem 0;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  color: #94a3b8;

  span {
    flex: 1;
    font-size: 0.95rem;
  }
`;

const RotatedIcon = styled(Pointer)`
  transform: rotate(90deg);
`;

const MiniGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  img {
    width: 100%;
    height: 60px;
    object-fit: cover;
    border-radius: 4px;
  }
`;

const BottomBar = styled.div`
  margin-top: 2rem;
  border-top: 1px solid #6c7b93;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 0.9rem;
  color: #ccc;
  position: relative;
`;

const CopyrightDiv = styled.div`
  color: #ccc;
  font-size: 1.5rem;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  svg {
    cursor: pointer;
  }
`;

const ScrollTop = styled.div`
  position: absolute;
  bottom: 0rem;
  right: -6rem;
  background: #f9a825;
  padding: 0.6rem;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <NewsletterSection>
        <div>
          <Title>Weekly Newsletter</Title>
          <Description>
            There are many vaiations of passages of lorem ipsum available.
          </Description>
        </div>
        <SubscribeForm>
          <input type="email" placeholder="Enter Your Mail" />
          <button>SUBSCRIBE</button>
        </SubscribeForm>
      </NewsletterSection>

      <Grid>
        <Section>
          <SectionTitle>About Us</SectionTitle>
          <ContactBox>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ContactItem>
              <Phone size={16} /> (+94) 11 434 7575
            </ContactItem>
            <ContactItem>
              <MapPin size={16} /> 42 Lily Ave, Colombo 00600
            </ContactItem>
          </ContactBox>
        </Section>

        <Section>
          <SectionTitle>Latest News</SectionTitle>
          <ChevronRight size={16} color="#f9a825" />
          <ContactBox>
            <List>
              <ListItem>
                <ChevronRight size={16} color="#f9a825" />
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
              </ListItem>
              <ListItem>
                <ChevronRight size={16} color="#f9a825" />
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
              </ListItem>
            </List>
            <p>10 Minutes Ago</p>
          </ContactBox>
        </Section>

        <Section>
          <SectionTitle>Customer Service</SectionTitle>
          <ContactBox>
            <List>
              <ListItem>
                <RotatedIcon size={16} color="#f9a825" /> Support Forums
              </ListItem>
              <ListItem>
                <RotatedIcon size={16} color="#f9a825" /> Communication
              </ListItem>
              <ListItem>
                <RotatedIcon size={16} color="#f9a825" /> FAQS
              </ListItem>
              <ListItem>
                <RotatedIcon size={16} color="#f9a825" /> Privacy Policy
              </ListItem>
              <ListItem>
                <RotatedIcon size={16} color="#f9a825" /> Rules & Condition
              </ListItem>
              <ListItem>
                <RotatedIcon size={16} color="#f9a825" /> Contact Us
              </ListItem>
            </List>
          </ContactBox>
        </Section>

        <Section>
          <SectionTitle>Customer Service</SectionTitle>
          <MiniGallery>
            <img src={img1} alt="1" />
            <img src={img2} alt="2" />
            <img src={img3} alt="3" />
            <img src={img4} alt="4" />
            <img src={img3} alt="5" />
            <img src={img1} alt="6" />
          </MiniGallery>
        </Section>
      </Grid>

      <BottomBar>
        <CopyrightDiv>
          Copyright © 2021 All Rights Reserved. Site By Xiteb®
        </CopyrightDiv>
        <SocialIcons>
          <Facebook size={18} />
          <Video size={18} />
          <Palette size={18} />
          <Dribbble size={18} />
        </SocialIcons>

        <ScrollTop>
          <ChevronUp size={24} />
        </ScrollTop>
      </BottomBar>
    </FooterWrapper>
  );
};

export default Footer;
