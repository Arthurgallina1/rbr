import React, { useState } from "react";
// import { Form } from "@unform/web";
import { useSelector } from "react-redux";
import Input from "../../components/Input";
import { Form, CreateButton, Header } from "./styles.js";
import Navbar from "../../components/Navbar";
import Datepicker from "../../components/DatepickerInput";
import FileInput from "../../components/FileInput";
import api from "../../services/api";
import { format } from "date-fns";
export default function Sediar() {
    const [files, setFiles] = useState([]);
    const user = useSelector((state) => state.auth.user);

    function handleChange(e) {
        const filesArray = Array.from(e.target.files);
        setFiles(filesArray);
    }

    async function handleSubmit(data) {
        try {
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
            }
        } catch (err) {
            console.debug("err", err);
        }
    }
    return (
        <div>
            <Navbar centerText={"Voltar"} />

            <Header>
                <h4>Criar sorteio</h4>
            </Header>
            <Form onSubmit={handleSubmit}>
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
                {/* <Input
                    name='estado'
                    type='text'
                    label='Estado'
                    placeholder='Estado'
                />
                <Input
                    name='cidade'
                    type='text'
                    label='Cidade'
                    placeholder='Cidade'
                /> */}
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
