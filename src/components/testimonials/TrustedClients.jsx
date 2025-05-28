import { useState } from "react";
import styled from "styled-components";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 4rem;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  height: 60vh;
`;

const LeftColumn = styled.div`
  flex: 1;
  min-width: 300px;
  padding-right: 2rem;
`;

const RightColumn = styled.div`
  flex: 1;
  min-width: 300px;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-transform: uppercase;
`;

const Subtitle = styled.p`
  color: gray;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  margin-bottom: 6rem;
`;

const AccordionItem = styled.div`
  border-block: 1px solid #e5e7eb;
  padding: 2rem 0;
`;

const AccordionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-weight: 500;

  span {
    background-color: black;
    padding: 0.5rem 0.7rem;
    color: white;
  }
`;

const AccordionContent = styled.div`
  margin-top: 2rem;
  color: #555;
`;

const QuoteBox = styled.div`
  background-color: rgb(235, 235, 235);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 90% 85%, 80% 100%, 80% 85%, 0 85%);
  height: 25rem;
  padding: 2rem;
  display: flex;
  justify-content: center;
  position: relative;
`;

const QuoteIcon = styled.div`
  background-color: #991b1b;
  clip-path: polygon(0 0, 54% 0, 100% 100%, 0% 100%);
  color: white;
  font-size: 3rem;
  display: flex;
  align-self: stretch;
  padding: 1rem;
  margin-right: 1rem;
  position: absolute;
  top: 7rem;
  left: -1rem;
  width: 6rem;
  height: 4rem;
  z-index: 10;
  pointer-events: none;
`;

const QuoteContent = styled.div`
  position: relative;
  z-index: 0;
`;

const QuoteText = styled.p`
  color: #333;
  line-height: 1.6;
  padding: 4rem;
  text-align: justify;
`;

const Author = styled.p`
  font-weight: bold;
  margin-top: 1.5rem;
`;

const Position = styled.p`
  font-size: 1rem;
  color: gray;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    background-color: transparent;
    border: 1px solid rgb(235, 235, 235);
    cursor: pointer;
    color: black;
    padding: 0.5rem;
  }
`;

const testimonials = [
  {
    quote:
      "This company exceeded our expectations. Excellent communication and timely delivery every time. lorem ipsum dolor sit amet consectetur.",
    author: "Alice Brown",
    position: "Operations Manager",
  },
  {
    quote:
      "Reliable, professional, and truly customer-focused. We’ve been working with them for over a year now.",
    author: "Michael Tan",
    position: "Head of Logistics",
  },
  {
    quote:
      "They made our entire supply chain more efficient. Highly recommend their services.",
    author: "Samantha Lee",
    position: "Procurement Officer",
  },
];

const accordionData = [
  "Dui ac hendrerit elementum quam ipsum auctor lorem",
  "Mauris vel magna a est lobortis volutpat",
  "Sed bibendum ornare lorem mauris feugiat suspendisse neque",
  "Nulla scelerisque dul hendrerit elementum quam",
];

const TrustedClients = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  const handlePrev = () => {
    setTestimonialIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setTestimonialIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const current = testimonials[testimonialIndex];

  return (
    <Section>
      <LeftColumn>
        <Title>Trusted Clients</Title>
        <Subtitle>Lorem ipsum dolor sit amet consectetur</Subtitle>

        <QuoteBox>
          <QuoteIcon>&ldquo;</QuoteIcon>
          <QuoteContent>
            <QuoteText>{current.quote}</QuoteText>
          </QuoteContent>
        </QuoteBox>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "1rem",
            paddingRight: "10rem",
          }}
        >
          <ButtonGroup>
            <button onClick={handlePrev}>
              <ChevronLeft size={16} />
            </button>
            <button onClick={handleNext}>
              <ChevronRight size={16} />
            </button>
          </ButtonGroup>
          <div>
            <Author>{current.author}</Author>
            <Position>{current.position}</Position>
          </div>
        </div>
      </LeftColumn>

      <RightColumn>
        <Title>Why Choose Us</Title>
        <Subtitle>Lorem ipsum dolor sit amet consectetur</Subtitle>
        {accordionData.map((item, index) => (
          <AccordionItem key={index}>
            <AccordionTitle
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              {item} <span>+</span>
            </AccordionTitle>
            {activeIndex === index && (
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </AccordionContent>
            )}
          </AccordionItem>
        ))}
      </RightColumn>
    </Section>
  );
};

export default TrustedClients;
