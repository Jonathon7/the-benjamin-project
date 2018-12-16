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

  db.get_blog()
    .then(blog => {
      res.status(200).json(blog);
    })
    .catch(err => {
      res.status(500).send({ errorMessage: "Something went wrong" });
      console.log(err);
    });
};

const update = () => {};

const deleted = () => {};

module.exports = {
  create,
  read,
  update,
  deleted
};
