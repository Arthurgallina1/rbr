const { Router } = require("express");
const multer = require("multer");
const multerConfig = require("./config/multerConfig");
const userController = require("./controllers/userController");
const sessionController = require("./controllers/sessionController");
const sorteioController = require("./controllers/sorteioController");
const fileController = require("./controllers/fileController");
const rifasController = require("./controllers/rifasController");
const authMiddleware = require("./middlewares/auth");

const routes = new Router();
const upload = multer(multerConfig);

routes.post("/session", sessionController.auth);
routes.post("/user/store", userController.store);
routes.use(authMiddleware);
routes.post("/sorteio/files", upload.array("file"), fileController.store);
routes.post("/sorteio", upload.array("file"), sorteioController.store);
routes.get("/sorteio", sorteioController.index);
routes.get("/sorteio/:sorteio_id", sorteioController.show);
routes.post("/rifas", rifasController.store);
routes.post("/teste", upload.array("file"), (req, res) => {
  return res.json({});
});

module.exports = routes;
