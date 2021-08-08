require('../DB/connection');
const userData = require('../models/users');

const tasks = require('../models/task');

const historicTask = require('../models/historicTask');



const identificar = async (user,password) => {
    const response = await userData.find({name:user,password:password});
    return response;
};



const tareas = async (id) => {

    
    const response = await tasks.find({user:id});
    return response;
};



const tareasHistorico = async (id) => {

    
    const response = await historicTask.find({task:id});
    return response;
};
const crearUsuario = async (name,email,password) => {

    const usuario = new userData({
      name: name,
      email: email,
      password: password
        
    });
    await usuario.save();
    
};

const updateUser = async (id,name,email) =>{
  
  var query = {'_id': id  };
  const doc = await userData.findOne(query);
  doc.name = name;
  doc.email = email;
  await doc.save();
}
const deleteUser = async (id) =>{
  
  var query = {'_id': id  };
  const doc = await userData.findOne(query);
  doc.is_deleted = true;
  await doc.save();
}
const deleteTask = async (id) =>{
  
  var query = {'_id': id  };
  const doc = await tasks.findOne(query);
  doc.state = 'deleted';
  await doc.save(function(err,objeto){
    
    const tareaHistorico = new historicTask({
      description: objeto.description,
      title: objeto.title,
      task: objeto._id,
      state: 'deleted'

    });
    tareaHistorico.save();
    
  });
}




module.exports = {
  login: async (req, res, next) => {
    try {
      const reg = { user: req.body.user, password: req.body.password };
      const user = await identificar(reg.user,reg.password);
      if (user.length > 0) {
        res.status(200).json({ok:true,data:user});
        
      }else{
        res.status(401).json({ok:false});

      }
      
      
      // searchProducts();
      // console.log(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  list: async (req, res, next) => {
    try {
      const reg = { id: req.headers.id };
      if(reg.id == null){
        res.status(400).json({ok:false});
      }

      const task = await tareas(reg.id);
      
      if (task.length > 0) {
        res.status(200).json({ok:true,data:task});
        
      }else{
        res.status(401).json({ok:false});

      }
      
      
      // searchProducts();
      // console.log(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  listHistoric: async (req, res, next) => {
    try {
      const reg = { id: req.headers.id };
      if(reg.id == null){
        res.status(400).json({ok:false});
      }

      const task = await tareasHistorico(reg.id);
      
      if (task.length > 0) {
        res.status(200).json({ok:true,data:task});
        
      }else{
        res.status(401).json({ok:false});

      }
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  createUser: async (req, res, next) => {
    try {
      const reg = { name: req.body.name, password: req.body.password,email: req.body.email };

      if(reg.password == null || reg.name == null || reg.email == null){
        res.status(400).json({ok:false});
      }else{
        crearUsuario(reg.name,reg.email,reg.password);
        res.status(200).json({ok:true});  
      }

          
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  createTask: async (req, res, next) => {
    try {
      const reg = { title: req.body.title, description: req.body.description,user: req.body.user };

      if(reg.description == null || reg.title == null || reg.user == null){
        res.status(400).json({ok:false});
      }else{
          const tarea = new tasks({
            description: reg.description,
            title: reg.title,
            user: reg.user

          });
          await tarea.save(function(err,objeto){
            if(err){
              throw err;
            }
            const tareaHistorico = new historicTask({
              description: reg.description,
              title: reg.title,
              task: objeto._id
  
            });
            tareaHistorico.save();
            
          });
          
      
        res.status(200).json({ok:true});  
      }

          
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  updateUsuario: async (req, res, next) => {
    try {
      const reg = { name: req.body.name, email: req.body.email,id: req.body.id };

      if(reg.email == null || reg.name == null || reg.id == null){
        res.status(400).json({ok:false});
      }else{
          updateUser(reg.id,reg.name,reg.email)
          
      
        res.status(200).json({ok:true});  
      }

          
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  deleteUsuario: async (req, res, next) => {
    try {
      const reg = {id: req.body.id };

      if(reg.id == null){
        res.status(400).json({ok:false});
      }else{
          deleteUser(reg.id)
          
      
        res.status(200).json({ok:true});  
      }

          
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  deleteTarea: async (req, res, next) => {
    try {
      const reg = {id: req.body.id };

      if(reg.id == null){
        res.status(400).json({ok:false});
      }else{
        try {
          deleteTask(reg.id)
          res.status(200).json({ok:true});  
          
        } catch (e) {
          res.status(500).send({
            message: "Ocurrió un error",
          });
          next(e);
        }
          
      
        
      }

          
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },

  send: async (req, res, next) => {
    
    try {
      const reg = {
        res: "Holita",
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
