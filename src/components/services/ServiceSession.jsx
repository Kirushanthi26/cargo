import { useEffect, useState } from "react";
import { ServiceCard } from "./ServiceCard";
import { styled } from "styled-components";

const cardData = [
  {
    img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Express Delivery",
    description:
      "Fast and reliable shipping services ensuring timely delivery anywhere in the world.",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661880749508-71d9e7170508?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Freight Forwarding",
    description:
      "Customized solutions for moving large shipments across land, sea, or air.",
  },
  {
    img: "https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Warehousing",
    description:
      "Secure and scalable storage options tailored to your business needs.",
  },
  {
    img: "https://images.unsplash.com/photo-1651916850717-1f91cb32ec2c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Customs Clearance",
    description:
      "Hassle-free import/export handling with complete documentation support.",
  },
  {
    img: "https://images.unsplash.com/photo-1645299023517-ada166ebc559?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "E-commerce Logistics",
    description:
      "Seamless order fulfillment and last-mile delivery for online businesses.",
  },
  {
    img: "https://images.unsplash.com/photo-1571244222371-0b0b60f3c92b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Supply Chain Management",
    description:
      "End-to-end solutions for optimizing your supply chain performance.",
  },
];

const Section = styled.section`
  background-color: #fff;
  width: 100%;
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
  transition: all 0.7s;
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
  background-color: ${({ active }) => (active ? "#65a30d" : "#d1d5db")};
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #65a30d;
  }

  &:focus {
    outline: none;
  }
`;

export const ServiceSession = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerSlide = 2;
  const totalSlides = Math.ceil(cardData.length / cardsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 8000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const handleSelect = (index) => {
    setCurrentIndex(index);
  };

  const currentCards = cardData.slice(
    currentIndex * cardsPerSlide,
    currentIndex * cardsPerSlide + cardsPerSlide
  );

  return (
    <Section>
      <h6>Real Solution, real fast!</h6>
      <h1>Best Global Logistics Services.</h1>
      <CardsContainer>
        {currentCards.map((card, index) => (
          <ServiceCard key={index} card={card} />
        ))}
      </CardsContainer>
      <ServiceFooter>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <span>
            Est, voluptate?<SpanBtn>&rarr;</SpanBtn>
          </span>
        </p>
        <div>
          {[...Array(totalSlides)].map((_, i) => (
            <SelectCardBtn
              key={i}
              active={i === currentIndex}
              onClick={() => handleSelect(i)}
            />
          ))}
        </div>
      </ServiceFooter>
    </Section>
  );
};
