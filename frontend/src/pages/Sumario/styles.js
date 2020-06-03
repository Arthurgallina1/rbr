import styled from "styled-components";

export const SumarioContainer = styled.div`
  margin: 0 10%;
`;

export const CarrinhoBox = styled.div`
  h3 {
    text-align: center;
  }
  margin-top: 20px;
  padding: 0 20px 20px 20px;
  background: #f3f3f3;
`;

export const SorteioBox = styled.div`
  /* border-top: 1px solid rgba(59, 184, 46, 0.7); */
  /* border-bottom: 1px solid rgba(59, 184, 46, 0.7); */
  padding: 9px 4px;
  /* margin-bottom: 16px; */
  h3 {
    color: rgba(59, 184, 46, 1);
    margin-bottom: 3px;
  }

  strong {
    color: black;
  }

  h5 {
    color: #222;
  }
  span {
    color: #4e4e4e;
    margin-bottom: 2px;
  }
`;

export const TotalBox = styled.div`
  padding: 14px 18px;
  background: #f3f3f3;
  color: #111;
  border-radius: 4px;

  span {
    font-size: 17px !important;
    line-height: 1.255 !important;
  }
`;

export const PagarButton = styled.button`
  width: 100%;
  margin-top: 7px;
  background: linear-gradient(to bottom, #004ae0, #023db5);
  color: white;
  font-weight: 400;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset;
  border-radius: 4px;
  padding: 8px;
`;
