import React from "react";
// import { Form } from "@unform/web";
import Input from "../../components/Input";
import { Form, CreateButton, Header } from "./styles.js";
import Navbar from "../../components/Navbar";
import Datepicker from "../../components/DatepickerInput";
import FileInput from "../../components/FileInput";

export default function Sediar() {
    function handleSubmit(data) {
        console.log(data);
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
                <Input
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
                />
                <FileInput name='foto_sorteio' type='file' />
                <CreateButton type='submit'>Criar sorteio</CreateButton>
            </Form>
        </div>
    );
}
