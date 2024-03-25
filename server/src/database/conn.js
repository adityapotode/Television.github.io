const mongoose = require("mongoose");


  mongoose.connect("mongodb+srv://adityapotode04:lrhFGyvWmx9ivPpu@cluster0.bjdzefy.mongodb.net/Television?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Great Connected DB... :)");
  })
  .catch((error) => {
    console.log("Failed to connect DB", error);
  });
