const tokenService = require("../service/token");

module.exports = {
  verifyUser: async (req, res, next) => {
    if (!req.headers.token) {
      return res.status(404).send({
        message: "There's no token",
      });
    }
    const response = await tokenService.decode(req.headers.token);
    //if (response.rol === "Administrador" || response.rol === "Cliente") {
    if (response) {
      next();
    } else {
      return res.status(403).send({
        message: "Not allow",
      });
    }
  },
};
