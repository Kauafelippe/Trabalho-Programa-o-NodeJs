const sequelize = require('sequelize')
const banco = require("./banco")

var funcionario = banco.conexao.define(
    "funcionario",
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
        idade: {
            type: sequelize.INTEGER.UNSIGNED,
            allowNull: false
        }
    },
{timestamps:false}
)
module.exports={funcionario}//deixar puplico