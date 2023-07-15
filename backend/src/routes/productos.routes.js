import {Router} from "express";
import { methodsHTTP as productosController} from "../controllers/productos.controllers.js";

const router = Router();

router.get("/", productosController.getProductos);
router.get("/:id", productosController.getUnicoProducto);
router.post("/", productosController.postProductos);
router.delete("/:id", productosController.deleteProducto);
router.put("/:id", productosController.updateProductos);

export default router;