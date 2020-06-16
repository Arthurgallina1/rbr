import styled from "styled-components";

export const FileContainer = styled.div`
    margin: 30px 0;
    /* height: 120px; */
    label {
        cursor: pointer;
        &:hover {
            opacity: 0.7;
        }
        img {
            height: 120px;
            width: 120px;
            border-radius: 50%;
            border: 3px solid rgba(255, 255, 255, 0.3);
            background: #eee;
        }
        input {
            /* display: none; */
        }
    }
`;
export const Input = styled.input``;

export const StyledInput = styled.input`
    background: grey;
    display: none;
`;
