const sequelize = require('sequelize')
const banco = require("./banco")
const projetos = require('./projetos')

var funcionarios = banco.conexao.define(
    "funcionarios",
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
    { timestamps: false }
)
funcionarios.hasMany(projetos.projetos)
projetos.projetos.belongsTo( funcionarios )

module.exports = { funcionarios }//deixar puplico