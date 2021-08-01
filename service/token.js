const jwt = require("jsonwebtoken");
//const models = require("../model");

module.exports = {
  encode: async (user) => {
    // Esto se toma de los modelos de Mongo
    const token = jwt.sign(
      {
        id: user.id,
        nombre: user.nombre,
        email: user.email,
        rol: user.rol,
        description: user.descripcion,
        avatar: user.avatar,
        profile: user.profile,
      },
      "config.secret"
      //{
      //expiresIn: 3600,
      //}
    );
    return token;
  },
  //permite decodificar el token
  decode: async (token) => {
    try {
      let id = jwt.verify(token, "config.secret");
      let Usuario = await models.Usuario.findOne({
        where: {
          id: id,
        },
      });
      if (Usuario) {
        return Usuario;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  },
};
