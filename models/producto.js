const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productosSchema = new Schema({
  nombre: { type: String, required: true },
  imagen: { type: String, required: true },
  precio: { type: Number, required: true },
  stock: { type: Number, required: true },
  feCreacion: { type: Date, default: new Date() },
  estado: { type: String, default: "A" }
});

const producto = mongoose.model("producto", productosSchema);
module.exports = producto;

// const mongoose = require("mongoose");

// // const item = mongoose.model("item", productosSchema);
// // module.exports = item;
