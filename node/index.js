const express = require('express')
const banco = require("./banco")
const projetos = require("./projeto")
const funcionario = require("./professor")

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

//pegar todos os funcionários
app.get("/funcionario/",async function(req, res) {
    const resultado = await funcionario.funcionario.findAll()
    res.send(resultado);
})

//pegar todos os projetos
app.get("/projetos/",async function(req, res) {
    const resultado = await projetos.projetos.findAll()
    res.send(resultado);
})

//pegando funcionário pelo id
app.get("/funcionario/:id",async function(req, res) {
    const funcionarioSelecionado = await funcionario.funcionario.findByPk(req.params.id, 
        { include: { model: projetos.projetos } } 
    )
    if( funcionarioSelecionado == null ){
        res.status(404).send({})
    }else{
        res.send(funcionarioSelecionado);
    } 
})

//pegando o projeto pelo id
app.get("/projetos/:id",async function(req, res) {
    const projetoSelecionada = await projetos.projetos.findByPk(req.params.id,
        { include: {model: funcionario.funcionario } }
    )
    if( projetoSelecionada == null ){
        res.status(404).send({})
    }else{
        res.send(projetoSelecionada);
    } 
})

app.post("/funcionario/",async function(req,res){
    const resultado = await funcionario.funcionario.create({
        nome:req.body.nome
    })
    res.send(resultado)
})

app.post("/projetos/",async function(req,res){
    const resultado = await projetos.projeto.create({
        nome:req.body.nome,
        funcionarioId:req.body.funcionarioId
    })
    res.send(resultado)
})

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

app.put("/projetos/",async function(req,res){
    const resultado = await projetos.projeto.update({
        nome:req.body.nome,
        professorId:req.body.professorId
    })
    if( resultado == 0){
        res.status(404).send({})
    }else{
        res.send( await materia.materia.findByPk(req.params.id))
    }
})

app.delete("/professor/:id",async function(req,res){
    const resultado = await professor.professor.destroy({
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

app.delete("/materia/:id",async function(req,res){
    const resultado = await materia.materia.destroy({
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
