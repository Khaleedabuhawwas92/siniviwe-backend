const mongoose = require("mongoose");
const artc = require("./models/Article");
// mongodb database connection string. change it as per your needs. here "mydb" is the name of the database. You don't need to create DB from mongodb terminal. mongoose create the db automatically.
//mongodb+srv://<username>:<password>@database.jbeyu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(
  "mongodb+srv://doadmin:L823op17hx6H5m4c@db-mongodb-fra1-16206-ba751473.mongo.ondigitalocean.com/admin?authSource=admin&replicaSet=db-mongodb-fra1-16206&tls=true",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true,
    tlsCAFile: './ca-certificate.crt',
  }
);
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function callback() {
  console.log("MongoDB Connected...");
});

module.exports = db;
