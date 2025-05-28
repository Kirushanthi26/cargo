import styled from "styled-components";
import logo1 from "../../assets/logos/business-insider.png";
import logo2 from "../../assets/logos/forbes.png";
import logo3 from "../../assets/logos/techcrunch.png";
import logo4 from "../../assets/logos/the-new-york-times.png";
import logo5 from "../../assets/logos/usa-today.png";

const ClientLogoSection = styled.section`
  background-color: #fff;
  padding: 4rem 0;
  width: 100%;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-block: 7rem;

  div {
    display: flex;
    justify-content: space-around;
    gap: 5rem;

    img {
      height: 4rem;
      filter: brightness(0);
      opacity: 40%;
    }
  }
`;

export const ClientLogo = () => {
  return (
    <ClientLogoSection>
      <div>
        <img src={logo1} alt="Client Logo 1" />
        <img src={logo2} alt="Client Logo 2" />
        <img src={logo3} alt="Client Logo 3" />
        <img src={logo4} alt="Client Logo 4" />
        <img src={logo5} alt="Client Logo 5" />
      </div>
    </ClientLogoSection>
  );
};
