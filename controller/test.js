module.exports = {
  send: async (req, res, next) => {
    try {
      const reg = {
        res: "Holita" 
      };
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  sendMore: async (req, res, next) => {
    try {
      const reg = {
        res: "Holita",
        name: "test",
        description: "Dolor de mano",
        status: 1,
        progress: 1,
      };
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  sendList: async (req, res, next) => {
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
          "Reunión con Fred"
        ]
      };
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  remove: async (req, res, next) => {
    try {
      console.log(req.body.id);
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
};
