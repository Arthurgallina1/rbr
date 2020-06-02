import styled from "styled-components";

export const NavBox = styled.div`
  margin-top: 20px;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-around;
  color: #3bb82e;
  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  svg {
    margin-bottom: 8px;

    /* opacity: ${(props) => (props.active ? "1" : "0.6")}; */
  }
  label,
  span {
    font-weight: 500;
    font-size: 11px;
    color: #3bb82e;
    line-height: 13px;
  }
`;
