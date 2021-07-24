const routerx = require("express-promise-router");
const todoRouter = require("./todo");
const userRouter = require("./user");

const router = routerx();

router.use("/todo", todoRouter);
router.use("/user", userRouter);

module.exports = router;
