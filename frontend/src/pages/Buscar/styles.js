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

    .wrapper {
        position: relative;
        margin-top: 5px;
    }
    .wrapper input {
        text-indent: 40px;
        width: 100%;
    }
    .wrapper .fa-search {
        position: absolute;
        top: 6px;
        left: 8px;
        font-size: 15px;
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
    margin-top: 10px;
    flex-direction: column;
    justify-content: center;
`;
