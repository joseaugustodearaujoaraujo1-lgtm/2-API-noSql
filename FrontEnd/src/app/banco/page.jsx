"use client"
import { useEffect } from "react"
import api from "../api/connect"

export default function BancoDeDados(){

    let usersDoSistema = []

    async function BuscarUsuarios(){
        usersDoSistema = api.get("./v1/users")
    }

    useEffect(() => {
        BuscarUsuarios()
    }, [])

    return(
        <div>
            <h1>Banco de dados noSql (mongoDB)</h1>
            <p>O banco contém todos os usuarios cadastros, verifique seu nome na tabela abaixo</p>
            <br />
            {usersDoSistema.map( user => (
                <div className="table-banco">
                <table>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>DESCRIÇÃO</th>
                    </tr>
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.nome}</td>
                        <td>{user.descricao}</td>
                    </tr>
                </table>
            </div>
            ))}
        </div>
    )
}