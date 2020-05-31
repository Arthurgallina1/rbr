import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    background: #fff;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    input {
        height: 50px;
        border: 1px solid #e4e4e4;
        border-radius: 5px;
        padding: 5px 15px;
        width: 325px;
        margin-bottom: 20px;
    }

    a {
        cursor: pointer;
    }

    .footer-span {
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 20px;
        color: #999999;

        .link {
            color: #6979f8;
        }
    }
`;

export const LoginButton = styled.button`
    background: #6979f8;
    border-radius: 5px;
    color: white;
    width: 325px;
    padding: 15px 25px;
    margin-bottom: 10px;
    box-shadow: 0px 4px 8px rgba(50, 50, 71, 0.06),
        0px 4px 4px rgba(50, 50, 71, 0.08);
`;

export const HeaderDiv = styled.div`
    margin: 30px 0 60px;
    display: flex;
    padding: 10px 35px;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    h2 {
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 34px;
        color: #151522;
        margin-bottom: 15px;
    }
    span {
        color: #999999;
        font-weight: 300;
        font-size: 17px;
        line-height: 22px;
    }
`;
