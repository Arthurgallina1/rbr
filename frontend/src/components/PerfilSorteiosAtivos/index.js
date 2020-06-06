import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../../services/api";
import { groupObjectByProp, groupArrayBySorteioId } from "../../services/utils";
import { PerfilSorteiosContainer } from "./styles";

export default function PerfilSorteioAtivos() {
    const [sorteios, setSorteios] = useState([]);
    const [sorteiosGrouped, setSorteiosGrouped] = useState([]);
    const user_id = useSelector((state) => state.auth.user.id);

    useEffect(() => {
        async function getSorteios() {
            const response = await api.post("/perfil/sorteios", { user_id });
            if (response.data.success) {
                setSorteios(response.data.response);
                const GroupedObject = groupObjectByProp(
                    response.data.response,
                    "sorteio_id",
                    "numero"
                );
                const grouped = [
                    groupObjectByProp(
                        response.data.response,
                        "sorteio_id",
                        "numero"
                    ),
                ];

                groupArrayBySorteioId(response.data.response);

                // console.log(response.data.response);
                setSorteiosGrouped(grouped[0]);
            } else {
                console.log("err");
            }
        }
        getSorteios();
    }, []);
    return (
        <PerfilSorteiosContainer>
            {/* <h3>Meus sorteios ativos</h3> */}
            {Object.keys(sorteiosGrouped).map((keyName, i) => (
                <div className='box' key={keyName}>
                    <h3>Sorteio {keyName} </h3>
                    <>
                        Números:{" "}
                        {sorteiosGrouped[keyName].map((num) => (
                            <span>{num}, </span>
                        ))}
                    </>
                </div>
            ))}
        </PerfilSorteiosContainer>
    );
}
