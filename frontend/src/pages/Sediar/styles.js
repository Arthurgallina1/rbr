import styled from "styled-components";
import { Form as Unform } from "@unform/web";

export const Form = styled(Unform)`
    padding: 0 10%;
    margin-top: 20px;

    label {
        font-size: 15px;
        line-height: 20px;
        color: #151522;
        font-weight: 600;
        margin-bottom: 5px;
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

export const Header = styled.div`
    margin: 0 10%;

    font-size: 22px;
    line-height: 28px;
    color: #3bb82e;
    border-left: 5px solid #3bb82e;

    h4 {
        margin-left: 25px;
    }
`;
