import styled from "styled-components";

export const BuscarContainer = styled.div`
    .input-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* align-items: center; */
        padding: 0 10%;
        margin-top: 30px;
        label {
            color: #3bb82e;
        }
        input {
            width: 90%;
            padding: 10px 8px;
            border: 1px solid #e4e4e4;
            border-radius: 5px;
        }
    }
`;

export const TopContainer = styled.div`
    margin-top: 20px;
    padding: 0 10%;

    big {
        color: #3bb82e;
        border-left: 5px solid #3bb82e;
        padding-left: 25px;
    }
`;

export const ResultadosBox = styled.div`
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    justify-content: center;
`;

export const Card = styled.div`
    min-width: 300px;
    font-size: 14px;
    display: flex;
    height: 80px;
    margin-bottom: 20px;
    img {
        border-radius: 5px;
    }

    .text-box {
        flex: 1;
        font-size: 12px;
        padding: 1px 5px;

        h4 {
            margin: 0;
        }
    }

    .info-box {
        display: flex;
        margin-top: 10px;
        justify-content: space-between;
    }
    .info-unit {
        display: flex;
        flex-direction: column;
    }
`;
