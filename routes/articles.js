const { Router } = require("express");
const router = Router();
const articlesController = require("../controllers/articlesController");
// Get All
router.get("/articles", articlesController.list);
module.exports = router;
