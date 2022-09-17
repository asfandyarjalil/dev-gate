const express = require("express");
const cookieParser = require("cookie-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const fs = require("fs");
const mongoose = require("mongoose");
const { readdirSync } = require("fs");
require("dotenv").config();
const app = express();

// db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    //useFindAndModify: false,
    useUnifiedTopology: true,
    //useCreateIndex: true,
  })
  .then(() => console.log("**DB CONNECTED**"))
  .catch((err) => console.log("DB CONNECTION ERR => ", err));

app.use(cookieParser());
app.use(express.static("views"));
app.use("/", express.static("views"));
app.use(express.static("public"));
app.use(express.json());

const hbs = exphbs.create({
  extname: "handlebars",
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
  },
  layoutsDir: path.join(__dirname, "/views/layouts"),
  partialsDir: path.join(__dirname, "views/partials"),
  defaultLayout: "main",
  helpers: {
    inc: function (value, options) {
      return parseInt(value) + 1;
    },
  },
});
// route
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.get("/", async (req, res) => {
  res.render("homepage");
});
const PORT_HTTP = process.env.PORT || 8080;

app.listen(PORT_HTTP, () => {
  console.log("App is listening to port " + PORT_HTTP);
});
