import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./config/configDb.js";
import userRouter from "./routers/userRouter.js";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Backend funcionandoo");
});


app.use("/api/users", userRouter);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en puerto ${PORT}`);
    });
}).catch((error) => {
    console.error("Error al iniciar el servidor:", error);
    process.exit(1);
});

