const routerx = require("express-promise-router");
const testRouter = require("./test");
const todoRouter = require("./todo");
//const userRouter = require("./user");

const router = routerx();

router.use("/test", testRouter)
router.use("/todo", todoRouter);
//router.use("/user", userRouter);

module.exports = router;
