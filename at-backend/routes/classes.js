const router = require("express").Router();
const Class = require("../models/class.model");

router.route("/").get((req, res) => {
  Class.find()
    .then((classes) => res.json(classes))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/add").post((req, res) => {
  const code = req.body.code;
  const name = req.body.name;
  const hpo = req.body.hpo;

  const newClass = new Class({ code, name, hpo });

  newClass
    .save()
    .then(() => {
      res.json("New class added!");
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
