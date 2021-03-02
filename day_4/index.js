const express= require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log(req.body);
    
    res.send("Hallo hai")});

app.listen(5000, () => console.log("app running on port 5000"));