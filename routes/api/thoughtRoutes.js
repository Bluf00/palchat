const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts - Get all thoughts and create a thought
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:id - Get, update, and delete a single thought
router.route('/:id').get(getSingleThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions - Add a reaction
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId - Delete a reaction
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
