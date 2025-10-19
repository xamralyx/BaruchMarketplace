const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Baruch Marketplace backend is running 🚀");
});

const PORT = process.env.PORT || 5000;
app.get("/api/test", (req, res) => {
    res.json({ message: "Hello from the backend!" });
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get("/api/test", (req, res) => {
    res.json({ message: "Hello from the backend!" });
});