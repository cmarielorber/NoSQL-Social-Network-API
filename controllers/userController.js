const { User, Thought } = require("../models");

module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find()
      .then((courses) => res.json(courses))
      .catch((err) => res.status(500).json(err));
  },
  // Get a user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .then((course) =>
        !course
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(course)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a user
  createUser(req, res) {
    User.create(req.body)
      .then((course) => res.json(course))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  createUser1(req, res) {
    User.create(req.body)
      .then((course) => res.json(course))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  createUser2(req, res) {
    User.create(req.body)
      .then((course) => res.json(course))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a user
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((course) =>
        !course
          ? res.status(404).json({ message: "No user with that ID" })
          : Thought.deleteMany({ _id: { $in: course.thoughts } })
      )
      .then(() => res.json({ message: "Course and students deleted!" }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a user
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((course) =>
        !course
          ? res.status(404).json({ message: "No user with this id!" })
          : res.json(course)
      )
      .catch((err) => res.status(500).json(err));
  },
};
