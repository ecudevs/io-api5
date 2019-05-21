const Producto = require("../models/producto");
const ObjectId = require("mongoose").Types.ObjectId;

function ProductoController() {
  this.get = async function() {
    return new Promise(async (resolve, reject) => {
      try {
        let productos = await Producto.find({ estado: "A" });
        resolve(productos);
      } catch (error) {
        reject(error);
      }
    });
  };

  this.getById = function(_id) {
    return new Promise(async (resolve, reject) => {
      try {
        let producto = await Producto.findById(ObjectId(_id));
        resolve(producto);
      } catch (error) {
        reject(error);
      }
    });
  };

  this.insertar = function(productoIN) {
    return new Promise(async (resolve, reject) => {
      try {
        let producto = await new Producto(productoIN).save();
        resolve(producto);
      } catch (error) {
        reject(error);
      }
    });
  };

  this.update = function(productoIN) {
    return new Promise(async (resolve, reject) => {
      try {
        await Producto.findByIdAndUpdate(ObjectId(productoIN._id), productoIN);
        let producto = await this.getById(productoIN._id);
        resolve(producto);
      } catch (error) {
        reject(error);
      }
    });
  };
}

module.exports = new ProductoController();
