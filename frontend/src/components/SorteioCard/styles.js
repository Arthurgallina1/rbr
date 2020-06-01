import styled from "styled-components";

export const Card = styled.div`
    cursor: pointer;
    min-width: 300px;
    color: white;
    background: #3bb82e;
    font-size: 14px;
    display: flex;
    height: 100px;
    margin-bottom: 20px;
    border-radius: 5px;
    img {
        border-radius: 5px;
    }

    .text-box {
        flex: 1;
        font-size: 12px;
        padding: 4px 10px;

        h4 {
            margin: 0;
        }
    }

    .info-box {
        display: flex;
        margin-top: 10px;
        margin-bottom: 5px;
        justify-content: space-between;
    }
    .info-unit {
        display: flex;
        flex-direction: column;

        .price {
            font-weight: 600;
        }
    }
`;
