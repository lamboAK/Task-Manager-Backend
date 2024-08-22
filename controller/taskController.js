// A controller in backend is like a manager that handles the logic for specific part of your application. it decides what should happen when a request comes in and coordinates between the request, your data and response

const Task = require("../models/task");
const validateID = require("../utils/validateID")

//======FUNCTION TO GET ALL THE TASKS========

const getAllTask = async (req, res) => {
    const tasks = await Task.find({}); // Retreve all tasks from the database
    res.status(200).json({tasks}); // send the retrieved task in a JSON response
};

//=========FUNCTION FOR CREATING A NEW TASK===========

const createTask = async (req, res) => {
    console.log(req.body);

    
    
    const {title, description, tag} = req.body;// Destructure the required fields from the request body

    if (!title) {
        return res.status.json({message: "Please provide a title"});
    }

    if (!title) {
        return res.status.json({message: "Please provide a description"});
    }

    if (!title) {
        return res.status.json({message: "choose a tag"});
    }

    

    const task = await Task.create(req.body); // Create a new task with the request data 
    res.status(201).json({message: "Task created successfully", task}); // Send a status code with a message of success 
};

//======Function for editing an existing task=============
const editTask = async (req, res) => {
    const {id} = req.params // Get the task ID from the request parameters

    if (!validateID(id)){
        return res.status(400).json({ message: `ID: ${id} is not valid`});
    }

    const task = await Task.findOneAndUpdate({_id: id},{...req.body}); // Updates the task with the provided data
    res.status(200).json({ message: "Task Updated Successfully"}); // Send the successs message if updated successfully
};

//=========Function to delete and edit task===============
const deleteTask = async (req, res) => {
const { id } = req.params; // Get the task id from the requested parameter

if (!validateID(id)){
    return res.status(400).json({ message: `ID: ${id} is not valid`});
}

const task = await Task.findOneAndDelete({ _id: id }); // Delete the task with the special ID
res.status(200).json(("Task successfully deleted" )); // Send success message if deletion is successful
};

//=================Function to get each of the Task================
const eachTask =  async (req, res) => {
    const{ id } = req.params; // Get the task ID from the request parameter
    const task = await Task.findOne({ _id: id }); // Find the task with the specified ID
    res.status(200).json(( task)); // Send the found task in json response
}

module.exports = { getAllTask, createTask, editTask, deleteTask, eachTask}; // Export the controller function to be used in the router