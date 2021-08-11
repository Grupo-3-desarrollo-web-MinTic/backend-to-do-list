module.exports = {
  login: async (req, res, next) => {
    try {
      const reg = { user: req.body.user, password: req.body.password };
      if (reg.user === "AndresMpa" && reg.password === "123") {
        res.status(200).json(reg);
      }
      console.log(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  list: async (req, res, next) => {
    try {
      const reg = {
        user: "AndresMpa",
        profile: "none",
        list: [
          "Sacar al perro",
          "Armar teclado",
          "Hacer ejercicio",
          "Ir al doctor",
          "Comer con Bryan",
          "Reunión con Fred",
        ],
      };
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  listHistoric: async (req, res, next) => {
    console.log("historic");
    try {
      const reg = {
        list: ["Esperar a Angie", "Preguntar por Marcela", "Presentar avances"],
      };
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  createUser: async (req, res, next) => {
    console.log("User created");
    try {
      console.log(req);
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  createTask: async (req, res, next) => {
    console.log("Task created");
    try {
      console.log(req);
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }

  },
  updateUser: async (req, res, next) => {
    console.log("User updated");
    try {
      console.log(req);
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }

  },
  deleteUser: async (req, res, next) => {
    console.log("User deleted");
    try {
      console.log(req);
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }

  },
  deleteTask: async (req, res, next) => {
    console.log("task deleted");
    try {
      console.log(req);
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }

  },
};
