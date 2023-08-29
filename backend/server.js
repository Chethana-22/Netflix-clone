const express  = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require('./routes/UserRoutes');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://chethanasv22:fZKbTGv9g5flryWx@cluster1.hoxl9ie.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log("DB Connected");
});

app.use("/api/users", userRoutes);

app.listen(5000,console.log("server started"));