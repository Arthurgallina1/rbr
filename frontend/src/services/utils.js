import { format, parseISO } from "date-fns";

export const dataFormatador = (data) => {
    const parsedDate = parseISO(data);
    return format(parsedDate, "dd/MM/yyyy");
};

export const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
});

export const groupObjectByProp = (objectArray, property, valueToBePushed) =>
    objectArray.reduce((acc, object) => {
        let key = object[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(object[valueToBePushed]);
        return acc;
    }, {});

export const groupArrayBySorteioId = (sorteioArray) => {
    const groupedArray = [];

    const array = sorteioArray.map((sorteio) => {});
};
