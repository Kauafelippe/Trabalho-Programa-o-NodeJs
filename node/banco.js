const sequelize = require("sequelize"); /*cria uma constante sequelize, importamnto a biblioteca sequelize comoparametro que é um ORM (Object-Relational Mapping))*/
require('dotenv').config() /*importa módulo dotenv e carrega as variáveis de ambiente de um arquivo .env para as processar. */

const conexao = new sequelize( /*cria nova instancia com parametros. */
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect:"mysql",
        host:process.env.DB_HOST
    }
)

module.exports = { conexao } /*Exporta conexao para podrr ser usada em outras partes do codigo. */