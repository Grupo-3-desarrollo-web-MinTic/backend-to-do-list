const test = require("../controller/test");
const routerx = require("express-promise-router");

const router = routerx();

/*Instacia + https + ( 'ruta', funcion )*/
router.get("/send", test.send);
router.get("/more", test.sendMore);
router.get("/List", test.sendList);

//router.get("/test", { data: "hola" });

module.exports = router;

