import React, { useState, useRef } from "react";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import Input from "../../components/Input";
import { Form, CreateButton, Header } from "./styles.js";
import Navbar from "../../components/Navbar";
import Datepicker from "../../components/DatepickerInput";
import FileInput from "../../components/FileInput";
import api from "../../services/api";
import { format } from "date-fns";

export default function Sediar() {
    const formRef = useRef(null);
    const [files, setFiles] = useState([]);
    const user = useSelector((state) => state.auth.user);

    function handleChange(e) {
        const filesArray = Array.from(e.target.files);
        setFiles(filesArray);
    }

    async function handleSubmit(data) {
        try {
            try {
                formRef.current.setErrors({});
                const schema = Yup.object().shape({
                    titulo: Yup.string().required(),
                    descricao: Yup.string().min(6).required(),
                });
                await schema.validate(data, {
                    abortEarly: false,
                });
                const dataFormatada = format(data.data_sorteio, "yyyy-MM-dd");
                const dataFile = new FormData();
                dataFile.append("user_id", user.id);
                dataFile.append("titulo", data.titulo);
                dataFile.append("descricao", data.descricao);
                dataFile.append("data_sorteio", dataFormatada);
                dataFile.append("quantidade_rifas", data.quantidade_rifas);
                dataFile.append("preco_por_rifa", data.preco_por_rifa);
                files.map((file) => dataFile.append("file", file));
                const response = await api.post("/sorteio", dataFile);
                if (response.data.success) {
                    //tratar retorno, com modal.
                    console.log("criado com sucesso");
                } else {
                    console.log("error criacao");
                }
            } catch (err) {
                console.debug("err", err);
            }
        } catch (err) {
            const validationErrors = {};

            if (err instanceof Yup.ValidationError) {
                err.inner.forEach((error) => {
                    validationErrors[error.path] = error.message;
                });

                formRef.current.setErrors(validationErrors);
            }
        }
    }
    return (
        <div>
            <Navbar centerText={"Voltar"} />

            <Header>
                <h4>Criar sorteio</h4>
            </Header>
            <Form onSubmit={handleSubmit} ref={formRef}>
                <Input
                    name='titulo'
                    type='text'
                    label='Titulo'
                    placeholder='Titulo do sorteio'
                />
                <Input
                    name='descricao'
                    type='text'
                    label='Descrição'
                    placeholder='Descrição do sorteio'
                />
                <Datepicker
                    label='Data do sorteio'
                    name='data_sorteio'
                    placeholder='Data do sorteio'
                    minDate={new Date()}
                />

                <Input
                    name='quantidade_rifas'
                    type='text'
                    label='Quantidade total de rifas'
                    placeholder='Total de rifas disponivéis'
                />
                <Input
                    name='preco_por_rifa'
                    type='text'
                    label='Preço por rifa'
                    placeholder='Preço unitário'
                />

                <FileInput
                    name='files'
                    type='file'
                    multiple='multiple'
                    onChange={handleChange}
                />
                <CreateButton type='submit'>Criar sorteio</CreateButton>
            </Form>
        </div>
    );
}
