import styled from "styled-components";
import { darken, lighten } from "polished";

export const PerfilContainer = styled.div`
    padding: 0 10%;
    .react-tabs__tab-list {
        border: 0;
        text-align: center;
        margin-top: 20px;
    }
    .react-tabs__tab {
        border: 0;
        border-bottom: 3px solid #3bb82e;
        opacity: 0.6;
        padding: 10px 22px;
        color: #3bb82e;
        width: 160px;
    }
    .react-tabs__tab--selected {
        border: 0;
        opacity: 1;
        border-bottom: 3px solid #3bb82e;
    }
    .react-tabs__tab--selected::after {
        border: 0;
    }
`;

export const HeaderBox = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h5 {
        color: #444;
    }
`;

export const EditarButton = styled.button`
    width: 80%;
    margin-top: 20px;
    padding: 8px;
    border-radius: 4px;
    background: #3bb82e;
    color: white;
`;
