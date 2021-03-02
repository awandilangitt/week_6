const express = require("express");
const app = express();

const db = require('./models');

const checkRequestField = 
    (req, res, next) => {
    //validasi check data request
    if(req.query.username && req.query.password) {
        next();
    } else {
        return res.send("data username dan password ngak ada");
    }
};

const checkDataTypes = (req, res, next) => {
    const parserUsername = Number.isNaN (parseInt(req.query.username));
    if(
        typeof req.query.username === 'string' 
    && typeof req.query.password === 'string') {
        next();
    } else {
        return res.send(
            "data username dan password ngak sesuai yang diizinkan");
    }
};

const checkLogin = async (req, res, next) => {
    const dataCheck = await db.users.findOne({where: {username: req.query.username, password: req.query.password},
    });

    if (dataCheck) {
        next();
    } else {
        res.send("kamu tidak terdaftar di tabel users")
    }
};


app.get("/", checkRequestField, checkDataTypes, checkLogin, (req, res) => 
    res.send ("kamu telah terdaftar di tabel users")
);

// app.post("/", checkRequestField, checkDataTypes, (req, res)=> 
//     //insert new user di database
//     res.send("telah ditambahkan user baru")
// );

// const checkRequestField =
// (req, res, next) => {
//     //validasi check data request
//     if(req.query.username && req.query.password) {
//         next();
//     } else {
//         return res.send("data username dan password ngak ada");
//     }
// };

// const checkDataTypes = (req, res, next) => {
//     const parserUsername = Number.isNaN (parseInt(req.query.username));
//     if(
//         typeof req.query.username === 'string' 
//     && typeof req.query.password === 'string') {
//         next();
//     } else {
//         return res.send(
//             "data username dan password ngak sesuai yang diizinkan");
//     }
// };
   
app.listen(3000, () => console.log("running on port 3000"));

