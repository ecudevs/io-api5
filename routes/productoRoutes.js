const Router = require("express").Router;
const router = new Router();

const ProductoController = require("../controllers/productoController");

router.get("/productos", (req, res) => {
  ProductoController.get()
    .then(productos => {
      res.send({ productos });
    })
    .catch(error => {
      res.status(500).send({ error });
    });
});

router.get("/productos/:idProducto", (req, res) => {
  ProductoController.getById(req.params.idProducto)
    .then(producto => {
      res.send(producto);
    })
    .catch(error => {
      res.status(500).send({ error });
    });
});

router.post("/productos", (req, res) => {
  ProductoController.insertar(req.body)
    .then(producto => {
      res.send(producto);
    })
    .catch(error => {
      res.status(500).send({ error });
    });
});

router.put("/productos", (req, res) => {
  ProductoController.update(req.body)
    .then(producto => {
      res.send(producto);
    })
    .catch(error => {
      res.status(500).send({ error });
    });
});

module.exports = router;
