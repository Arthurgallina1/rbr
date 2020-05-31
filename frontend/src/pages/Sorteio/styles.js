import styled from "styled-components";

export const ImgSlider = styled.div`
    margin-top: 10px;
    width: 100%;
    img {
        width: 100%;
        max-width: 400px;
        max-height: 360px;
    }
    h3 {
        font-weight: 600;
        font-size: 34px;
        line-height: 41px;
    }
`;

export const SorteioContainer = styled.div`
    h2 {
        margin: 15px 0;
    }
`;

export const InfoContainer = styled.div`
    padding: 0 10%;

    .hosted-box {
        display: flex;
        justify-content: center;

        span {
            color: #595959;
        }
    }

    img {
        border-radius: 50%;
        margin: 0 20px;
    }
    .center {
        text-align: center;
    }
    .green {
        color: #3bb82e;
    }
    h4 {
        font-weight: 400;
    }
`;

export const InfoBox = styled.div`
    display: flex;
    justify-content: space-between;

    .info-box {
        display: flex;
        flex-direction: column;
        margin: 25px 0;
    }
`;

export const SumarioBox = styled.div`
    h3 {
        margin-bottom: 5px;
    }

    .sumario-box {
        margin-top: 10px;
    }

    p {
        color: #5d5a5a;
    }
`;

export const EntradaButton = styled.button`
    margin: 25px 0;
    width: 100%;
    background-color: #3bb82e;
    padding: 20px;
    border-radius: 5px;
    color: white;
`;
