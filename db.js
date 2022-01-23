const mongoose = require("mongoose");
const artc = require("./models/Article");
// mongodb database connection string. change it as per your needs. here "mydb" is the name of the database. You don't need to create DB from mongodb terminal. mongoose create the db automatically.
//mongodb+srv://<username>:<password>@database.jbeyu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(
  "mongodb+srv://Khaled:khaleed2010709307@khaleed.jbeyu.mongodb.net/test?authSource=admin&replicaSet=atlas-11jbls-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function callback() {
  console.log("MongoDB Connected...");
});

module.exports = db;
