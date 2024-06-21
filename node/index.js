const express = require('express')
const banco = require("./banco")
const projeto = require("./projeto")
const funcionario = require("./funcionario")

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
app.get("/funcionario/",async function(req, res) {
    const resultado = await funcionario.funcionario.findAll()
    res.send(resultado);
})

//pegar todos os projetos
app.get("/projeto/",async function(req, res) {
    const resultado = await projeto.projeto.findAll()
    res.send(resultado);
})

//Questão 2 - pegando funcionário pelo id
app.get("/funcionario/:id",async function(req, res) {
    const funcionarioSelecionado = await funcionario.funcionario.findByPk(req.params.id, 
        { include: { model: projeto.projeto } } 
    )
    if( funcionarioSelecionado == null ){
        res.status(404).send({})
    }else{
        res.send(funcionarioSelecionado);
    } 
})

//pegando o projeto pelo id
app.get("/projeto/:id",async function(req, res) {
    const projetoSelecionada = await projeto.projeto.findByPk(req.params.id,
        { include: {model: funcionario.funcionario } }
    )
    if( projetoSelecionada == null ){
        res.status(404).send({})
    }else{
        res.send(projetoSelecionada);
    } 
})

//Questão 3 - pegando o subconjunto de nomes dos funcionários
app.get("/funcionario/nome/:nome",async function(req, res) {
    const funcionarioSelecionado = await funcionario.funcionario.findAll(

        { include: { model: projeto.projeto },
        where:{ nome:req.params.nome }  }
    )
    if( funcionarioSelecionado == null ){
        res.status(404).send({})
    }else{
        res.send(funcionarioSelecionado);
    } 
})

//pegando o subconjunto de nomes dos projetos
app.get("/projeto/nome/:nome",async function(req, res) {
    const projetoSelecionada = await projeto.projeto.findByPk(req.params.nome,
        { include: {model: funcionario.funcionario } }
    )
    if( projetoSelecionada == null ){
        res.status(404).send({})
    }else{
        res.send(projetoSelecionada);
    } 
})

//Questão 4 - adicionando nome ao funcionario
app.post("/funcionario/",async function(req,res){
    const resultado = await funcionario.funcionario.create({
        nome:req.body.nome
    })
    res.send(resultado)
})

//adicionando nome do projeto
app.post("/projeto/",async function(req,res){
    const resultado = await projeto.projeto.create({
        nome:req.body.nome,
        funcionarioId:req.body.funcionarioId
    })
    res.send(resultado)
})

//Questão 5 - Editando um funcionário expecífico
app.put("/funcionario/:id",async function(req,res){
    const resultado = await funcionario.funcionario.update({
        nome:req.body.nome
    },{
        where:{id: req.params.id}
    })
    if( resultado == 0){
        res.status(404).send({})
    }else{
        res.send( await funcionario.funcionario.findByPk(req.params.id))
    }
})

//Editando um projeto específico
app.put("/projeto/:id",async function(req,res){
    const resultado = await projeto.projeto.update({
        nome:req.body.nome,
        funcionarioId:req.body.funcionarioId
    })
    if( resultado == 0){
        res.status(404).send({})
    }else{
        res.send( await projeto.projeto.findByPk(req.params.id))
    }
})

//Questão 6 - Excluindo um funcionário
app.delete("/funcionario/:id",async function(req,res){
    const resultado = await funcionario.funcionario.destroy({
        where:{
            id:req.params.id
        }
    })
    if( resultado == 0 ){
        res.status(404).send({})
    }else{
        res.status(204).send({})
    }
})

//Excluindo um projeto
app.delete("/projeto/:id",async function(req,res){
    const resultado = await projeto.projeto.destroy({
        where:{
            id:req.params.id
        }
    })
    if( resultado == 0 ){
        res.status(404).send({})
    }else{
        res.status(204).send({})
    }
})
