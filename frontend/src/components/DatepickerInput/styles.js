import styled from "styled-components";

export const DateContainer = styled.div`
    .react-datepicker-wrapper {
        padding: 16px 12px;
        width: 90%;
        background: white;
        border-radius: 5px;
        border: 1px solid rgba(228, 228, 228, 0.6);
        margin-bottom: 10px;
    }
    .react-datepicker__day--selected {
        background-color: #3bb82e;
    }
    .react-datepicker__day--keyboard-selected {
        background-color: #3bb82e;
    }
    input {
        border: 0;
    }
    span.error {
        color: red;
        font-size: 13px;
    }
`;
