import express from "express"
import { PrismaClient } from "@prisma/client"

const PORTA = 3001
const prisma = new PrismaClient()
const app = express()
const data = new Date()

app.use(express.json())

app.post("/v1/cadastros", async (req, res) => {
    try {
        const criar = await prisma.user.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                senha: req.body.senha
            }
        })
        res.status(201).json({ "susseco": "Registro criado com susseco!" }, criar)
    } catch (error) {
        res.status(501).json(error)
    }
})

app.get("/v1/users", async (req, res) => {
    try {
        let buscarDados

        if (req.query.email) {
            buscarDados = await prisma.user.findMany({
                where: {
                    email: req.query.email
                }
            })
        } else if (!req.query.email) {
            buscarDados = await prisma.user.findMany({})
        }
        res.status(200).json({ "Susseco": buscarDados })
    } catch (error) {
        res.status(500).json({ "Ops...Ocorreu um erro": error })
    }
})

app.patch("/v1/users/:email", async (req, res) => {
    try {
        const atualizar = await prisma.user.update({
            where: {
                email: req.params.email
            },
            data: {
                email: req.body.email || undefined,
                name: req.body.name || undefined,
                senha: req.body.senha || undefined
            }
        })
        res.status(200).json({ "Atualizado com susseco": atualizar })
    } catch (error) {
        res.status(500).json({ "Ops...Ocorreu um erro": error })
    }
})

app.delete("/v1/users/:email", async (req, res) => {
    try {
        const deletar = await prisma.user.delete({
            where: {
                email: req.params.email
            }
        })
        res.status(200).json({ "Susseco!": deletar })
    } catch (error) {
        res.status(500).json({ "Ops...Ocorreu um erro": error })
    }

})

app.listen(PORTA, () => {
    console.log(`http://localhost:${PORTA} | ${data} `)
})