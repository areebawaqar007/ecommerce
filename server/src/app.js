import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoute.js";

import errorMiddleware from "../middleware/error.js";



const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/v1", productRoutes);

// app.get("/", (req, res) => {
//   res.send("Server is working");
// });

// Error middleware (always keep this LAST)
app.use(errorMiddleware);
export default app;