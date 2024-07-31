const express = require('express')
const banco = require("./banco")
const projetos = require("./projetos")
const funcionarios = require("./funcionarios")

const app = express()
app.use(express.json())

const PORTA = 3000
app.listen(PORTA, function () {
    console.log("Servidor iniciado na porta " + PORTA)
})

//conectando com o banco de dados
banco.conexao.sync(function () {
    console.log("Banco de dados conectado");
})

//Questão 1 - pegar todos os funcionários
app.get("/funcionarios/", async function (req, res) {
    const resultado = await funcionarios.funcionarios.findAll()
    res.send(resultado);
})

//pegar todos os projetos
app.get("/projetos/", async function (req, res) {
    const resultado = await projetos.projetos.findAll()
    res.send(resultado);
})

//Questão 2 - pegando funcionário pelo id
app.get("/funcionarios/:id", async function (req, res) {/*Define uma função assíncrona que será executada quando uma requisição for feita para esse get */
    const funcionarioSelecionado = await funcionarios.funcionarios.findByPk/*metodo para procura por cheve primaria*/(req.params.id,
        { include: { model: projetos.projetos } }/*diz para o sequelize mostrar em conjunto os projetos pertencentes aos funcionarios */
    )
    if (funcionarioSelecionado == null) {
        res.status(404).send({})
    } else {
        res.send(funcionarioSelecionado);
    }
})

//pegando o projeto pelo id
app.get("/projetos/:id", async function (req, res) {
    const projetoSelecionada = await projetos.projetos.findByPk(req.params.id,
        { include: { model: funcionarios.funcionarios } }
    )
    if (projetoSelecionada == null) {
        res.status(404).send({})
    } else {
        res.send(projetoSelecionada);
    }
})

//Questão 3 - pegando o subconjunto de nomes dos funcionários
app.get("/funcionarios/nome/:nome", async function (req, res) {
    const funcionarioSelecionado = await funcionarios.funcionarios.findAll(
        {
            include: { model: projetos.projetos },
            where: { nome: req.params.nome }
        }
    )
    if (funcionarioSelecionado == null) {
        res.status(404).send({})
    } else {
        res.send(funcionarioSelecionado);
    }
})

//pegando o subconjunto de nomes dos projetos
app.get("/projetos/nome/:nome", async function (req, res) {
    const projetoSelecionada = await projetos.projetos.findByPk(req.params.nome,
        { include: { model: funcionarios.funcionarios } }
    )
    if (projetoSelecionada == null) {
        res.status(404).send({})
    } else {
        res.send(projetoSelecionada);
    }
})

//Questão 4 - adicionando nome ao funcionario
app.post("/funcionarios/", async function (req, res) { /*Adicionar novos funcinarios a tabela */
    const resultado = await funcionarios.funcionarios.create({ /*usa metodo create do sequelize para criar um novo registro na tabela */
        nome: req.body.nome, /*é retirado do corpo (funcionarios.js) usando a requisição req.body */
        idade: req.body.idade,
        cpf:req.body.cpf,
        email:req.body.email
    })
    res.send(resultado/*contem os dados do funcionario */) /*envia o objeto funconario como resposta */
})

//adicionando nome do projeto
app.post("/projetos/", async function (req, res) {
    const resultado = await projetos.projetos.create({
        nome: req.body.nome,
        data:req.body.data,
        descricao:req.body.descricao,
        custo_projeto:req.body.custo_projeto,
        funcionarioId: req.body.funcionarioId

    })
    res.send(resultado)
})

//Questão 5 - Editando um funcionário expecífico
app.put("/funcionarios/:id", async function (req, res) {
    const resultado = await funcionarios.funcionarios.update({
        nome: req.body.nome,
        idade: req.body.idade,
        cpf:req.body.cpf,
        email:req.body.email
    }, {
        where: { id: req.params.id }
    })
    if (resultado == 0) {
        res.status(404).send({})
    } else {
        res.send(await funcionarios.funcionarios.findByPk(req.params.id))
    }
})

//Editando um projeto específico
app.put("/projetos/:id", async function (req, res) {
    const resultado = await projetos.projetos.update({
        nome: req.body.nome,
        data:req.body.data,
        descricao:req.body.descricao,
        custo_projeto:req.body.custo_projeto,
        funcionarioId: req.body.funcionarioId
    }, {
        where: { id: req.params.id }
    })
    if (resultado == 0) {
        res.status(404).send({})
    } else {
        res.send(await projetos.projetos.findByPk(req.params.id))
    }
})

//Questão 6 - Excluindo um funcionário
app.delete("/funcionarios/:id", async function (req, res) {
    const resultado = await funcionarios.funcionarios.destroy({
        where: {
            id: req.params.id,
        }
    })
    if (resultado == 0) {
        res.status(404).send({})
    } else {
        res.status(204).send({})
    }
})

//Excluindo um projeto
app.delete("/projetos/:id", async function (req, res) {
    const resultado = await projetos.projetos.destroy({
        where: {
            id: req.params.id
        }
    })
    if (resultado == 0) {
        res.status(404).send({})
    } else {
        res.status(204).send({})
    }
})
