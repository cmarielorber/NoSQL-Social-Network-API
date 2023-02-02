const { User, Thought } = require("../models");

module.exports = {
  // Get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((courses) => res.json(courses))
      .catch((err) => res.status(500).json(err));
  },
// create thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((course) => res.json(course))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
//find thought by id
getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select("-__v")
      .then((course) =>
        !course
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(course)
      )
      .catch((err) => res.status(500).json(err));
  },
};