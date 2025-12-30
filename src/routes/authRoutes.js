const express = require("express");
const router = express.Router();

router.post("/signup", (req, res) => {
  res.json({ ok: true });
});

module.exports = router;