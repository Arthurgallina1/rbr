import styled from "styled-components";

export const Card = styled.div`
    cursor: pointer;
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
