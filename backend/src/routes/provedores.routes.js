import {Router} from "express";
import { methodsHTTP as provedoresControllers} from "../controllers/provedores.controller.js";

const router = Router();

router.get("/", provedoresControllers.getprovedores);
router.get("/:id", provedoresControllers.getprovedores);
router.post("/", provedoresControllers.postProvedor);
router.delete("/:id", provedoresControllers.updateProvedor);
router.put("/:id", provedoresControllers.deleteProvedor);

export default router;