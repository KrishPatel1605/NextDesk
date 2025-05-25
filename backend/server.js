const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://nextdeskai.vercel.app"
  ],
  credentials: true,
}));
app.use(express.json());

// Import and use routes
const uploadRoutes = require("./routes/uploadRoutes");
app.use("/", uploadRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
