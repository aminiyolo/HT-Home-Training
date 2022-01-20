import styled from "styled-components";
import { DialogTitle as DT } from "@material-ui/core";
import { styled as mStyled } from "@material-ui/core";

export const FormWrapper = styled.div`
  width: 25vw;
  height: auto;
  & > .title {
    border-bottom: 1px solid lightgrey;
    padding: 1.2rem;
    font-size: 1rem;
    user-select: none;
  }
`;

export const Form = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;

  & > div {
    margin: auto;
    margin-bottom: 1.5rem;
  }
`;

export const DialogTitle = mStyled(DT)({
  width: "32vw",
  height: "50vh",
});

export const AddBox = styled.div`
  padding: ${(props) => (props.routine ? 0.8 : 3)}rem;
  border: 2px dashed gray;
  margin: auto;
  margin-top: 2rem;
  width: ${(props) => (props.routine ? 22 : 17)}vw;
  text-align: center;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: #74beff;
    border-color: #74beff;
    transition: all 200ms ease-in;
    & > .btn {
      border: 3px solid #74beff;
      color: #74beff;
      transition: all 200ms ease-in;
    }
  }

  & > .btn {
    border: 3px solid gray;
    outline: none;
    border-radius: 50%;
    padding: 0.1rem 0.6rem;
    font-size: 1.7rem;
    background-color: transparent;
  }

  & > .title {
    padding: 0.5rem;
    font-size: 1.5rem;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 0.4rem;
  right: 0.2em;
  outline: none;
  background-color: transparent;
  border: none;
  display: none;
`;

export const Card = styled.div`
  width: 11.5vw;
  height: 10.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  border: 1px solid gray;
  margin: 0.85rem;
  border-radius: 5px;
  position: relative;

  & > .btn {
    position: absolute;
    top: 0.4rem;
    right: 0.2em;
    outline: none;
    background-color: transparent;
    border: none;
    display: none;
    cursor: pointer;
  }

  &:hover {
    & > .btn {
      display: block;
    }
  }

  & > .kind {
    padding: 0.3rem;
  }
`;
