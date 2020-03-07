import styled from "styled-components";

const Card = styled.div`
  background-color: #fff;
  font-size: calc(10px + 2vmin);
  border-radius: 8px;
  box-shadow: #ccc 10px 10px 40px;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.2em;
  margin: 0;
`;

const Body = styled.div`
  padding-top: 20px;
  font-size: 0.6em;
`;

Card.Header = Header;
Card.Title = Title;
Card.Body = Body;

export default Card;
