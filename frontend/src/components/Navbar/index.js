import React from "react";
import { NavBarContainer } from "./styles";
import { FaChevronLeft } from "react-icons/fa";
import history from "../../services/history";
export default function Navbar({ centerText }) {
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
                <strong>{centerText}</strong>
            </span>
            <span className='gray'></span>
        </NavBarContainer>
    );
}
