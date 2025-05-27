import styled from "styled-components";

const StyledLayout = styled.div`
  background-color: #fff;
  max-width: 100%;
  padding: 0 4rem;
  margin: 0 auto;
`;

export const Layout = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>;
};
