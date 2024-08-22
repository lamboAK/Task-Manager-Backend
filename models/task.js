//In backend development, a model is like a blueprint for the data in your application. It defines the structure of your data and how it interacts with the database.

const mongoose = require("mongoose"); // Import Mongoose

const schema = mongoose.Schema; // This is the shortcut to access mongoose class

// Define the Schema for task based on the UI

const taskSchema = new schema({
    title: String, // It represent the Title of the task
    description: String, // Description of the task
    tag: String, // Tag associated with the task "urgent or important"
})



module.exports = mongoose.model("task",taskSchema); // Eports the model to be used for Request operation in the controller