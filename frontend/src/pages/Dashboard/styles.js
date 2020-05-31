import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
    min-height: 100vh;
    /* background: ${darken(0.2, "#3bb82e")};*/
    background: linear-gradient(#3bb82e, #206618);
    padding: 20px;
`;

export const TextBox = styled.div`
    display: flex;
    margin: 50px 10px;
    text-align: center;
    flex-direction: column;
    color: white;

    p {
        margin-top: 20px;
        font-weight: 300;
    }
`;

export const ButtonBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.button`
    color: #fff;
    font: 20px/1em HelveticaNeue;
    padding: 15px 0;
    background: ${(props) => (props.main ? "#3bb82e" : "white")};
    color: ${(props) => (props.main ? "white" : "#3bb82e")};
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    -ms-border-radius: 30px;
    border-radius: 30px;
    width: 230px;
    margin: 0 20px;
    margin-top: 0px;
    margin-top: 40px;
    height: 54px;
    -webkit-transition: all ease-out 0.3s;
    -moz-transition: all ease-out 0.3s;
    -ms-transition: all ease-out 0.3s;
    -o-transition: all ease-out 0.3s;
    transition: all ease-out 0.3s;
    &:hover {
        transform: scale(1.1);
    }
`;
