const sequelize = require('sequelize')
const banco = require("./banco")

var projeto = banco.conexao.define(
    "projeto",
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
            type: sequelize.DATE,
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
module.exports = { projeto }//deixar puplico