import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import FileInput from "../../components/FileInput";
import { EdicaoContainer, EdicaoBody, Form } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function EditarPerfil() {
    const user = useSelector((state) => state.auth.user);

    function handleFormSubmit(data) {
        console.log(data);
    }
    return (
        <EdicaoContainer>
            <Navbar centerText='Edição' />
            <EdicaoBody>
                <Form initialData={user} onSubmit={handleFormSubmit}>
                    <div className='center'>
                        <FileInput
                            name='files'
                            type='file'
                            styled
                            // onChange={handleChange}
                        />
                    </div>
                    <Input
                        name='name'
                        type='text'
                        label='Nome'
                        placeholder='Titulo do sorteio'
                    />
                    <Input
                        name='email'
                        type='text'
                        label='E-mail'
                        placeholder='Descrição do sorteio'
                    />
                    <Input
                        name='CEP'
                        type='text'
                        label='CEP'
                        placeholder='CEP'
                    />

                    <Button handleAction={() => {}} btnText='Salvar edição'>
                        Salvar edição
                    </Button>
                </Form>
            </EdicaoBody>
        </EdicaoContainer>
    );
}
