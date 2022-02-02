import styled from "styled-components";
export const BooksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledArticle = styled.article`
  position: relative;
  text-align: left;
  padding: 0.5rem 1rem 0.5rem 1.7rem;
  cursor: pointer;
  margin: 1rem;
  height: 300px;
  width: 200px;
  border: 2px dotted rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: flex-end;
  background: ${({ index }) =>
    "rgba(" +
    Math.ceil(Math.random() * 20) * index++ +
    ", " +
    Math.ceil(Math.random() * 20) * index++ +
    ", " +
    Math.ceil(Math.random() * 50) * index++ +
    ", 0.3)"};
  /* background: ${(props) =>
    "rgba(" +
    Math.floor(Math.random() * 25) * props.index +
    ", " +
    (Math.floor(Math.random() * 25) / 2) * props.index +
    ", " +
    Math.ceil(Math.random() * 25) * props.index +
    ", 0.3)"}; */

  .left-line {
    height: 100%;
    width: 4px;
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    left: 0.9rem;
    bottom: 0;
  }
  p:first-of-type {
    font-size: 1.2rem;
    margin-bottom: 0.2rem;
  }
  p:last-of-type {
    font-size: 0.7rem;
  }
`;
