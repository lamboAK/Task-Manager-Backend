//Utils is the short for utilities which refers to a collection of helper functions or modules designed to perform common tasks on multiple function.

//These  tasks often include things like data validation, formatting, or other repetitive operations that are used across different parts of the application

const mongoose = require("mongoose"); // Import Mongoose

// Utility function to validate MongoDB objectIDs
const validateID = (id) => {
    const isValid = mongoose.Types.ObjectId.isValid(id); // Check if the ID is valid 
    return isValid
};

module.exports = validateID;