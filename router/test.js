const test = require("../controller/test");
const routerx = require("express-promise-router");

const router = routerx();

/*Instacia + https + ( 'ruta', funcion )*/
router.get("/list", test.list);
router.post("/login", test.login);
router.get("/historic", test.listHistoric);
router.post("/createUser", test.createUser);
router.post("/createTask", test.createTask);
router.post("/updateUser", test.updateUser);
//router.post("/updateTask", test.updateTask);
router.post("/deleteUser", test.deleteUser);
router.post("/deleteTask", test.deleteTask);

module.exports = router;
