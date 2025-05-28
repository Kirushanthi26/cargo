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

const LeftColumnFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding: 0 10rem 0 0;

  button {
    background-color: transparent;
    border: 1px solid rgb(235, 235, 235);
    cursor: pointer;
    color: black;
    padding: 0.5rem;
  }
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

const QuoteBox = styled.div`
  background-color: rgb(235, 235, 235);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 90% 85%, 80% 100%, 80% 85%, 0 85%);
  height: 25rem;
  padding: 2rem;
  display: flex;
  align-items: center;
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

const testimonials = {
  quote:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
  author: "John Deo",
  position: "Managing Director",
};

const accordionData = [
  "Dui ac hendrerit elementum quam ipsum auctor lorem",
  "Mauris vel magna a est lobortis volutpat",
  "Sed bibendum ornare lorem mauris feugiat suspendisse neque",
  "Nulla scelerisque dul hendrerit elementum quam",
];

export const TrustedClients = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <Section>
      <LeftColumn>
        <Title>Trusted Clients</Title>
        <Subtitle>Lorem ipsum dolor sit amet consectetur</Subtitle>
        <QuoteBox>
          <QuoteIcon>&ldquo;</QuoteIcon>
          <QuoteContent>
            <QuoteText>{testimonials.quote}</QuoteText>
          </QuoteContent>
        </QuoteBox>
        <LeftColumnFooter>
          <div>
            <button>
              <ChevronLeft size={16} />
            </button>
            <button>
              <ChevronRight size={16} />
            </button>
          </div>
          <div>
            <Author>{testimonials.author}</Author>
            <Position>{testimonials.position}</Position>
          </div>
        </LeftColumnFooter>
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
