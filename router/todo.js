const todoController = require("../controller/todoController");
const routerx = require("express-promise-router");
const auth = require("../middleware/auth");

const router = routerx();

/*Instacia + https + ( 'ruta', funcion )*/
router.post("/add", auth.verifyUser, todoController.add);
router.get("/list", auth.verifyUser, todoController.list);
router.put("/update", auth.verifyUser, todoController.update);
router.put("/activate", auth.verifyUser, todoController.activate);
router.put("/deactivate", auth.verifyUser, todoController.deactivate);

//router.get("/test", { data: "hola" });

module.exports = router;

