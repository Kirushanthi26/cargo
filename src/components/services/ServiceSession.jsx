import { ServiceCard } from "./ServiceCard";
import { styled } from "styled-components";

const Section = styled.section`
  background-color: #fff;
  width: 100%;
  height: 60vh;
  padding: 0 4rem;
  margin-top: 5rem;

  h1 {
    text-align: center;
    color: black;
    padding: 2rem 0;
    font-size: 3.5rem;
  }

  h6 {
    text-align: center;
    color: #65a30d;
    padding-top: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: capitalize;
  }
`;

const CardsContainer = styled.div`
  padding: 6rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 5rem;
  width: 100%;
`;

const ServiceFooter = styled.div`
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  span {
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const SpanBtn = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  font-size: 1.2rem;
`;

const SelectCardBtn = styled.button`
  background-color: #d1d5db;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s;

  &:hover,
  &:active {
    border-color: #65a30d;
  }

  &:focus {
    outline: none;
  }
`;

export const ServiceSession = () => {
  return (
    <Section>
      <h6>Real Solution, real fast!</h6>
      <h1>Best Global Logistics Services.</h1>
      <CardsContainer>
        <ServiceCard />
        <ServiceCard />
      </CardsContainer>
      <ServiceFooter>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <span>
            Est, voluptate?<SpanBtn>&rarr;</SpanBtn>
          </span>
        </p>
        <div>
          <SelectCardBtn></SelectCardBtn>
          <SelectCardBtn></SelectCardBtn>
          <SelectCardBtn></SelectCardBtn>
        </div>
      </ServiceFooter>
    </Section>
  );
};
