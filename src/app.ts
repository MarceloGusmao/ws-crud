import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as logger from "morgan";

import { conectarServidorNoBD } from "./config/db";
import { routerUsuario } from "./routers/usuario";

/**
 * Criar a aplicação
 */
export const app = express();

/**
 * Libera o acesso aos serviços
 */
app.use(cors());

/**
 * Permite receber e eviar json
 */
app.use(bodyParser.json());

/**
 * configurar os logs
 */
app.use(logger("dev"));

/**
 * Conectar ao db
 */
conectarServidorNoBD();

/**
 * Configuração de Rotas
 */
app.use("/usuario", routerUsuario);
app.use("/", (req, res) => res.send("API do APP ws-crud"));
