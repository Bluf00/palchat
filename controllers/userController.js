const User = require('../models/user');

module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },

  // Get a single user by ID
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.id })
      .then((user) =>
        !user ? res.status(404).json({ message: 'No user with that ID' }) : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  // Update an existing user by ID
  updateUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then((user) =>
        !user ? res.status(404).json({ message: 'No user with that ID' }) : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Delete a user by ID
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.id })
      .then((user) =>
        !user ? res.status(404).json({ message: 'No user with that ID' }) : res.json({ message: 'User deleted' })
      )
      .catch((err) => res.status(500).json(err));
  },

  // Add a friend to the user's friend list
  addFriend(req, res) {
    User.findOneAndUpdate({ _id: req.params.id }, { $addToSet: { friends: req.params.friendId } }, { new: true })
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  // Remove a friend from the user's friend list
  removeFriend(req, res) {
    User.findOneAndUpdate({ _id: req.params.id }, { $pull: { friends: req.params.friendId } }, { new: true })
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
};
