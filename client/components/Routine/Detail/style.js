import styled from "styled-components";
import { DialogTitle as DT } from "@material-ui/core";
import { styled as mStyled } from "@material-ui/core";

export const DialogTitle = mStyled(DT)({
  width: "32vw",
  height: "50vh",
});

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
  user-select: none;

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
