import styled from "styled-components";
import { darken } from "polished";

export const RifaBox = styled.button`
    border: 0;
    padding: 10px;
    color: white;
    background-color: ${(props) =>
        props.disponivel
            ? props.selected
                ? darken(0.1, "#3bb82e")
                : "#3bb82e"
            : "red"};
    border-radius: 5px;
    margin: 3px;
    width: 38px;
    height: 38px;

    &:hover {
        background: ${(props) =>
            props.disponivel ? darken(0.1, "#3bb82e") : ""};
    }

    svg {
        position: relative;
        top: 0;
        right: 0;
    }
`;
