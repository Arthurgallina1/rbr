const { Router } = require("express");
const userController = require("./controllers/userController");
const sessionController = require("./controllers/sessionController");
const sorteioController = require("./controllers/sorteioController");
const rifasController = require("./controllers/rifasController");
const authMiddleware = require("./middlewares/auth");
const routes = new Router();

routes.post("/session", sessionController.auth);
routes.post("/user/store", userController.store);
routes.use(authMiddleware);
routes.post("/sorteio", sorteioController.store);
routes.get("/sorteio", sorteioController.index);
routes.post("/rifas", rifasController.store);
routes.get("/", (req, res) => {
  return res.json({ ok: "ok" });
});

module.exports = routes;
