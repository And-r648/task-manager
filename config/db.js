import mongoose from "mongoose";
import DB_PASSWORD  from "./secret.js";

const URI = `mongodb+srv://andreyplt546:${DB_PASSWORD}@cluster0.csnbq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

export default mongoose;