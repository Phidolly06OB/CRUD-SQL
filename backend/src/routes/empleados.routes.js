import {Router} from "express";
import { methodsHTTP as empleadosController} from "../controllers/empleados.controllers.js";

const router = Router();

router.get("/", empleadosController.getEmpleado);
router.get("/:id", empleadosController.getUnicoEmpleado);
router.post("/", empleadosController.postEmpleado);
router.delete("/:id", empleadosController.deleteEmpleado);
router.put("/:id", empleadosController.updateEmpleado);

export default router;