import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid lightgrey;
`;

export const Title = styled.div`
  border-bottom: 1px solid lightgrey;
  width: 75%;
  margin: auto;

  & > h3 {
    font-weight: 600;
  }
`;

export const CountContainer = styled.div`
  font-size: 3rem;
`;

export const Button = styled.button`
  margin: 1rem 1rem 0;
`;
