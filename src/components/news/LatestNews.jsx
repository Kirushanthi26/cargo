import styled from "styled-components";
import img1 from "../../assets/image/c1.jpg";
import img2 from "../../assets/image/c2.jpg";
import img3 from "../../assets/image/c3.jpg";
import img4 from "../../assets/image/mariah-dalusong.jpg";

const newsData = [
  {
    date: "26",
    month: "MAY",
    image: img1,
    title: "CURABITUR LOREM UISM QUIS",
    admin: "Admin",
    comments: 15,
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames turpis egestas. Aenean non donec ...",
    bgColor: "#00B7E9",
  },
  {
    date: "22",
    month: "MAY",
    image: img2,
    title: "CURABITUR LOREM UISM QUIS",
    admin: "Admin",
    comments: 15,
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames turpis egestas. Aenean non donec ...",
    bgColor: "#FF6A6A",
  },
  {
    date: "20",
    month: "MAY",
    image: img3,
    title: "CURABITUR LOREM UISM QUIS",
    admin: "Admin",
    comments: 15,
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames turpis egestas. Aenean non donec ...",
    bgColor: "#00B7E9",
  },
  {
    date: "15",
    month: "MAY",
    image: img4,
    title: "CURABITUR LOREM UISM QUIS",
    admin: "Admin",
    comments: 15,
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames turpis egestas. Aenean non donec ...",
    bgColor: "#FF6A6A",
  },
];

const LatestNews = () => {
  return (
    <Container>
      <Heading>
        <h2>LATEST NEWS</h2>
        <p>
          <span /> INTEGER CONGUE ELIT
        </p>
      </Heading>
      <NewsGrid>
        {newsData.map((item, idx) => (
          <Card key={idx}>
            <ImageContainer>
              <img src={item.image} alt="news" />
              <DateTag bgColor={item.bgColor}>
                <strong>{item.date}</strong>
                <span>{item.month}</span>
              </DateTag>
            </ImageContainer>
            <NewsContent>
              <Title>{item.title}</Title>
              <Meta>
                <span>{item.admin}</span>
                <span>💬 {item.comments}</span>
              </Meta>
              <Description>{item.description}</Description>
            </NewsContent>
          </Card>
        ))}
      </NewsGrid>
    </Container>
  );
};

export default LatestNews;

const Container = styled.div`
  width: 80%;
  padding: 2rem;
  margin: 0 auto;
  height: 90vh;
  margin-bottom: 10rem;
`;

const Heading = styled.div`
  text-align: center;
  margin-bottom: 5rem;
  h2 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 2rem;
    color: #555;
    span {
      display: inline-block;
      width: 10px;
      height: 10px;
      background-color: #00b7e9;
      margin-right: 0.5rem;
    }
  }
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 3rem;
  justify-items: center;
`;

const Card = styled.div`
  background: #f3f4f6;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 250px;
  display: flex;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 50%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const DateTag = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${(props) => props.bgColor || "#000"};
  color: #fff;
  padding: 0.5rem;
  text-align: center;
  width: 3rem;
  height: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  strong {
    font-size: 1.2rem;
    line-height: 1;
  }
  span {
    font-size: 0.8rem;
  }
`;

const NewsContent = styled.div`
  width: 50%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: #1e293b;
`;

const Meta = styled.div`
  font-size: 1.3rem;
  color: #1e293b;
  display: flex;
  justify-content: start;
  margin: 0.5rem 0;
  gap: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #1e293b;
`;
