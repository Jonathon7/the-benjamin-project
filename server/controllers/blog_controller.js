const create = (req, res, next) => {
  const db = req.app.get("db");

  db.add_blog([req.body.title, req.body.date, req.body.text])
    .then(blog => {
      res.status(200).json(blog);
    })
    .catch(err => {
      res.status(500).send({ errorMessage: "Something went wrong" });
      console.log(err);
    });
};

const read = (req, res, next) => {
  const db = req.app.get("db");
  // console.log("hit");
  db.get_blog()
    .then(blog => {
      res.status(200).json(blog);
    })
    .catch(err => {
      res.status(500).send({ errorMessage: "Something went wrong" });
      console.log(err);
    });
};

const getPost = (req, res, next) => {
  const db = req.app.get("db");
  db.get_post([req.params.id])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

const update = () => {};

const deleted = () => {};

module.exports = {
  create,
  read,
  update,
  deleted,
  getPost
};
