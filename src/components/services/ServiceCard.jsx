import { styled } from "styled-components";

const CardDiv = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.25);
  gap: 2rem;
  width: 58rem;
  height: 28rem;
`;

const CardImgDiv = styled.div`
  flex-basis: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardTextDiv = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;

  & > *:not(:last-child) {
    margin-bottom: 2.5rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 600;
    color: black;
  }

  p {
    font-size: 1.6rem;
    font-weight: 400;
    color: #475569;
    line-height: 1.3;
  }

  button {
    background-color: transparent;
    border: none;
    color: black;
    font-size: 1.6rem;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: black;
      color: white;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      font-size: 1.2rem;
    }
  }
`;

export const ServiceCard = ({ card }) => {
  return (
    <CardDiv>
      <CardImgDiv>
        <img src={card.img} alt="test" />
      </CardImgDiv>
      <CardTextDiv>
        <h2>{card.title}</h2>
        <p>{card.description}</p>
        <button>
          <span>&rarr;</span>Read More
        </button>
      </CardTextDiv>
    </CardDiv>
  );
};
