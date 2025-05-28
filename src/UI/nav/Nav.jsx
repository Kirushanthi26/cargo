import styled from "styled-components";
import logoImg from "../../assets/image/logo.png";

const NavHeader = styled.header`
  background-color: #fff;
  color: white;
  padding: 1rem;
  height: 10vh;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  font-size: 2rem;
  font-weight: bold;
  gap: 1rem;
  span {
    font-size: 2.4rem;
    font-weight: 700;
  }
`;

const LogoImg = styled.img`
  height: 6rem;
`;

const NavList = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 6rem;
    align-items: center;
    text-transform: uppercase;
    font-size: 1.6rem;
  }

  li {
    a {
      color: black;
      text-decoration: none;
      transition: color 0.3s;
      font-weight: 500;
      transition: border-left 0.2s, padding-left 0.2s;

      &:hover,  &:active  {
        border-left: 0.5rem solid #f59e0b; 
        padding-left: 1rem;
    }
  }
`;

const QuoteLink = styled.a`
background-color: #f59e0b;
  color: white !important;
  text-decoration: none;
  padding: 1rem 2rem;
  transition: background-color 0.3s;
  margin-right: 1rem;

  &:hover {
    background-color: #d97706;
  }
}
`;

const SignInLink = styled.a`
  background-color:black;
  color: white !important;
  text-decoration: none;
  padding: 1rem 2rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: grey; 
  }
}
`;

export const Nav = () => {
  return (
    <NavHeader>
      <LogoLink href="#">
        <span>Cargo</span>
        <LogoImg src={logoImg} alt="LOGO" />
      </LogoLink>

      <NavList>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Page</a>
          </li>
          <li>
            <a href="#">tracking</a>
          </li>
          <li>
            <a href="#">services</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <QuoteLink href="#">GET A QUOTE</QuoteLink>
            <SignInLink href="#">SIGN IN</SignInLink>
          </li>
        </ul>
      </NavList>
    </NavHeader>
  );
};
