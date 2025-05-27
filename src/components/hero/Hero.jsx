import styled from "styled-components";
import heroImg from "../../assets/image/mariah-dalusong.jpg";

const HeroSection = styled.section`
  background-image: linear-gradient(
      to right,
      white 25%,
      rgba(0, 0, 0, 0.12) 25%
    ),
    url(${heroImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 90vh;
  display: flex;
  align-items: center;
`;

const HeroStyles = styled.div`
  position: relative;
`;

const HeroTextBox = styled.div`
  width: 38%;
  height: 80vh;
  background-color: #fff;
  padding: 8rem 4rem;

  & > *:not(:last-child) {
    margin-bottom: 4rem;
  }

  .hero-subtitle {
    font-size: 1.7rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    border-left: 0.5rem solid #f59e0b;
    padding-left: 1rem;
    text-transform: uppercase;
  }

  h1 {
    text-transform: capitalize;
    font-size: 7rem;
    font-weight: 400;
    color: black;
    span {
      margin-top: 1rem;
      display: block;
      color: #f59e0b;
      font-size: 7rem;
      font-weight: 700;
    }
  }

  p {
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: #333;
    font-weight: 400;
  }

  a {
    display: inline-block;
    font-size: 1.6rem;
    background-color: #f59e0b;
    color: white;
    text-decoration: none;
    padding: 2rem 3rem;
    border: none;
    text-transform: uppercase;

    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #fbbf24;
      color: white;
    }
  }
`;

const HeroButton = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #f59e0b;
  color: white;
  text-decoration: none;
  padding: 3rem 3rem;
  border: none;
  font-size: 1.5rem;
  letter-spacing: 1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  z-index: 1;
  &:hover {
    background-color: #fbbf24;
    color: white;
  }
`;

export const Hero = () => {
  return (
    <HeroSection>
      <HeroStyles>
        <HeroTextBox>
          <p className="hero-subtitle">logistic</p>
          <h1>
            Best Shipping <span>partner</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            ratione. Quisquam nulla voluptates, molestiae commodi quia doloribus
            praesentium quidem at aliquid. Asperiores harum repellendus veniam.
          </p>
          <a href="#">Discover more</a>
        </HeroTextBox>
      </HeroStyles>
      <HeroButton className="hero-btn">2/2 &larr; &rarr;</HeroButton>
    </HeroSection>
  );
};
