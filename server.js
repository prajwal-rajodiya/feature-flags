let express = require("express");
let cors = require("cors");
//=======================================
let config = require("./config.json");
const { json } = require("express");

//Modules configuration  ================
let app = express();
app.use(express.json());
app.use(cors());

let feautures = [
  { name: "home", status: false },
  { name: "signin", status: true },
  { name: "signup", status: true },
];

//--------------
app.get("/showArticle", (req, res) => {
  console.log("api called!!");
  res.send({
    newArticle: false,
  });
});
app.get("/features", (req, res) => {
  res.send(JSON.stringify(feautures));
});

app.post("/update", (req, res) => {
  console.log(req.body);
  feautures = req.body;
  res.send(JSON.stringify(feautures));
});
//Web server configuration  =============
app.listen(config.port, config.host, function (error) {
  if (error) {
    console.log("Error ", error);
  } else {
    console.log("Web server is now running on ", config.host, ":", config.port);
  }
});
