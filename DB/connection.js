const mongoose = require("mongoose");

const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.zhkdc.mongodb.net/to_do_app_database?retryWrites=true&w=majority";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
  })
  .catch(err => console.log(err));

const db = mongoose.connection;

db.once("open", _ => {
    console.log('conectado')
});

// to test the error stop mongod
db.on("error", err => {
  console.log(err);
});

