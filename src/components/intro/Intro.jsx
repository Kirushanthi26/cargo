import styled from "styled-components";
import { IntroImg } from "./IntroImg";

const WelcomeSection = styled.section`
  background-color: #fff;
  height: 80vh;
  width: 100%;
  padding: 5rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6rem;
  margin-top: 5rem;
`;

const IntroImgs = styled.div`
  background-color: #fff;
  width: 100%;
  height: 80vh;
  position: relative;
`;

const IntroTextBox = styled.div`
  background-color: #fff;
  width: 100%;
  height: 80vh;
  padding: 8rem 8rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  line-height: 2.4rem;

  .hero-text-box1 {
    position: relative;
  }
  

  & > *:not(:last-child, :nth-last-child(3)) {
    margin-bottom: 3rem;
  }

  h1 {
    color: black;
    font-size: 5rem;
    font-weight: 500;
    line-height: 1.2;
    position: relative;
    z-index: 10;

    span {
      color: #f97316;
    }
  }

  .hero-subtitle {
    color: black
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 2rem;
  }

  .hero-subtitle-secondary {
    color: #6b7280;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.5;
  }

    .button-styles {
      background-color: #f1f5f9;
      color: #075985;
      font-size: 1.25rem;
      font-weight: 700;
      padding: 2rem 4rem;
      border: none;
      cursor: pointer;
      text-transform: uppercase;

      &:hover {
        background-color:rgb(185, 191, 199)
      }
    }
`;

const BoxStyle = styled.div`
  position: absolute;
  top: -0.5rem;
  left: -2rem;
  background-color: #f1f5f9;
  min-height: 12.5rem;
  width: 6rem;
  transform: skewY(35deg);
`;

export const Intro = () => {
  return (
    <WelcomeSection>
      <IntroImgs>
        <IntroImg />
      </IntroImgs>
      <IntroTextBox>
        <div className="hero-text-box1">
          <BoxStyle></BoxStyle>
          <h1>
            TransMax Logistics <br /> Around <span>the World</span>
          </h1>
        </div>
        <p className="hero-subtitle">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem laborum delectus quam tempore cumque incidunt,
          repellendus optio consequuntur similique aspernatur nam dolore
          eveniet, quis animi rerum repudiandae, accusamus temporibus dolor.
        </p>
        <p className="hero-subtitle-secondary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem laborum delectus quam tempore cumque incidunt,
          repellendus optio consequuntur similique aspernatur nam dolore
          eveniet, quis animi rerum repudiandae, accusamus temporibus dolor.
        </p>

        <button className="button-styles">More about us</button>
      </IntroTextBox>
    </WelcomeSection>
  );
};
