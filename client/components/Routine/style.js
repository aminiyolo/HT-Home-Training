import styled from "styled-components";
import { DialogTitle as DT } from "@material-ui/core";
import { styled as mStyled } from "@material-ui/core";

export const FormWrapper = styled.div`
  width: 25vw;

  & > .title {
    border-bottom: 1px solid lightgrey;
    padding: 1.2rem;
    font-size: 1rem;
  }
`;

export const Form = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-around;
`;

export const DialogTitle = mStyled(DT)({
  width: "32vw",
  height: "50vh",
});

export const AddBox = styled.div`
  padding: 3rem;
  border: 2px dashed gray;
  margin-top: 2rem;
  width: 100%;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: #74beff;
    border-color: #74beff;
    transition: all 300ms ease-in;
    & > .btn {
      border: 3px solid #74beff;
      color: #74beff;
      transition: all 200ms ease-out;
    }
  }

  & > .btn {
    border: 3px solid gray;
    outline: none;
    border-radius: 50%;
    padding: 0.1rem 0.5rem;
    font-size: 1.5rem;
    background-color: transparent;
  }

  & > .title {
    padding: 0.5rem;
  }
`;

export const ModalTitle = styled.div`
  border-bottom: 1px solid gray;
  padding: 0.8rem;
`;

export const ModalForm = styled.div`
  margin: 1.5rem;
  display: flex;
  flex-direction: column;
`;

export const Empty = styled.div`
  height: 2rem;
`;

export const Info = styled.span`
  font-size: 0.8rem;
`;

export const Count = styled.div`
  margin-top: 0.5rem;
`;

export const BtnWrapper = styled.div`
  text-align: right;

  & > button {
    margin: 0.5rem;
    padding: 0.5rem 0.8rem;
    font-size: 1rem;
    cursor: pointer;
    outline: none;
    border: 0.1px solid;
    border-radius: 0.3rem;
    background: transparent;
    transition: all 200ms ease-out;

    &:hover {
      border-color: #3fb9ff;
      color: #3fb9ff;
    }
  }

  & > .ok {
    background: #3fa9ff;
    color: white;
    border: 1px solid #3fa9ff;
    transition: all 200ms ease-out;

    &:hover {
      border-color: #3fb9ff;
      background: #3fb9ff;
      color: white;
    }
  }
`;
