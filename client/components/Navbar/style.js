import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin: auto;
  background-color: white;
  margin-left: 2.5rem;
`;

export const Item = styled.div`
  padding: 1rem;
  margin: 0.5rem;
  border-bottom: ${(props) => (props.path ? 2 : 0)}px solid skyblue;
`;
