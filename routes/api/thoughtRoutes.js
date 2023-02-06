const router = require('express').Router();
const {
  getAllThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtController.js');

// /api/thoughts GET all and POST thought
router.route('/').get(getAllThoughts).post(createThought);

// /api/thoughts/:id GET one thought, PUT AND DELETE BY ID
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

//api /api/thoughts/:thoughtId/reactions POST new reactions
router.route('/:thoughtId/reactions').post(createReaction);

// /api/thoughts/:thoughtId/reactions/:reactionID DELETE BY ID
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
