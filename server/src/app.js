import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Routes
import productRoutes from "./routes/productRoute.js";
import userRoutes from "./routes/userRoute.js";
import orderRoutes from "./routes/orderRoute.js";


// Middleware
import errorMiddleware from "./middleware/error.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/v1", productRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", orderRoutes);


// Error middleware (always keep this LAST)
app.use(errorMiddleware);

export default app;