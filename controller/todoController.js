const model = require("../model");

module.exports = {
  add: async (req, res, next) => {
    try {
      const reg = await model.Todo.create(req.body);
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  list: async (req, res, next) => {
    try {
      const reg = await model.Todo.findAll({
        include: [
          {
            model: models.Categoria,
            as: "categoria",
          },
        ],
      });
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
      const reg = await model.Todo.destroy({
        where: {
          id: req.body.id,
        },
      });
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  update: async (req, res, next) => {
    try {
      const reg = await model.Todo.update(
        {
          descripcion: req.body.description,
          state: req.body.state,
        },
        { where: { id: req.body.id } }
      );
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  activate: async (req, res, next) => {
    try {
      const reg = await model.Todo.update(
        { estado: 1 },
        { where: { id: req.body.id } }
      );
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  deactivate: async (req, res, next) => {
    try {
      const reg = await model.Todo.update(
        { estado: 0 },
        { where: { id: req.body.id } }
      );
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
};
