import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import router from './Routes/routes.index.js'
import { sequelize } from './Database/models/index.js'
import { logRequisicao } from './Middleware/logMiddleware.js'
import { tratarErro } from './Middleware/errorMiddleware.js'

const app = express()
app.use(express.json())
app.use(logRequisicao)
app.use('/', router)
app.use(tratarErro)
sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados estabelecida com sucesso.')
        app.listen(process.env.PORT, () => {
            console.log(`Servidor rodando na porta: ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.error('Erro ao conectar ao banco de dados:', error)
        process.exit(1)
    })