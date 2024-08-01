const sequelize = require('sequelize')
const banco = require("./banco")

var projetos = banco.conexao.define(
    "projetos",
    {
        id: {
            type: sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: sequelize.STRING,
            allowNull: false
        },
        data: {
            type: sequelize.DATEONLY,//Isso significa que o campo armazenará apenas a data (ano, mês, dia), sem informações de hora.
            allowNull: false
        },
        descricao: {
            type: sequelize.TEXT,
            allowNull: false
        },
        custo_projeto: {
            type: sequelize.DOUBLE,
            allowNull: false
        }
    },
    { timestamps: false }
)
module.exports = { projetos }//deixar puplico