import styled from "styled-components";
import { darken } from "polished";

export const CarrinhoBox = styled.div`
  padding: 15px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin: 10px 0;
  background: #3bb82e;

  .box {
    margin: 10px 0;
  }

  .avancar-box {
  }
`;

export const SelectedButton = styled.button`
  padding: 10px;
  background: ${darken(0.25, "#3bb82e")};
  border-radius: 5px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
