const router = require("express").Router();
const Assessment = require("../models/assessment.model");

router.route("/").get((req, res) => {
  Assessment.find()
    .then((assessments) => res.json(assessments))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/add").post((req, res) => {
  const classCode = req.body.classCode;
  const name = req.body.name;
  const weight = req.body.weight;
  const dueDate = req.body.dueDate;
  const recurring = req.body.recurring;
  const frequency = req.body.frequency;

  const newAssessment = new Assessment({
    classCode,
    name,
    weight,
    dueDate,
    recurring,
    frequency,
  });

  newAssessment
    .save()
    .then(() => {
      res.json("New assessment added!");
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/:id").get((req, res) => {
  Assessment.findById(req.params.id)
    .then((assessment) => res.json(assessment))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/:id").delete((req, res) => {
  Assessment.findByIdAndDelete(req.params.id)
    .then(() => res.json("Assessment item deleted."))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/:id").post((req, res) => {
  Assessment.findById(req.params.id)
    .then((assessment) => {
      assessment.classCode = req.body.classCode;
      assessment.name = req.body.name;
      assessment.weight = req.body.weight;
      assessment.dueDate = req.body.dueDate;
      assessment.recurring = req.body.recurring;
      assessment.frequency = req.body.frequency;
      assessment.completed = req.body.completed;
      assessment.score = req.body.score;

      assessment
        .save()
        .then(() => {
          res.json("Assessment updated.");
        })
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
