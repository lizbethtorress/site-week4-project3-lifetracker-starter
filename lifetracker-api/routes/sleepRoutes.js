const express = require("express");
const router = express.Router();

//Import the pool/db information
const pool = require("../db/pool");

// Get all sleep info from the database
router.get("/", async (req, res) => {
    // Set cache-control header to disable caching (optional-advanced)
    // res.setHeader("Cache-Control", "no-cache");
    try {
      const query = "SELECT * FROM sleep";
      const result = await pool.query(query);
      res.json(result.rows);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  // Add a new car to the database
  router.post("/", async (req, res) => {
    try {
      const {sleepDate, wakeDate, user_id} = req.body;
  
      const query =
        "INSERT INTO sleep (sleepDate, wakeDate, user_id) VALUES ($1, $2, $3) RETURNING *";
      const values = [sleepDate, wakeDate, user_id];
  
      const result = await pool.query(query, values);
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  module.exports = router