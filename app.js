import express from 'express';
import morgan from "morgan";
import cors from 'cors';
import todoRouter from "./routes/todoRouter.js";
// const PORT = process.env.PORT || 3000;

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors("*"));

app.use("/todos", todoRouter)

// app.listen(PORT, () => {
//     console.log(`Cors enabled server listening on port ${PORT}`)
// })

export default app