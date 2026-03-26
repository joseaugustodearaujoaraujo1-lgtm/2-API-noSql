"use client"
import "./style.css"
import { useState, useEffect, useRef } from 'react'
import api from "../api/connect.js"

export default function Login() {

    const [fundo, setFundo] = useState("Claro")
    const [ImgFundo, setImgFundo] = useState("/bedtime_24dp_8C1AF6_FILL0_wght400_GRAD0_opsz24.svg")
    const email = useRef()
    const senha = useRef()

    function TrocarFundo() {
        if (fundo === "Escuro") {
            setFundo("Claro")
            setImgFundo("/wb_sunny_24dp_DA954B_FILL0_wght400_GRAD0_opsz24.svg")
        } else if (fundo === "Claro") {
            setFundo("Escuro")
            setImgFundo("/bedtime_24dp_8C1AF6_FILL0_wght400_GRAD0_opsz24.svg")
        }
    }
    //teste12345

    function EnviarDados(e) {
        e.preventDefault()
        console.log(email.current.value)
        console.log(senha.current.value)

    }



    useEffect(() => {
        if (fundo === "Escuro") {
            document.body.className = "Escuro"
        } else {
            document.body.className = "Claro"
        }
    }, [fundo])

    return (
        <div className={fundo}>
            <nav className="Menu">
                <div className="Btn-mudar-fundo" onClick={TrocarFundo} >
                    <img className="Img-mudar-fundo" src={ImgFundo} alt="" />
                </div>
            </nav>
            <header className="MsgLogin">
                <h1 className="BemVindo">Bem-Vindo</h1>
                <p className="EntreNaSuaConta">Entre n para continuar</p>
            </header>

            <section>
                <form className="Formulario" onSubmit={EnviarDados}>
                    <label className="Label" htmlFor="email">E-mail</label>
                    <br />
                    <input ref={email} className="Input" type="email" id="email" placeholder='E-mail...' required />
                    <br /><br />
                    <label className="Label" htmlFor="senha">Senha</label>
                    <br />
                    <input ref={senha} className="Input" type="password" id="senha" placeholder='Senha...' required />
                    <br />
                    <a className="EsqueceuSenha" href="#">Esqueceu a senha?</a>
                    <br />
                    <button className="Button" type="submit">Entrar</button>
                    <div className="ContainerCadastro">
                        <p className="NaoTemConta">Não tem conta?</p>
                        <a className="CriarConta" href="#">Criar conta</a>
                    </div>
                </form>
            </section>
        </div>
    )
}

