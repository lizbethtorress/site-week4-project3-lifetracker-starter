const express = require('express');
const router = express.Router();
const pool = require("../db/pool");
// get the sleep information
router.get("/", async (req, res) => {
  try {
    const query = 'SELECT AVG(EXTRACT(EPOCH FROM (wakeDate - sleepDate)) / 3600) AS average_sleep_duration FROM sleep WHERE user_id = 1';
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error xxx" });
  }
});
module.exports = router;