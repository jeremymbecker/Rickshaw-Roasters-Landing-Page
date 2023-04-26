// server/index.js
//const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");

//const PORT = process.env.PORT || 3000;

const app = express();

app.listen(4000, (err) => {
  if(err){
    console.log(err)
  }
  else{
    console.log("server started successfully");
  }
  
});

mongoose.connect("mongodb://localhost:27017/jwt",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
  console.log("DB Connection successful");
})
.catch((err) => {
  console.log(err.message);
});

// Have Node serve the files for our built React app
//app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(cors({
    origin: ["http://localhost:3000"],
    method: ["GET","POST"],
    credentials: true
}));

app.use(cookieParser);

app.use(express.json());

app.use("/", authRoutes);

/*// Handle GET requests to /api route
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});
  
// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
*/