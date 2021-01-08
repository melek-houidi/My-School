const express = require("express");
const connectDB = require("./config/db");
const teacher = require("./models/teacher");
const admin = require("./models/admin");
const app = express();

// DB Connection
connectDB();


// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

// Define routes
app.use("/api/register", require("./routes/api/register"));
app.use("/api/auth", require("./routes/api/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
