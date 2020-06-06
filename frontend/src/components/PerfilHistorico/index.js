import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { PerfilSorteiosContainer } from "./styles";
import { dataFormatador } from "../../services/utils";
export default function PerfilSorteioAtivos() {
    const [sorteios, setSorteios] = useState([]);
    const [sorteiosGrouped, setSorteiosGrouped] = useState([]);
    const user_id = useSelector((state) => state.auth.user.id);

    useEffect(() => {
        async function getSorteios() {
            const response = await api.post("/perfil/sorteios", { user_id });
            if (response.data.success) {
                setSorteios(response.data.responseArray);
            } else {
                console.log("err");
            }
        }
        getSorteios();
    }, []);

    return (
        <PerfilSorteiosContainer>
            {/* <h3>Meus sorteios ativos</h3> */}
            {sorteios &&
                sorteios.map((sorteio) => (
                    <div className='box' key={sorteio.sorteioInfo[0].id}>
                        <Link to={`/sorteio/${sorteio.sorteioInfo[0].id}`}>
                            <h3>Sorteio #{sorteio.sorteioInfo[0].id} </h3>
                        </Link>
                        <span>{sorteio.sorteioInfo[0].titulo}</span>
                        <br />
                        <span>
                            Sorteio:{" "}
                            <strong>
                                {dataFormatador(
                                    sorteio.sorteioInfo[0].data_sorteio
                                )}
                            </strong>
                        </span>
                        <br />
                        <span>
                            <strong>Números: </strong>
                            {sorteio.rifasInfo.map((rifa) => (
                                <span key={rifa.numero}>{rifa.numero} </span>
                            ))}
                        </span>
                    </div>
                ))}
        </PerfilSorteiosContainer>
    );
}
