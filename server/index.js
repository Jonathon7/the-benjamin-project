require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const path = require("path");

const blog_controller = require("./controllers/blog_controller");

const app = express();

app.use(json());
app.use(cors());

app.use(express.static(`${__dirname}/../build`));

app.get("/api/blog/:id", blog_controller.getPost);
app.get("/api/blogs", blog_controller.read);
app.post("/api/blogs", blog_controller.create);

massive(process.env.DATABASE_URL)
  .then(db => app.set("db", db), console.log("Database Connected"))
  .catch(err => {
    console.log(err);
  });

const port = process.env.PORT || 3004;
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
