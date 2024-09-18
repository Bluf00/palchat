const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/users - Get all users and create a user
router.route('/').get(getUsers).post(createUser);

// /api/users/:id - Get, update, and delete a single user
router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:id/friends/:friendId - Add and remove a friend
router.route('/:id/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
