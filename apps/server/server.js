import app from "./app.js";
import mongoose from "./config/db.js";
import dotenv from "dotenv";
import cron from "node-cron";
import { updateScheduledPosts } from "./cron/updateScheduledPosts.js";
dotenv.config();

// Run server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

// jalankan cron
cron.schedule("* * * * *", async () => {
  console.log("[CRON] Check scheduled posts");
  await updateScheduledPosts();
});
