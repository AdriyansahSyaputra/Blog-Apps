import app from "./app.js";
import mongoose from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();

// Run server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
