import styled from "styled-components";
import { Form as Unform } from "@unform/web";

export const EdicaoContainer = styled.div`
    margin: 20px 10%;
`;

export const EdicaoBody = styled.div``;

export const Form = styled(Unform)`
    padding: 0 10%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    .center {
        text-align: center;
    }
    label {
        font-size: 15px;
        line-height: 20px;
        color: #151522;
        font-weight: 600;
        margin-bottom: 5px;
    }
`;
