const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("game", { game: "Uno" });
});

router.get("/lobby", (req, res, next) => {
  res.render("game", { game: "Uno" });
});

router.get("/join/:id", (req, res, next) => {
  res.render("game", { game: "Uno" });
});

module.exports = router;
