const express = require("express"); // Import Express Framework
const { getAllTask, createTask, editTask, deleteTask, eachTask } = require("../controller/taskController");

const router = express.Router(); // Create a new router instance

router.get("/", getAllTask); // Route to get all tasks, handled by getAllTask function

router.post("/create", createTask); // How to edit to get all tasks, handled by getAllTask function

router.patch("/:id", editTask); //  Route to edit a specific task by it's ID, handles by editTask fuction in controller

router.delete("/:id", deleteTask); // Route to delete a specific task by it's ID, handle by deleteTask function from controller

router.get("/:id", eachTask); //// Route to get a specific task by it's ID, handle by getTask function from controller

module.exports = router; // we export the router to be used in the main server file app.js
