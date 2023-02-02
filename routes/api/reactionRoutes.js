const router = require('express').Router();

const {
  deleteReaction,
  createReaction,
} = require('../../controllers/reactionController.js');

// /api/reactions
router.route('/').post(createReaction);

// /api/thoughts/:thoughtId
router
  .route('/:reactionId')
  .delete(deleteReaction);

module.exports = router;
