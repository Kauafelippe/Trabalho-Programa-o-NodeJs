const sequelize = require('sequelize')//Importar o módulo principal do Sequelize, que é uma ferramenta que permite interagir com o banco de dados de maneira mais abstrata, utilizando objetos JavaScript.
const banco = require("./banco")//Importa um módulo local chamado "banco", que contém a configuração de conexão com o banco de dados 
const projetos = require('./projetos')

var funcionarios = banco.conexao.define(
    "funcionarios",//nome da entidade
    {
        id: {
            type: sequelize.INTEGER.UNSIGNED,//UNSIGNED - sem sinal, inicia no 0
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: sequelize.STRING,
            allowNull: false//indica que esses campos são obrigatórios e não podem ser nulos.
        },

        idade: {
            type: sequelize.INTEGER,
            allowNull: false
        },
        cpf: {
            type: sequelize.STRING,
            allowNull: false
        },
        email: {
            type: sequelize.STRING,
            allowNull: false
        }
    },
    { timestamps: false }//para só criar as tabelas e não outras coisas no sequelize que é criado automaticamente
)
funcionarios.hasMany(projetos.projetos)//Define uma relação de "um para muitos" entre os modelos "funcionarios" e "projetos"
projetos.projetos.belongsTo( funcionarios )//Indica que um projeto pertence a um funcionário.

module.exports = { funcionarios }//deixa púplico, para que possa ser utilizado em outros módulos do projeto.