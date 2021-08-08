const test = require("../controller/test");
const routerx = require("express-promise-router");

const router = routerx();

/*Instacia + https + ( 'ruta', funcion )*/
router.get("/send", test.send);
router.get("/more", test.sendMore);
// router.get("/List", test.sendList);
router.post("/login", test.login)
router.get("/list", test.list)
router.get("/listHistoric", test.listHistoric)
router.post("/createuser", test.createUser)
router.post("/createtask", test.createTask)
router.post("/updateuser", test.updateUsuario)
router.post("/deleteuser", test.deleteUsuario)
router.post("/deletetask", test.deleteTarea)

module.exports = router;

