const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.get("/hola", (req, res) => {
//   res.send("Hola mundo!");
// });

// app.get("/hola/:nombre/:apellido", (req, res) => {
//   res.send("Hola mundo!" + req.params.nombre + " " + req.params.apellido);
// });

// app.post("/hola", (req, res) => {
//   res.send("Hola mundo! por post!" + req.body.nombre);
// });

// app.put("/hola/:apellido", (req, res) => {
//   res.send("Hola mundo! put!" + req.body.nombre + " " + req.params.apellido);
// });

let productos = [
  {
    _id: 1,
    nombre: "Coca - Cola",
    imagen:
      "https://www.myamericanmarket.com/873-large_default/coca-cola-classic.jpg",
    stock: 15,
    categoria: "BEBIDAS",
    precio: 1
  },
  {
    _id: 2,
    nombre: "6 pack Coronas",
    imagen:
      "https://dpf77bhxauhdh.cloudfront.net/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/c/e/cerveza-corona-extra-355-cc-pack-24-botellas.jpg",
    stock: 25,
    categoria: "BEBIDAS",
    precio: 1
  },
  {
    _id: 3,
    nombre: "Mc. Bacon",
    imagen:
      "https://i.pinimg.com/originals/49/24/b6/4924b6db6dccd4667741510d6f8d0e88.png",
    stock: 20,
    categoria: "ALIMENTOS",
    precio: 3
  },
  {
    _id: 4,
    nombre: "Encebollado",
    imagen: "/assets/images/encebollado.jpg",
    stock: 20,
    categoria: "ALIMENTOS",
    precio: 1.5
  }
];

app.get("/productos", (req, res) => {
  res.send({ productos });
});

app.get("/productos/:idProducto", (req, res) => {
  let producto = productos.find(
    productoABuscar => productoABuscar._id == req.params.idProducto
  );
  res.send({ producto });
});

app.post("/productos", (req, res) => {
  productos.push(req.body);
  res.send({ productos });
});

app.put("/productos", (req, res) => {
  let index = productos.findIndex(
    productoAEncontrar => productoAEncontrar._id == req.body._id
  );
  productos[index] = req.body;
  res.send({ productos });
});

const port = process.env.PORT || "9000";
app.set("port", port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Mag Happens on port: ${port}`));
