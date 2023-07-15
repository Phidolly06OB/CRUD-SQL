import {Router} from "express";
import { methodsHTTP as clientesController} from "../controllers/clientes.controllers.js";

const router = Router();

router.get("/", clientesController.getClientes);
router.get("/:id", clientesController.getUnicoCliente);
router.post("/", clientesController.postClientes);
router.delete("/:id", clientesController.deleteClientes);
router.put("/:id", clientesController.updateClientes);

export default router;