import styled from "styled-components";

const statsData = [
  { value: "890", label: "Deliveries Packages" },
  { value: "137", label: "Countries covered" },
  { value: "740", label: "Tons shipped" },
  { value: "600", label: "Satisfied Clients" },
];

const StatsSection = styled.section`
  width: 80%;
  margin: 0 auto;
  padding: 4rem;
  height: 45vh;
  margin-top: 10rem;
`;

const StatsGrid = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  height: 30vh;
`;

const StatCard = styled.div`
  min-width: 20rem;
  min-height: 10rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  position: relative;
`;

const StatValue = styled.p`
  font-size: 4rem;
  font-weight: 500;
  color: #0c4a6e;
  position: relative;
  z-index: 10;
`;

const StatLabel = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: #0c4a6e;
  word-break: break-word;
  white-space: normal;
  max-width: 100px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
`;

const StatsSpan = styled.span`
  font-size: 10.5rem;
  font-weight: 500;
  color: white;
  position: absolute;
  left: 0;
  top: 0;
  text-shadow: 0 -2px 2rem rgba(0, 0, 0, 0.15);
`;

export const Stats = () => {
  return (
    <StatsSection>
      <StatsGrid>
        {statsData.map((stat, index) => (
          <StatCard key={index}>
            <StatsSpan>{stat.value}</StatsSpan>
            <StatValue>{stat.value}</StatValue>
            <StatLabel>{stat.label}</StatLabel>
          </StatCard>
        ))}
      </StatsGrid>
    </StatsSection>
  );
};
