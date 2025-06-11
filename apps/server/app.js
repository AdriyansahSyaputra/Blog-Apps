import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";
import authRoutes from "./routes/auth.route.js";
import clientRoutes from "./routes/client.route.js";
import dashboardRoutes from "./routes/dashboard.route.js";

const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());

// Set dayjs timezone
dayjs.extend(utc);
dayjs.extend(timezone);

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Static file
app.use("/uploads", express.static("uploads"));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/client", clientRoutes);
app.use("/api/dashboard", dashboardRoutes);

export default app;
