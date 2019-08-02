const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  // res.render('index');
  // console.log("+++++++++++++++++++++++++");
  res.json({ message: "it's ok" });
});

module.exports = router;
