const mongoose = require("mongoose");
const DB = process.env.DATABASE;


mongoose.connect(DB)
.then(() =>
{
    console.log("Connection success.");
})
.catch((error) =>
{
    console.log(error)
})