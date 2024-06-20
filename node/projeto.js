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
        }
    },
{timestamps:false}
)
module.exports={projeto}//deixar puplico