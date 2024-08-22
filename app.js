require("dotenv").config(); // Load environment variables from a .env file into process.env

const express = require("express"); //import express framework

const mongoose = require("mongoose"); // import mongoose for mongoDB interactions

const cors = require("cors")

const app = express(); //spin up the express framework server

const taskRouter = require("./routes/taskRouter"); // import the taskRouter for task-related routes.
const notFound = require("./middlewares/notfound.js"); // import a middleware to handle 404 errors


app.use(express.json()); // this is a middleware to pass incoming json requests from post man allowing access to the request.body

app.use("/api/task", taskRouter); //Mount the task router at /api/task, all task-related route starts with /api/task

app.use(notFound); // use the custom 404 middleware for handling unmatched route

const port = 3000; //define the port number for the server

// CORS: means Cross Origin Request Sharing: When the frontend and backend are from different origins (domain, ports or protocols) and the backend hasn't been configure to accept request from the frontend origin
app.use(cors())


const start = async () => {
  try {
    // Attempt to connect to MongoDB using mONGOOSE
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected");

    // start the server and listen on the specified port

    app.listen(port, () => {
      console.log(`server is running on PORT ${port}`);
    });
  } catch (error) {
    //Log the error if the database connection fails
    console.log(error);
    console.log("Unable to connect");
  }
};
start();

// Mongooae is an ODM (Object Data Modelling) library for mongoose and Node.js.

// MongoDB as a NoSQL database that stores data in a flexible, JSON like format.

//sandrabarnes127
//KpCpj4khXjKBpxEY
//mongodb+srv://sandrabarnes127:KpCpj4khXjKBpxEY@cluster0.hkrf7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
