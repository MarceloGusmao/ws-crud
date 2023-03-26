import { Router } from "express";

export const routerUsuario = Router();

/**
 * Criar uma rota padrão
 */
routerUsuario.get("/", (req, res) => res.send("Serviços de Usário"));
