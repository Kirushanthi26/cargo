import styled from "styled-components";
import img1 from "../../assets/image/c3.jpg";
import img2 from "../../assets/image/c2.jpg";

const IntroImageStylesDiv = styled.div`
  position: relative;

  .intro-image--p3 {
    background-color: #f97316;
    width: 25rem;
    position: absolute;
    top: 40rem;
    left: 42rem;
    height: 15rem;
    padding: 2rem;
    clip-path: polygon(
      0 0,
      100% 0%,
      100% 75%,
      100% 100%,
      75% 100%,
      15% 100%,
      15% 15%
    );
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    text-align: center;

    span {
      font-size: 2.5rem;
      font-weight: 700;
      margin-left: 4rem;
    }

    .client-count {
      font-size: 1.5rem;
      font-weight: 400;
    }
  }
`;

const ImgIntroStyles1Box = styled.div`
  position: relative;
  height: 60rem;
`;

const ClipBoxLook = styled.div`
  width: 6rem;
  height: 25rem;
  position: absolute;
  bottom: 5rem;
  left: 3rem;
  z-index: 9999;
  background-image: linear-gradient(
    230deg,
    #075985 0%,
    #075985 60%,
    transparent 60%,
    transparent 77%,
    #f97316 77%,
    #f97316 100%
  );
  clip-path: polygon(0% 0%, 100% 30%, 100% 100%, 0% 100%);
`;

const ImgIntroStyles1 = styled.img`
  width: 25rem;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
  border-radius: 0.5rem;
  position: absolute;
  top: 20rem;
  left: 5rem;
  position: relative;
  z-index: 10;
`;

const ImgIntroStyles2 = styled.img`
  width: 30rem;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
  border-radius: 0.5rem;
  position: absolute;
  top: 5rem;
  left: 20rem;
`;

export const IntroImg = () => {
  return (
    <IntroImageStylesDiv>
      <ImgIntroStyles1Box>
        <ClipBoxLook></ClipBoxLook>
        <ImgIntroStyles1
          src={img1}
          alt="intro image 1"
          className="intro-image--p1"
        />
      </ImgIntroStyles1Box>
      <ImgIntroStyles2
        src={img2}
        alt="intro image 2"
        className="intro-image--p2"
      />
      <div className="intro-image--p3">
        <span>15,350+</span>
        <span className="client-count">Clients Worldwide</span>
      </div>
    </IntroImageStylesDiv>
  );
};
