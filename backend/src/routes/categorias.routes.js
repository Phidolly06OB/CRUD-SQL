import {Router} from "express";
import { methodsHTTP as categoriaController} from "../controllers/categorias.controller.js";

const router = Router();

router.get("/", categoriaController.getCategorias);
router.get("/:id", categoriaController.getUnicaCategoria);
router.post("/", categoriaController.postCategorias);
router.delete("/:id", categoriaController.deleteCategoria);
router.put("/:id", categoriaController.updateCategorias);

export default router;