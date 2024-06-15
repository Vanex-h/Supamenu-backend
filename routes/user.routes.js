const {
  createUser,
  updateUser,
  deleteUserById,
  getAllUsers,
  getUserById,
  userLogin,
  getUserProfile
} = require("../controllers/user.controller");

const express = require("express");
const isAuthenticated = require("../middlewares/isAuthenticated");
const router = express.Router();

router.post("/signup", createUser);
router.post("/login", userLogin);

// router.put("/:id/update", isAuthenticated, updateUser)
// router.delete("/:id/delete", isAuthenticated, deleteUserById);
// router.get("/:id", getUserById);
router.use(isAuthenticated);

router.get("/", getAllUsers);
router.get("/profile", getUserProfile);
router.route("/:id").put(updateUser).delete(deleteUserById).get(getUserById);

module.exports = router;
