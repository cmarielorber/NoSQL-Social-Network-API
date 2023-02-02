const router = require('express').Router();

const {
  deleteFriend,
  createFriend,
} = require('../../controllers/userController.js');

// /api/reactions
router.route('/').post(createFriend);

// /api/thoughts/:thoughtId
router
  .route('/:userId')
  .delete(deleteFriend);

module.exports = router;