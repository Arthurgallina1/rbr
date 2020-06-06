import React from "react";
import { PagarButton } from "./styles";
export default function Button({ handleAction, btnText }) {
    return <PagarButton onClick={handleAction}>{btnText}</PagarButton>;
}
