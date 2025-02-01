const express = require("express");
require("./db/config");
const User = require('./db/User');
const PORT = 5000;
const app = express();

app.use(express.json());

app.post("/register", async (req, res)=>{
    let user = new User(req.body);
    let result = await user.save();
    res.send(result);
});

app.get("/", (req, res)=>{
    res.send("app is working")
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});