import styled from "styled-components";

export const StyledNav = styled.nav`
  padding: 1rem;
  margin: 0 0 1rem 0;
  text-align: center;
  position: sticky;
  background: lightGray;
  top: 0;
  a {
    padding: 0.5rem 1rem;
    margin: 0 1rem;
    text-decoration: none;
    border-radius: 8px;
    transition: all 0.5s ease-in-out;
    &:hover {
      background: lightGray;
      color: black;
    }
  }
`;
