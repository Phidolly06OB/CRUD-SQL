import express from "express";
import categoriasRouter from "./routes/categorias.routes.js";
import productosRouter from "./routes/productos.routes.js";
import clientesRouter from "./routes/clientes.routes.js";
import proveedoresRouter from "./routes/provedores.routes.js";
import empleadosRouter from "./routes/empleados.routes.js";
import cors from "cors";

const app = express();

app.set("port", 4001);
app.use(express.json());

app.use(cors());
app.use("/api/categorias", categoriasRouter);
app.use("/api/productos", productosRouter);
app.use("/api/clientes", clientesRouter);
app.use("/api/proveedores", proveedoresRouter);
app.use("/api/empleados", empleadosRouter);


export default app;