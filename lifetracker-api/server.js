const express = require("express"); //importing express
const app = express(); //calling using express in the app as a function
const cors = require("cors"); //imorting cors
const morgan = require("morgan"); // Import the Morgan middleware for logging

//importing the auth routes
const authRoutes = require("./routes/authRoutes");
const sleepRoutes = require("./routes/sleepRoutes");
const actRoutes = require("./routes/actRoutes");

// Middleware
app.use(cors()); // Enable CORS middleware to handle cross-origin requests
app.use(morgan("dev")); // Use Morgan middleware with 'dev' format for request logging
app.use(express.json()); // Parse incoming requests with JSON payloads

//enabling the /api/auth route - using the imported auth routes
app.use("/api/auth", authRoutes);
app.use("/api/sleep", sleepRoutes)
app.use('/api/activity', actRoutes)

// Start the server
const PORT = 3001;
//enabling the localhost at PORT - 3001
app.listen(PORT, () => {
  //console logging the iniation of the server
  console.log(`Server running on port ${PORT}`);
});

module.exports = authRoutes, sleepRoutes;