import React from "react";
import { NavBarContainer } from "./styles";
import { FaChevronLeft } from "react-icons/fa";
import history from "../../services/history";
export default function Navbar() {
    return (
        <NavBarContainer>
            <span className='gray'>
                <FaChevronLeft
                    size={16}
                    color={"#666"}
                    onClick={() => history.goBack()}
                />
            </span>
            <span>
                <strong>Entrar</strong>
            </span>
            <span className='gray'></span>
        </NavBarContainer>
    );
}
