import styled from "styled-components";

export const Form = styled.div`
  margin: 1.2rem 0;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid grey;
  padding: 0.3rem;
  font-size: 1rem;
  text-align: center;

  & :focus {
    outline: none;
  }
`;
