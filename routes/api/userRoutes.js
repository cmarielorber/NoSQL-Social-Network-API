const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  createUser2,
  createUser3,
  updateUser,
  deleteUser,
 
} = require('../../controllers/studentController');

// /api/users
router.route('/')
.get(getUsers)
.post(createUser)
.post(createUser2)
.post(createUser3);

// /api/users/:usertId
router.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

module.exports = router;
