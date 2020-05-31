import React, { useRef, useState, useEffect } from "react";
import ReactDatePicker, {
    registerLocale,
    setDefaultLocale,
} from "react-datepicker";
import { DateContainer } from "./styles";
import pt from "date-fns/locale/pt-BR";
import { useField } from "@unform/core";

import "react-datepicker/dist/react-datepicker.css";

const DatePicker = ({ name, label, ...rest }) => {
    registerLocale("pt", pt);
    const datepickerRef = useRef(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);

    const [date, setDate] = useState(defaultValue || null);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: datepickerRef.current,
            path: "props.selected",
            clearValue: (ref) => {
                ref.clear();
            },
        });
    }, [fieldName, registerField]);

    return (
        <DateContainer>
            <label htmlFor={fieldName}>{label}</label>

            <ReactDatePicker
                ref={datepickerRef}
                selected={date}
                onChange={setDate}
                locale='pt'
                dateFormat='dd/MM/yyyy'
                placeholderText='Data do sorteio'
                timeCaption='Horário'
                {...rest}
            />
            {error && <span className='error'>{error}</span>}
        </DateContainer>
    );
};

export default DatePicker;
