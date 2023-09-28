const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const dbConnection = require("./config/dbConnect.js");

dbConnection();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", require("./routes/userRoutes.js"));
app.use("/api/documents", require("./routes/documentRoutes.js"));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`=> Server running on port %s`, PORT);
});
