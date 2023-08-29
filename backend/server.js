const express  = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require('./routes/UserRoutes');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log("DB Connected");
});

app.use("/api/users", userRoutes);

app.listen(5000,console.log("server started"));