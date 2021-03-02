const express = require("express");

const bodyParser = require('body-parser');

const db = require('./models')

const app = express();

app.post('/foods', async (req, res) => {
    await db.foods.create({
        
            name:"Belgian Waffles",
            price:"$5.95",
            description:"Two of our famous Belgian Waffles with plenty of real maple syrup",
            calories:"650",
            createdAt: new Date(),
            updatedAt: new Date(),
         
    },
    {
            name:"Kue Balok",
            price:"$1.95",
            description:"Kue balok gurih gurih nyoy",
            calories:"250",
            createdAt: new Date(),
            updatedAt: new Date(),
    }
    ),

    res.json({ message: "sukses insert data foods" });
});

app.get('/foods', async (req, res) => {
    const data = await db.models.findAll();

    res.json({message:"success read data from database", data: data});
});

app.put('/foods');

app.delete('/foods');

app.listen(6000, () => console.log("app running on port 6000"));


// 1. Buat aplikasi menggunakan express 
// 2. Endpoint pertama menampilkan data dengan format json diatas
// 3. Endpoint kedua menampikkan 1 data dari format json diatas tergantung dari nomor indexnya
// 4. Endpoint ketiga menampilkan total kalori dari format json diatas