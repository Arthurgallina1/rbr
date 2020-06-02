import styled from "styled-components";
import { Form as Unform } from "@unform/web";
export const PagamentoContainer = styled.div`
  margin: 20px 10%;
`;

export const Form = styled(Unform)`
  padding: 0 10%;
  margin-top: 50px;

  label {
    font-size: 15px;
    line-height: 20px;
    color: #151522;
    font-weight: 600;
    margin-bottom: 5px;
  }
  .react-select-container {
    width: 100%;
  }
  .react-select__control {
    height: 54px;
    margin-bottom: 20px;
    width: 90%;
  }
  .expiration-box {
    display: flex;
    justify-content: space-around;
  }

  .ccv-box {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    label {
      font-size: 13px;
      color: #3bb82e;
      line-height: 13px;
      margin-left: 10px;
    }
  }
`;

export const CreateButton = styled.button`
  background: #3bb82e;
  border-radius: 5px;
  color: white;
  width: 100%;
  padding: 15px 25px;
  margin-bottom: 10px;
  box-shadow: 0px 4px 8px rgba(50, 50, 71, 0.06),
    0px 4px 4px rgba(50, 50, 71, 0.08);
`;
