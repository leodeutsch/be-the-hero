const express = require('express')
const cors = require('cors')
const routes = require('./routes.js')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Busca uma info no back-end.
 * POST: Cria uma info no back-end.
 * PUT: Altera uma info no back-end.
 * DELETE: Deleta uma info no back-end.
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados eviados na rota apôs "?" (Filtros, paginação).
 * Route Params: Parâmetros utilizados para identificar recursos.
 * Rquest Body: Corpo da requisição, utilizado para criar ou alterar recursos.
 */

app.listen(3333)