const express = require("express");

const app = express();

const data = [
  // 0
  {
    name: "Belgian Waffles",
    price: "$5.95",
    description:
      "Two of our famous Belgian Waffles with plenty of real maple syrup",
    calories: "650",
  },
  // 1
  {
    name: "Strawberry Belgian Waffles",
    price: "$7.95",
    description:
      "Light Belgian waffles covered with strawberries and whipped cream",
    calories: "900",
  },
  {
    name: "Berry-Berry Belgian Waffles",
    price: "$8.95",
    description:
      "Belgian waffles covered with assorted fresh berries and whipped cream",
    calories: "900",
  },
  {
    name: "French Toast",
    price: "$4.50",
    description: "Thick slices made from our homemade sourdough bread",
    calories: "600",
  },
  {
    name: "Homestyle Breakfast",
    price: "$6.95",
    description:
      "Two eggs, bacon or sausage, toast, and our ever-popular hash browns",
    calories: "950",
  },
];

app.get("/foods", (req, res) => res.json(data),
console.log("ini baca foods")
);

app.get("/food/:number", (req, res) => res.json(data[req.params.number - 1]));

app.get("/food2", (req, res) => {
  console.log(req.query.id);
  console.log(req.query.data);
  res.send("testing");
});

app.get("/foods/calouries", (req, res) => {
  let totalCalories = 0;
  for (let index = 0; index < data.length; index++) {
    console.log(parseInt(data[index].calories));
    totalCalories += parseInt(data[index].calories);
  }
  res.json({ totalCalories: totalCalories });
});

app.listen(3200, () => console.log("running in port 3200"));
