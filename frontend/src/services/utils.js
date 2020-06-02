import { format, parseISO } from "date-fns";

export const dataFormatador = (data) => {
  const parsedDate = parseISO(data);
  return format(parsedDate, "dd/MM/yyyy");
};

export const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});
